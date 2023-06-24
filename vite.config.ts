import { defineConfig } from 'vite'
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'nueos',
      fileName: 'index',
      formats: ['es','cjs','umd','iife'],
    },
    target: 'esnext',
    outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  root: "./playground",
})
