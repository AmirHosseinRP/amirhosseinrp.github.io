import type { Metadata, Viewport } from "next";
import { type ReactNode } from "react";

import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import Layout from "~/components/atoms/Layout/Layout";
import ConfigProvider from "~/shared/providers/ConfigProvider/ConfigProvider";
import "~/shared/styles/globals.css";

export const metadata: Metadata = {
  title: "Amirhossein Rezapanah",
  description: "My portfolio web application",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "a.rezapanah",
  },
  openGraph: {
    title: "Amirhossein Rezapanah",
    description: "My portfolio web application",
    images: ["https://amirhosseinrp.github.io/"], // TODO: set image
  },
};

export const viewport: Viewport = {
  themeColor: "#64639E",
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

      <body className="root-layout" suppressHydrationWarning>
        <Layout>
          <ConfigProvider>{children}</ConfigProvider>
        </Layout>

        <Script src="/service-worker.register.js" />
      </body>
    </html>
  );
}
