/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  images: {
    domains: ['media.graphassets.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    gzipSize: true,
  },
};

module.exports = nextConfig;
