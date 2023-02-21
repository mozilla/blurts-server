/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// TODO: this is a build/config file and should probably live in the root, after the old esbuild.js file is removed.

// ESBuild is used to concat and compress the 'client' folder into the 'dist' folder (front-end only)

import esbuild from 'esbuild'
import { readdirSync } from 'node:fs'
import AppConstants from './app-constants.js'

const cssPartialDir = 'client/css/partials/'
const cssPartialPaths = readdirSync(cssPartialDir, { withFileTypes: true })
  .filter(dirent => dirent.isFile())
  .map(dirent => cssPartialDir + dirent.name)

const jsPartialDir = 'client/js/partials/'
const jsPartialPaths = readdirSync(jsPartialDir, { withFileTypes: true })
  .filter(dirent => dirent.isFile())
  .map(dirent => jsPartialDir + dirent.name)

esbuild.build({
  logLevel: 'info',
  bundle: true,
  entryPoints: ['client/js/index.js', 'client/css/index.css', ...cssPartialPaths, ...jsPartialPaths],
  entryNames: '[dir]/[name]',
  loader: { '.woff2': 'copy' },
  assetNames: '[dir]/[name]',
  external: ['*.webp', '*.svg'],
  outdir: '../dist',
  format: 'esm',
  minify: AppConstants.NODE_ENV !== 'dev',
  sourcemap: AppConstants.NODE_ENV !== 'dev',
  splitting: false, // see note below
  treeShaking: true,
  platform: 'neutral'
})

/*
ESBuild automatic code-splitting is disabled for the following reasons:
- As of this writing, ESBuild code-splitting is suggested to be experimental/WIP: https://esbuild.github.io/api/#splitting
- There is a known bug with ESBuild that loads chunks out of order: https://github.com/evanw/esbuild/issues/399
- The complete client bundle is currently only ~10kB transferred; splitting this down further is unlikely to result in significant load speed gains
- A ticket exists (MNTOR-1171) to set up logical code-splitting depending on partial. Once complete, the conflict/redundancy with ESBuild code-splitting will increase
- see also https://github.com/mozilla/blurts-server/pull/2844
*/
