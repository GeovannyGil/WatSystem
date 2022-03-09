import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: 'Fragment',
    jsxInject: 'import { createElement as _jsx, Fragment as _jsxFragment } from \'react\''
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  }
})
