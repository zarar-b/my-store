import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Store</h1>
      <p className="mb-6">Check out our amazing products!</p>
      <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        View Products
      </Link>
    </div>
  );
}
