import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-portfolio/',  // Make sure this is set
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
