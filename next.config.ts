import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [25, 50, 75, 80, 85, 90, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'lucide-react/dist/esm/icons'
    ],
  },
};

export default nextConfig;
