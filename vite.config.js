import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/New-Portfolio/',  // This should match your GitHub repo name or desired subfolder
  build: {
    rollupOptions: {
      output: {
        // Ensure output paths are correctly defined
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        entryFileNames: 'static/js/[name]-[hash].js',
        chunkFileNames: 'static/js/[name]-[hash].js',
      },
    },
  },
});
