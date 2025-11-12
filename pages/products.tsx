import { useState } from "react";

// Static products data
const productsData = [
  {
    id: 1,
    name: "Product One",
    price: 29.99,
    image: "/images/product1.jpg",
    description: "Short description for product one.",
  },
  {
    id: 2,
    name: "Product Two",
    price: 49.99,
    image: "/images/product2.jpg",
    description: "Short description for product two.",
  },
  {
    id: 3,
    name: "Product Three",
    price: 19.99,
    image: "/images/product3.jpg",
    description: "Short description for product three.",
  },
  {
    id: 4,
    name: "Product Four",
    price: 59.99,
    image: "/images/product4.jpg",
    description: "Short description for product four.",
  },
  {
    id: 5,
    name: "Product Five",
    price: 39.99,
    image: "/images/product5.jpg",
    description: "Short description for product five.",
  },
  {
    id: 6,
    name: "Product Six",
    price: 24.99,
    image: "/images/product6.jpg",
    description: "Short description for product six.",
  },
  {
    id: 7,
    name: "Product Seven",
    price: 44.99,
    image: "/images/product7.jpg",
    description: "Short description for product seven.",
  },
  {
    id: 8,
    name: "Product Eight",
    price: 34.99,
    image: "/images/product8.jpg",
    description: "Short description for product eight.",
  },
  {
    id: 9,
    name: "Product Nine",
    price: 14.99,
    image: "/images/product9.jpg",
    description: "Short description for product nine.",
  },
  {
    id: 10,
    name: "Product Ten",
    price: 79.99,
    image: "/images/product10.jpg",
    description: "Short description for product ten.",
  },
];

export default function Products() {
  const [products] = useState(productsData);

  const handleBuy = async (product: any) => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [product] }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Error creating checkout session");
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-700 mt-1">${product.price}</p>
              <p className="text-sm text-gray-500 mt-1">{product.description}</p>
              <button
                onClick={() => handleBuy(product)}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
