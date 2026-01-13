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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  return { products, formatPrice };
};
