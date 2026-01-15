import { fetchAPI } from "@/lib/fetcher";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { toast } from "sonner";


export const useShop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const productsData = async () => {
      const response = await fetchAPI("/products", {
        method: "GET",
        cache: "no-store",
      });

      setProducts(response.data.items);
    };

    productsData();
  }, []);

  const addToCart = async (productID: number, quantity: number) => {
    try {
      await fetchAPI("/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: productID,
          quantity: quantity
        })
      })
      toast.success("Product added to cart");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product to cart");
    }
  }

  return { products, addToCart };
};
