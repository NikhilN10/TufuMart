import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Force Rollup to use JS fallback instead of native bindings
      external: [],
    },
  },
  optimizeDeps: {
    exclude: ['@rollup/rollup-linux-x64-gnu'],
  },
  define: {
    'process.env.ROLLUP_NO_NATIVE': '"1"',
  },
})