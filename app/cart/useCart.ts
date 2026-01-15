import { fetchAPI } from "@/lib/fetcher";
import { CartItem } from "@/types/cart";
import { useEffect, useState } from "react";

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

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item): CartItem => {
        if (item.id === id) {
          if (newQuantity > item.product.quantity) return item
          return { ...item, quantity: newQuantity }
        }
        return item
      })
    )
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
