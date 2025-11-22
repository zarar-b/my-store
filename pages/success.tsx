import Link from "next/link";

export default function Success() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-6 text-green-600">Payment Successful!</h1>
      <p className="mb-6">Thank you for your purchase. Your order is being processed.</p>
      <Link
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Back to Products
      </Link>
    </div>
  );
}
