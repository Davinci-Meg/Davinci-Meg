/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages用の設定
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
};

module.exports = nextConfig;