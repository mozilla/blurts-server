const esbuild = require('esbuild')
const AppConstants = require('./app-constants')

esbuild.build({
  logLevel: 'info',
  bundle: true,
  entryPoints: ['public/js/app.js', 'public/css/app.css'],
  entryNames: '[name]',
  external: ['./public/img/*', './public/fonts/*'],
  outdir: 'public/dist',
  format: 'esm',
  minify: AppConstants.NODE_ENV !== 'dev',
  sourcemap: AppConstants.NODE_ENV !== 'dev',
  splitting: true,
  treeShaking: true
})
