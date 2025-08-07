import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 最新のWebP/AVIF形式をサポート
    formats: ['image/avif', 'image/webp'],
    // デバイスサイズに合わせた最適化
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // srcset用の画像サイズ
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 画像の最小化
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
