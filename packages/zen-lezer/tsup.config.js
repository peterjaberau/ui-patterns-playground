import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/parser.js'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  external: (id) => !/^[\.\/]/.test(id),
  treeshake: true,
});
