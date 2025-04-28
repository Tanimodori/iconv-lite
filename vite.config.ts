/// <reference types="node" />
import { resolve } from 'path';
import { defineConfig, type UserConfig } from 'vite';
import { builtinModules } from 'node:module';

export default defineConfig(async (): Promise<UserConfig> => {
  return {
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, 'lib/entry.ts'),
        formats: ['es', 'cjs'],
        fileName: 'index',
      },
      minify: false,
      rollupOptions: {
        external: [...builtinModules, ...builtinModules.map((name) => `node:${name}`)],
      },
    },
  };
});
