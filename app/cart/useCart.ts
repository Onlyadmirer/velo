
import { fetchAPI } from "@/lib/fetcher";
import { CartItem } from "@/types/cart";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetchAPI("/cart", {
        cache: "no-store",
        method: "GET",
      });
      setCartItems(response.data || []);
    };

    fetchCartItems();
  }, []);

  const updateQuantity = async (id: number, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item): CartItem => {
        if (item.id === id) {
          if (newQuantity > item.product.stock) return item
          return { ...item, quantity: newQuantity }
        }
        return item
      })
    )

    try {
      await fetchAPI(`/cart/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          quantity: newQuantity,
        })
      })
    } catch (error) {
      console.error("Failed to update cart item quantity:", error);
      toast.error("Failed to update cart item quantity");
      setCartItems((prevItems) =>
        prevItems.map((item): CartItem => {
          if (item.id === id) {
            if (newQuantity > item.product.stock) return item
            return { ...item, quantity: newQuantity }
          }
          return item
        })
      )
    }
  }

  const removeItem = async (id: number) => {
    const previousCart = [...cartItems]
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));

    try {
      await fetchAPI(`/cart/${id}`, {
        method: "DELETE",
      })
      toast.success("Item removed from cart");
    } catch (error) {
      console.error("Failed to remove cart item:", error);
      toast.error("Failed to remove cart item");
      setCartItems(previousCart)
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return {
    cartItems,
    subtotal,
    removeItem,
    updateQuantity
  };
}
