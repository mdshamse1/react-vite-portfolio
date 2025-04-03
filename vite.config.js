import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Fix asset loading issues
  plugins: [react()],
})
