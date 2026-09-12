import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },
  compress: true,
  poweredByHeader: false,
  // Remove unused imports from bundle
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
