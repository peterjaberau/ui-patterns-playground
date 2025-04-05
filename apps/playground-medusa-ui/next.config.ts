/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  // transpilePackages: ['@xrenders/xflow'],
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    optimizePackageImports: ['@codefast/ui', '@elastic/eui', '@medusajs/ui', '@medusajs/icons'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // reactStrictMode: true,

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

export default withMDX(nextConfig);
