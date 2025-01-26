/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  basePath: "",
  assetPrefix: "",
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
  },
};

module.exports = nextConfig;
