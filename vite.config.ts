/// <reference types="node" />
import { resolve } from 'path';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig(async (): Promise<UserConfig> => {
  return {
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, 'lib/index.js'),
        formats: ['es', 'cjs'],
      },
    },
  };
});
