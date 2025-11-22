import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

const PRODUCTS: Product[] = [
  { id: "prod_1", name: "Product 1", price: 1999 },
  { id: "prod_2", name: "Product 2", price: 2999 },
  { id: "prod_3", name: "Product 3", price: 3999 },
];

export default function Products() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleBuyNow = async (productId: string) => {
    setLoadingId(productId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe checkout
      } else {
        alert("Failed to create checkout session.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Check console for details.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-6">${(product.price / 100).toFixed(2)}</p>
            <button
              onClick={() => handleBuyNow(product.id)}
              disabled={loadingId === product.id}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loadingId === product.id ? "Processing..." : "Buy Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
