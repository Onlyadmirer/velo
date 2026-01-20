
import { fetchAPI } from "@/lib/fetcher";
import { Product } from "@/types/product";
import { useCallback, useState } from "react";

export const useCategory = () => {
  const [itemsCategory, setItemsCategory] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = useCallback(async (category: string) => {
    try {
      setIsLoading(true);
      const response = await fetchAPI(`/products?category=${category}`, {
        method: "GET",
      });
      setItemsCategory(response.data?.items);
    } catch (error) {
      console.error("Error fetching category items:", error);
    } finally {
      setIsLoading(false);
    }
  }, [])

  return { itemsCategory, isLoading, fetchCategories };
}