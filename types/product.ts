export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

export interface APIResponse<T> {
  status: boolean
  message: string
  data: T
}