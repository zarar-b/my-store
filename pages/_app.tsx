// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* pt-16 to avoid navbar overlap */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
