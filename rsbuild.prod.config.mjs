import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'

const OPTS_SASS = {
  sassLoaderOptions: {
    api: 'legacy'
  }
}
export default defineConfig({
  mode: 'production',
  html: {
    title: 'Aplicativo'
  },
  output: {
    legalComments: 'none'
  },
  plugins: [pluginReact(), pluginSass(OPTS_SASS)]
})
