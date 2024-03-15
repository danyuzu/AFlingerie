import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  server: {
    proxy: {
      '/api/orders': 'https://vercel.com/danyuzus-projects/a-flingerie-server',
    }}

})
