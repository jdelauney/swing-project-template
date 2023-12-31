// vite.config.ts
import { defineConfig } from 'vitest/config';
import lightningcss from 'vite-plugin-lightningcss';

export default defineConfig({
  base: './',
  root: 'src',
  server: {
    port: 3000,
    //host: '0.0.0.0',
    // watch: {
    //   usePolling: false,
    // },
  },
  plugins: [
    lightningcss({
      browserslist: '>= 0.25%',
    }),
  ],
  css: {
    postcss: {
      plugins: [
        require('postcss-flexbugs-fixes')({
          bug6: false,
        }),
        require('postcss-sort-media-queries')({
          sort: 'mobile-first',
          configuration: {
            unitlessMqAlwaysFirst: true,
          },
        }),
      ],
    },
  },
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: './reports/tests/coverage',
      reporter: ['text', 'json', 'html'],
    },
    watch: false,
    globals: true,
    threads: false,
    reporter: 'verbose',
  },
});