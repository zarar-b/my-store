// pages/products.tsx
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const productsData: Product[] = [
  { id: 1, name: "Product One", price: 29.99, image: "/images/product1.jpg", description: "Short description for product one." },
  { id: 2, name: "Product Two", price: 49.99, image: "/images/product2.jpg", description: "Short description for product two." },
  { id: 3, name: "Product Three", price: 19.99, image: "/images/product3.jpg", description: "Short description for product three." },
  { id: 4, name: "Product Four", price: 59.99, image: "/images/product4.jpg", description: "Short description for product four." },
  { id: 5, name: "Product Five", price: 39.99, image: "/images/product5.jpg", description: "Short description for product five." },
  { id: 6, name: "Product Six", price: 24.99, image: "/images/product6.jpg", description: "Short description for product six." },
  { id: 7, name: "Product Seven", price: 44.99, image: "/images/product7.jpg", description: "Short description for product seven." },
  { id: 8, name: "Product Eight", price: 34.99, image: "/images/product8.jpg", description: "Short description for product eight." },
  { id: 9, name: "Product Nine", price: 14.99, image: "/images/product9.jpg", description: "Short description for product nine." },
  { id: 10, name: "Product Ten", price: 79.99, image: "/images/product10.jpg", description: "Short description for product ten." },
];

export default function Products() {
  const [products] = useState<Product[]>(productsData);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleBuy = async (product: Product) => {
    try {
      setLoadingId(product.id);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [product] }),
      });

      if (!res.ok) {
        const err = await res.json().catch(()=>({error: "unknown"}));
        console.error("Checkout API error:", err);
        alert("Failed to create checkout session. See console for details.");
        setLoadingId(null);
        return;
      }

      const data = await res.json();
      if (data.url) {
        // redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        console.error("No URL returned from checkout API:", data);
        alert("Checkout failed. See console for details.");
      }
    } catch (err) {
      console.error("Checkout request error:", err);
      alert("Checkout request failed. See console.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-700 mt-1">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-1">{product.description}</p>

              <button
                onClick={() => handleBuy(product)}
                disabled={loadingId === product.id}
                className={`mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 text-white rounded ${loadingId === product.id ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
              >
                {loadingId === product.id ? "Processing..." : "Buy Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
