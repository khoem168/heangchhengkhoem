import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://placehold.co/400x400/1f2937/d1d5db?text=Your+Photo')],
  },
};

export default nextConfig;
