import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //   build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           if (id.includes('react')) return 'react-vendor'
  //           if (id.includes('axios')) return 'axios-vendor'
  //           return 'vendor'
  //         }

        
  //       },
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,      // Ensure Vite runs on 3000
    host: '0.0.0.0',
  },
  define: {
    'process.env': process.env, // Optional: Ensure Vite reads env variables
  }
})
