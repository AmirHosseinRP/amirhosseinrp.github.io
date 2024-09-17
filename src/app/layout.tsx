import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { type ReactNode } from "react";
import { Cookie } from "~/shared/config/enums";

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
  openGraph: {
    title: "Amirhossein Rezapanah",
    description: "My portfolio web application",
    images: ["https://amirhosseinrp.github.io/"], // TODO: set image
  },
};

export const viewport: Viewport = {
  themeColor: "#1685C5",
  colorScheme: "light dark",
  width: "device-width",
  viewportFit: "cover",
  initialScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const cookieStore = cookies();
  const theme = cookieStore.get(Cookie.THEME as string)?.value ?? "dark";

  return (
    <html lang="en" dir="rtl" className={theme} data-theme={theme}>
      <head>
        <meta name="android.support.customtabs.trusted.DEFAULT_URL" content="https://amirhosseinrp.github.io" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#603cba"></link>
      </head>

      <body className={inter.className}>
        <Layout>
          <ConfigProvider>{children}</ConfigProvider>
        </Layout>

        <Script src="/service-worker.register.js" />
      </body>
    </html>
  );
}
