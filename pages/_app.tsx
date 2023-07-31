import "@/assets/styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between max-w-[1400px] ${inter.className}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
