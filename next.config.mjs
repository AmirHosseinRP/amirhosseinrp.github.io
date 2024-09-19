import withMDX from "@next/mdx";
import withPWA from "next-pwa";

const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  // reactStrictMode: true,
  // experimental: {
  //   serviceWorker: true,
  //   webpackBuildWorker: true,
  //   isrMemoryCacheSize: 0,
  //   mdxRs: true,
  // },
  // httpAgentOptions: {
  //   keepAlive: true,
  // },
};

export default withPWAConfig(withMDX(nextConfig));
