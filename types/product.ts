export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  reviews: number;
  image: string;
  description?: string;
}

export interface APIResponse<T> {
  status: boolean
  message: string
  data: T
}