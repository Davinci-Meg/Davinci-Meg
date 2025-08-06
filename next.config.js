/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages用の設定
  assetPrefix: isProd ? '/Davinci-Meg' : '',
  basePath: isProd ? '/Davinci-Meg' : '',
};

module.exports = nextConfig;