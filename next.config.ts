import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint checks during the build process
  },
};

export default nextConfig;
