// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">My Store</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link href="/admin" className="hover:text-gray-300">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
