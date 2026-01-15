import { fetchAPI } from "@/lib/fetcher";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export const useShop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const productsData = async () => {
    const response = await fetchAPI("/products", {
      method: "GET",
      cache: "no-store",
    });

    setProducts(response.data.items);
  };

  useEffect(() => {
    productsData();
  }, []);

  return { products };
};
