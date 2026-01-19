
import { fetchAPI } from "@/lib/fetcher";
import { CartItem } from "@/types/cart";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCartItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetchAPI("/cart", {
        cache: "no-store",
        method: "GET",
      });
      setCartItems(response.data || []);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
      toast.error("Failed to fetch cart items");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [])


  const updateQuantity = useCallback(async (id: number, newQty: number) => {
    const previousCart = [...cartItems]
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
    try {
      await fetchAPI(`/cart/${id}`, {
        method: "PUT",
        body: JSON.stringify({ quantity: newQty }),
        keepalive: true,
      })
    } catch (error) {
      console.error("Failed to update cart item quantity:", error);
      toast.error("Failed to update cart item quantity");
      setCartItems(previousCart)
    }
  }, [cartItems]);

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
    (sum, item) => sum + (item.product?.price ?? 0) * item.quantity,
    0
  );

  return {
    cartItems,
    subtotal,
    removeItem,
    updateQuantity,
    isLoading
  };
}
