/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // PRE-SALE: basePath/assetPrefix not set — add only when deploying to a subdirectory
};

module.exports = nextConfig;