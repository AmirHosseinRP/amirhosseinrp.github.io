import withMDX from "@next/mdx";
import withPWA from "next-pwa";

const withPWAConfig = withPWA({
  disable: process.env.NODE_ENV !== "production",
  dest: "public",
  register: true,
  skipWaiting: true,
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serviceWorker: true,
    webpackBuildWorker: true,
    isrMemoryCacheSize: 0,
    mdxRs: true,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
};

export default withPWAConfig(withMDX(nextConfig));
