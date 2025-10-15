import { api } from "../main";
import { Product } from "../../types/product";

export async function getProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>("/products");
    return response.data;
};


export async function getProductById(id: string): Promise<Product> {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
};