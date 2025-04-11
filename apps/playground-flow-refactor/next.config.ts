// import { codeInspectorPlugin } from 'code-inspector-plugin';

import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // webpack: (config, { dev, isServer }) => {
  //   config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }));
  //   return config;
  // },
  productionBrowserSourceMaps: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    optimizePackageImports: ['@codefast/ui', '@elastic/eui'],
    // turbo: {
    //   plugins: [codeInspectorPlugin({ bundler: 'turbopack' })],
    // },
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

export default withMDX(nextConfig);
