import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  mode: 'production',
  html: {
    title: 'Aplicativo'
  },
  output: {
    legalComments: 'none'
  },
  plugins: [pluginReact()]
})
