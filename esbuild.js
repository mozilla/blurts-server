const AppConstants = require('./app-constants')

require('esbuild').build({
  entryPoints: ['public/js/app.js', 'public/css/app.css'],
  bundle: true,
  minify: AppConstants.NODE_ENV !== 'dev',
  sourcemap: AppConstants.NODE_ENV === 'dev',
  outdir: 'public/dist'
}).catch(() => process.exit(1))
