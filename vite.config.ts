import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '_assets': path.resolve(__dirname, 'src/assets'),
      '_components': path.resolve(__dirname, 'src/components'),
      '_hooks': path.resolve(__dirname, 'src/hooks'),
      '_modules': path.resolve(__dirname, 'src/modules'),
      '_style': path.resolve(__dirname, 'src/style'),
      '_types': path.resolve(__dirname, 'src/types'),
      '_utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [svgr(),react()],
})
