import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      // If you need to exclude the file, use relative path or package names
      external: ['assets/index.js'],  // Assuming assets is a folder in your public directory
    },
  },
  plugins: [react()],
});