import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/product-preview-card-component/',
  plugins: [vue()],
  server: {
    port: 3000
  }
})
