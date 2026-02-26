import assert from 'node:assert/strict'
import fs from 'fs'

const arquivos = [
  'prettier.config.js',
  'eslint.config.js',
  'rsbuild.config.mjs',
  'rsbuild.prod.config.mjs',
  'postcss.config.mjs'
]

arquivos.forEach((v) => {
  assert(fs.existsSync(v))
})
