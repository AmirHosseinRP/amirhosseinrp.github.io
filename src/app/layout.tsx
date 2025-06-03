import type { Metadata, Viewport } from "next";
import { type ReactNode } from "react";

import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import Layout from "~/components/atoms/Layout/Layout";
import ConfigProvider from "~/shared/providers/ConfigProvider/ConfigProvider";
import "~/shared/styles/globals.css";

export const metadata: Metadata = {
  title: "Amirhossein Rezapanah",
  description: "Portfolio of Amirhossein Rezapanah | Frontend software engineer",
  manifest: "/manifest.json",
  keywords: [
    "Amirhossein Rezapanah",
    "amirhosseinrp",
    "AmirHosseinRP",
    "Frontend",
    "Front-end",
    "Frontend Developer",
    "Front-end Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Amirhossein Rezapanah", url: "https://amirhosseinrp.github.io" }],
  alternates: {
    canonical: "https://amirhosseinrp.github.io",
  },
  verification: {
    google: "DFCD75C22v8WzCBHq5Vq4duelVKipW6mD0jIlpYaBXg",
  },
  appleWebApp: {
    capable: true,
    title: "a.rezapanah",
  },
  openGraph: {
    title: "Amirhossein Rezapanah",
    description: "Portfolio of Amirhossein Rezapanah | Frontend software engineer",
    type: "website",
    url: "https://amirhosseinrp.github.io",
    images: ["/assets/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirhossein Rezapanah",
    description: "Portfolio of Amirhossein Rezapanah | Frontend software engineer",
    images: ["/assets/images/og-image.png"],
    // creator: "@",
  },
};

export const viewport: Viewport = {
  themeColor: "#64639E",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  //  className="dark" data-theme="dark"
  return (
    <html lang="en">
      <head>
        <meta name="android.support.customtabs.trusted.DEFAULT_URL" content="https://amirhosseinrp.github.io" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?" />
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
