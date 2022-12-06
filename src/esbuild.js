// TODO: this is a build/config file and should probably live in the root, after the old esbuild.js file is removed.

// ESBuild is used to concat and compress the 'client' folder into the 'dist' folder (front-end only)

import esbuild from 'esbuild'
import { readdirSync } from 'node:fs'
import AppConstants from './app-constants.js'

const cssPartialDir = 'client/css/partials/'
const cssPartialEntryPoints = readdirSync(cssPartialDir, { withFileTypes: true })
  .map(item => cssPartialDir + item.name)

esbuild.build({
  logLevel: 'info',
  bundle: true,
  entryPoints: ['client/js/index.js', 'client/css/index.css', ...cssPartialEntryPoints],
  entryNames: '[dir]/[name]',
  loader: { '.woff2': 'copy' },
  assetNames: '[dir]/[name]',
  external: ['*.png', '*.svg'],
  outdir: '../dist',
  format: 'esm',
  minify: AppConstants.NODE_ENV !== 'dev',
  sourcemap: AppConstants.NODE_ENV !== 'dev',
  splitting: true,
  treeShaking: true,
  platform: 'neutral'
})
