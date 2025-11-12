"use client";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulated data while Firestore is disabled
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "Elegant Chair",
        price: 120,
        description: "Comfortable modern design with soft cushioning.",
        imageUrl:
          "https://images.unsplash.com/photo-1567016549790-6b2e0b2a6a0f?w=800",
      },
      {
        id: "2",
        name: "Classic Lamp",
        price: 80,
        description: "Minimalist lamp perfect for warm lighting.",
        imageUrl:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
      },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        🛍 Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition"
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{p.name}</h2>
            <p className="text-gray-600 mt-2">{p.description}</p>
            <p className="text-blue-600 font-bold mt-3">${p.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
