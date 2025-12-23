import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'

const OPTS_SASS = {
  sassLoaderOptions: {
    api: 'legacy'
  }
}

export default defineConfig({
  mode: 'development',
  server: {
    proxy: {
      '/ws': 'http://localhost:8000'
    }
  },
  plugins: [pluginReact(), pluginSass(OPTS_SASS)]
})
