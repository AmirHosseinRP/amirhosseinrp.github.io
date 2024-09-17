import withMDX from "@next/mdx";
import withPWA from "next-pwa";

const withPWAConfig = withPWA({
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
    mdxRs: true,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
};

export default withPWAConfig(withMDX(nextConfig));
