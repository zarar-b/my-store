// pages/_app.tsx
import "../styles/globals.css"; // <-- make sure the file is exactly styles/globals.css
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
