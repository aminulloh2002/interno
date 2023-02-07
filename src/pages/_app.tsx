import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
