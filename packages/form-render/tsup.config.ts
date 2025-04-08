import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  clean: !options.watch,
  dts: true,
  entry: ['src/**/*.ts*', '!src/**/*.test.ts*'],
  format: ['cjs', 'esm'],
  // minify: !options.watch,
  minify: false,
  plugins: [],
  sourcemap: true,
  splitting: false,
  silent: true,
  external: ['@rc-component/color-picker'],

  ...options,
}));
