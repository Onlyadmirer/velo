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
    setCartItems(
      cartItems.map((item): CartItem => {
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
          keepalive: true
        })
      })
    } catch (error) {
      console.error("Failed to update cart item quantity:", error);
      toast.error("Failed to update cart item quantity");
      setCartItems(
        cartItems.map((item): CartItem => {
          if (item.id === id) {
            if (newQuantity > item.product.stock) return item
            return { ...item, quantity: newQuantity }
          }
          return item
        })
      )
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  // const shipping = 15.0;
  // const tax = subtotal * 0.1;
  // const total = subtotal + shipping + tax;

  return {
    cartItems,
    subtotal,
    removeItem,
    updateQuantity
  };
}
