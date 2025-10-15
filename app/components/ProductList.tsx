"use client";

import { useMemo, useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import Loading from "./Loading";
import ProductCard from "./ProductCard";
import { ProductListProps } from "../types/product";

export function ProductList({ filter }: ProductListProps) {
  const { products, loading, error } = useProducts();
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        return (
          product.name.toLowerCase().includes(filter.toLowerCase()) ||
          product.model.toLowerCase().includes(filter.toLowerCase()) ||
          product.cars.some((car) => car.toLowerCase().includes(filter.toLowerCase()))
        );
      }),
    [products, filter]
  );

  const visibleProducts = filteredProducts.slice(0, itemsPerPage);

  const loadMore = () => {
    setItemsPerPage((prev) => prev + itemsPerPage);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
  };



  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  if (!loading && products.length === 0) {
    return <p className="text-gray-500 text-center mt-6">Nenhum produto cadastrado.</p>;
  }

  return (
   
    <div>
      
      <ul>
        {visibleProducts.map((product) => (
          <li key={product.name} className="flex flex-col items-center">
            <ProductCard {...product} />
          </li>
        ))}
      </ul>

      {itemsPerPage < filteredProducts.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Carregar mais
          </button>
        </div>
      )}

      {filteredProducts.length > 0 && (
        <div className="mb-4 mt-4">
          <label htmlFor="itemsPerPage" className="mr-2 font-medium">
            Itens por página:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border border-gray-300 rounded px-2 py-1 text-black"
          >
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      )}

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 text-center mt-6">Nenhum produto encontrado</p>
      )}
    </div>
  );
}