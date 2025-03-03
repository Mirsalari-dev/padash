import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
  publicRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
};

export default nextConfig;
