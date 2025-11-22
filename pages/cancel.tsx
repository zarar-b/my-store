import Link from "next/link";

export default function Cancel() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-6 text-red-600">Payment Canceled</h1>
      <p className="mb-6">Your payment was not completed. You can try again.</p>
      <Link
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Back to Products
      </Link>
    </div>
  );
}
