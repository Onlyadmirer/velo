import { Product } from "./product";

export interface CartItem {
  id: number;
  quantity: number;
  userID: number;
  productID: number;
  product: Product;
}
