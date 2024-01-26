
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: '/a9721f515/',
    build: {
      outDir: '.output/a9721f515',
      emptyOutDir: true
    },
    server: {
      host: true,
      strictPort: true,
      port: 5173
    }
  })
