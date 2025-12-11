export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  slug: string;
}

export interface APIResponse<T> {
  status: boolean
  message: string
  data: T
}