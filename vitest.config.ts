import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
import tsConfiPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  plugins: [
    tsConfiPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
});