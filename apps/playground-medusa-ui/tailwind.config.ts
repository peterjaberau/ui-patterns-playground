import type { Config } from 'tailwindcss';
const path = require('path');
const uiPath = path.resolve(require.resolve('@medusajs/ui'), '../..', '\*_/_.{js,jsx,ts,tsx}');

const config: Config = {
  content: [
    uiPath,
    './index.html',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  presets: [require('@medusajs/ui-preset')],
  darkMode: 'class',
};
export default config;
