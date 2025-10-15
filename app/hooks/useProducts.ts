"use client";

import { useState, useEffect } from "react";
import { productService } from "../api/index";
import { Product } from "../types/product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await productService.getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to get products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}