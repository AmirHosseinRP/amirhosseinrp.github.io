import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import Layout from "~/components/atoms/Layout/Layout";
import ConfigProvider from "~/shared/providers/ConfigProvider/ConfigProvider";
import "~/shared/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amirhossein Rezapanah",
  description: "My portfolio web application",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Rezapanah",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/assets/startup/apple-touch-startup-image-768x1004.png",
      {
        url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  openGraph: {
    title: "Amirhossein Rezapanah",
    description: "My portfolio web application",
    images: ["https://amirhosseinrp.github.io/"], // TODO: set image
  },
};

export const viewport: Viewport = {
  themeColor: "#333333",
  colorScheme: "light dark",
  width: "device-width",
  viewportFit: "cover",
  initialScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  //  className="dark" data-theme="dark"
  return (
    <html lang="en">
      <head>
        <meta name="android.support.customtabs.trusted.DEFAULT_URL" content="https://amirhosseinrp.github.io" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#333333"></link>
        <link rel="web-app-origin-association" href="/.well-known/web-app-origin-association"></link>
      </head>

      <body className={inter.className} suppressHydrationWarning>
        <Layout>
          <ConfigProvider>{children}</ConfigProvider>
        </Layout>

        <Script src="/service-worker.register.js" />
      </body>
    </html>
  );
}
