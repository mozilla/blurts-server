// TODO: this is a build/config file and should probably live in the root, after the old esbuild.js file is removed.

import esbuild from 'esbuild'
import AppConstants from './app-constants.js'

esbuild.build({
  logLevel: 'info',
  bundle: true,
  entryPoints: ['client/js/index.js', 'client/css/index.css'],
  entryNames: '[dir]/[name]',
  external: ['../dist/img/*', '../dist/fonts/*'],
  outdir: '../dist',
  format: 'esm',
  minify: AppConstants.NODE_ENV !== 'dev',
  sourcemap: AppConstants.NODE_ENV !== 'dev',
  splitting: true,
  treeShaking: true
})
