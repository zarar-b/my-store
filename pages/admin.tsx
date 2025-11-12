// pages/admin.tsx
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!form.name || !form.price || !form.image) {
      alert("Name, price, and image are required!");
      return;
    }

    const newProduct: Product = {
      id: products.length + 1,
      name: form.name,
      price: parseFloat(form.price),
      image: form.image,
      description: form.description,
    };

    setProducts([...products, newProduct]);
    setForm({ name: "", price: "", image: "", description: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Product Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border p-2 rounded w-full md:col-span-2"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded w-full md:col-span-2"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Current Products</h2>
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-700 mt-1">${product.price}</p>
                  <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
