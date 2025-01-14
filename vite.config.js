import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/Portfoliotest1/', // Replace with your GitHub repository name
  optimizeDeps: {
    include: ['framer-motion'],
  },
});
