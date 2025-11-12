"use client";
import { useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "test"));
        snapshot.forEach((doc) => console.log(doc.id, doc.data()));
      } catch (err) {
        console.error("Firestore connection error:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🔥 Firebase Connected!
        </h1>
        <p className="text-gray-700">
          Next.js + TailwindCSS + Firebase setup complete ✅
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Cool Button
        </button>
      </div>
    </main>
  );
}
