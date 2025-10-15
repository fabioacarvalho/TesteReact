import { api } from "../main";
import { Product } from "../../types/product";

export async function getProducts(): Promise<Product[]> {
  return api<Product[]>("/products");
}