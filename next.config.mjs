import withMDX from "@next/mdx";
import withPWA from "next-pwa";

const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
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

export default withMDXConfig(withPWAConfig(nextConfig));
