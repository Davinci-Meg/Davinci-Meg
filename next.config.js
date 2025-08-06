/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages用の設定
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Davinci-Meg' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Davinci-Meg' : '',
};

module.exports = nextConfig;