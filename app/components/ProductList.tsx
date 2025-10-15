"use client";

import { useProducts } from "../hooks/useProducts";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

export function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {products.map((product) => (
        <div key={product.name} className="flex flex-col items-center">
          <ProductCard {...product} />
        </div>
      ))}
    </ul>
  );
}