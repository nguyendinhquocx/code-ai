import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    target: 'es2022',
    minify: 'esbuild', // Use esbuild instead of terser (faster, built-in)
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 5173,
    open: false,
    strictPort: false
  },
  preview: {
    port: 4173,
    open: false
  }
});
