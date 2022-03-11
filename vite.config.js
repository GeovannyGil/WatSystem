import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'

export default defineConfig({

  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  define: {
    global: 'globalThis'
  }
})
