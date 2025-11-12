"use client";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    id: "",
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl) {
      alert("Please fill all required fields.");
      return;
    }
    const id = Math.random().toString(36).substring(2, 9);
    setProducts([...products, { ...newProduct, id }]);
    setNewProduct({ id: "", name: "", price: 0, description: "", imageUrl: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        🛠 Admin Product Upload
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={newProduct.imageUrl}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <button
            onClick={addProduct}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white shadow rounded-xl p-4">
            <img
              src={p.imageUrl}
              alt={p.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600">${p.price}</p>
            <p className="text-sm text-gray-500 mt-2">{p.description}</p>
<button
  onClick={async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [p] }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }}
  className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
>
  Buy Now
</button>

          </div>
        ))}
      </div>
    </main>
  );
}
