import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/ingredients' : 'http://localhost:4040',
      '/login': 'http://localhost:4040',
      '/api': 'http://localhost:4040',
      '/signup': 'http://localhost:4040',
    }
  }
})
