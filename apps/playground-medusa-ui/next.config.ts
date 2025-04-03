/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // transpilePackages: ['@xrenders/xflow'],

  experimental: {
    optimizePackageImports: ['@codefast/ui', '@elastic/eui', '@medusajs/ui', '@medusajs/icons', '@ui-patterns/x-flow'],
  },

  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     immer: require.resolve('immer'),
  //   };
  //   return config;
  // },

  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
