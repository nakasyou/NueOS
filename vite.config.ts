import { defineConfig } from 'npm:vite'
import * as path from "https://deno.land/std@0.192.0/path/mod.ts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('./src/index.ts'),
      name: 'nueos',
      fileName: 'index',
      formats: ['es','cjs','umd','iife'],
    },
    target: 'esnext',
    outDir: path.resolve('./dist'),
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  root: "./playground",
})
