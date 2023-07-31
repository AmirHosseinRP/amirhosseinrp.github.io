import "@/assets/styles/globals.scss";
import type { AppProps } from "next/app";
import { Gantari } from "next/font/google";
const gantari = Gantari({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between max-w-[1400px] ${gantari.className}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
