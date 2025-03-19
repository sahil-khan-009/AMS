import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allows access from other devices
    port: 5173, // Ensure you're using the right port
    strictPort: true
    
  },
  plugins: [react()],
})
