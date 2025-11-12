// pages/index.tsx
import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Product One", price: 29.99, image: "/images/product1.jpg" },
    { id: 2, name: "Product Two", price: 49.99, image: "/images/product2.jpg" },
    { id: 3, name: "Product Three", price: 19.99, image: "/images/product3.jpg" },
    { id: 4, name: "Product Four", price: 59.99, image: "/images/product4.jpg" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Banner */}
      <section className="text-center bg-gray-100 rounded-lg p-12 mb-10 shadow">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Store</h1>
        <p className="text-gray-700 mb-6">
          Discover amazing products at unbeatable prices. Browse our collection today!
        </p>
        <Link
          href="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products Preview */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
