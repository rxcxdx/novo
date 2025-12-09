import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  mode: 'development',
  server: {
    proxy: {
      '/ws': 'http://localhost:8000'
    }
  },
  plugins: [pluginReact()]
})
