/** @type {import('next').NextConfig} */
import { codeInspectorPlugin } from 'code-inspector-plugin';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }));
    return config;
  },
  productionBrowserSourceMaps: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    optimizePackageImports: ['@codefast/ui', '@elastic/eui'],
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['src'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/src/apps',
  //       permanent: false,
  //     },
  //   ]
  // },
  // output: 'standalone',
};

export default nextConfig;
