/** @type { import('postcss-load-config').Config } */
import config from 'packages/ui/postcss.config.js';

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
