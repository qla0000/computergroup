/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
    optimizeCss: {
      critters: {
        ssrMode: true,
        reduceInlineStyles: false,
        pruneSource: true,
      }
    }
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' }
        ]
      }
    ]
  }
};

module.exports = nextConfig;
