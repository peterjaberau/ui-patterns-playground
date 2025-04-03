import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  clean: !options.watch,
  dts: true,
  entry: ['src/**/*.ts*', '!src/**/*.test.ts*'],
  format: ['cjs', 'esm'],
  minify: !options.watch,
  plugins: [],
  sourcemap: true,
  splitting: true,
  silent: true,
  external: ['rc-color-picker'],

  ...options,
}));
