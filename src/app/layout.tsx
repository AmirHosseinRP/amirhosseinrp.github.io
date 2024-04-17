import { Cookie } from "@/shared/config/enums";
import ConfigProvider from "@/shared/providers/ConfigProvider/ConfigProvider";
import { type Metadata, type Viewport } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
import { type ReactNode } from "react";

export const viewport: Viewport = {
  themeColor: "#0369cd",
  colorScheme: "light dark",
  width: "device-width",
  viewportFit: "cover",
  initialScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  title: "Amirhossein Rezapanah",
  description: "My portfolio web site!",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const theme = cookieStore.get(Cookie.THEME)?.value ?? "light";

  <html lang="en" dir="ltr" className={theme} data-theme={theme}>
    <body className="hide-scrollbar">
      <ConfigProvider>{children}</ConfigProvider>

      <Script src="/service-worker.config.js" strategy="worker" />
    </body>
  </html>;
}
