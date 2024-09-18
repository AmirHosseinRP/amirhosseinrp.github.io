// const withPWAConfig = withPWA({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// });

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

// export default withPWAConfig(withMDX(nextConfig));
export default nextConfig;
