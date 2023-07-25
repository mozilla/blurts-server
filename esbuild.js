/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// ESBuild is used to concat and compress the 'client' folder into the 'dist' folder (front-end only)

import esbuild from 'esbuild'
import { readdirSync } from 'node:fs'
import AppConstants from './src/appConstants.js'

const cssPartialDir = 'src/client/css/partials/'
const cssPartialPaths = readdirSync(cssPartialDir, { withFileTypes: true })
  .filter(dirent => dirent.isFile())
  .map(dirent => cssPartialDir + dirent.name)

const jsPartialDir = 'src/client/js/partials/'
const jsPartialPaths = readdirSync(jsPartialDir, { withFileTypes: true })
  .filter(dirent => dirent.isFile())
  .map(dirent => jsPartialDir + dirent.name)

esbuild.build({
  logLevel: 'info',
  bundle: true,
  entryPoints: ['src/client/js/index.js', 'src/client/css/index.css', ...cssPartialPaths, ...jsPartialPaths],
  entryNames: '[dir]/[name]',
  loader: { '.woff2': 'copy' },
  assetNames: '[dir]/[name]',
  external: ['*.webp', '*.svg'],
  outdir: 'dist',
  format: 'esm',
  minify: AppConstants.NODE_ENV !== 'development',
  sourcemap: AppConstants.NODE_ENV !== 'development',
  splitting: false, // see note below
  treeShaking: true,
  platform: 'neutral',
  define: {
    buildConstants: JSON.stringify({
      NODE_ENV: AppConstants.NODE_ENV,
      GA4_MEASUREMENT_ID: AppConstants.GA4_MEASUREMENT_ID
    })
  }
})

/*
ESBuild automatic code-splitting is disabled for the following reasons:
- As of this writing, ESBuild code-splitting is suggested to be experimental/WIP: https://esbuild.github.io/api/#splitting
- There is a known bug with ESBuild that loads chunks out of order: https://github.com/evanw/esbuild/issues/399
- The complete client bundle is currently only ~10kB transferred; splitting this down further is unlikely to result in significant load speed gains
- A ticket was completed (MNTOR-1171) to set up native/logical code-splitting depending on partial.
- see also https://github.com/mozilla/blurts-server/pull/2844
*/
