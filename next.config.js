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
  basePath: process.env.NODE_ENV === "production" ? "/computergroup" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/computergroup" : "",
};

module.exports = nextConfig;
