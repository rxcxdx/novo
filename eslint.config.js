import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'

export default defineConfig([
  {
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
    settings: { react: { version: 'detect' } }
  },
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn'
    }
  },
  reactPlugin.configs.flat['recommended'],
  reactPlugin.configs.flat['jsx-runtime'],
  {
    rules: {
      'react/prop-types': 'off'
    }
  },
  hooksPlugin.configs['recommended-latest'],
  {
    rules: {
      'react-hooks/exhaustive-deps': 'error'
    }
  }
])
