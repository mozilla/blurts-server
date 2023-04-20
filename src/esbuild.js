/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// TODO: this is a build/config file and should probably live in the root, after the old esbuild.js file is removed.

// ESBuild is used to concat and compress the 'client' folder into the 'dist' folder (front-end only)

import esbuild from 'esbuild'
import { readdirSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import AppConstants from './appConstants.js'

const cssPartialDir = 'client/css/partials/'
const cssPartialPaths = readdirSync(cssPartialDir, { withFileTypes: true })
  .filter(dirent => dirent.isFile())
  .map(dirent => cssPartialDir + dirent.name)

const jsPartialDir = 'client/js/partials/'
const jsPartialPaths = readdirSync(jsPartialDir, { withFileTypes: true })
  .filter(dirent => dirent.isFile())
  .map(dirent => jsPartialDir + dirent.name)

const buildResult = await esbuild.build({
  logLevel: 'info',
  bundle: true,
  entryPoints: ['client/js/index.js', 'client/css/index.css', ...cssPartialPaths, ...jsPartialPaths],
  entryNames: '[dir]/[name]-[hash].hashed',
  loader: { '.woff2': 'copy' },
  assetNames: '[dir]/[name]-[hash].hashed',
  external: ['*.webp', '*.svg'],
  outdir: '../dist',
  format: 'esm',
  metafile: true,
  minify: AppConstants.NODE_ENV !== 'dev',
  sourcemap: AppConstants.NODE_ENV !== 'dev',
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

function getPathMap (meta) {
  /** @type {Record<string, string>} */
  const assetPathMap = {}

  Object.entries(meta.outputs).forEach(([outputPath, outputMeta]) => {
    if (outputMeta.entryPoint) {
      assetPathMap[outputMeta.entryPoint] = outputPath
    } else {
      const [onlyInput] = Object.keys(outputMeta.inputs)
      if (onlyInput) {
        assetPathMap[onlyInput] = outputPath
      }
    }
  })

  return assetPathMap
}

writeFile('../dist/meta.json', JSON.stringify(getPathMap(buildResult.metafile)))

/*
ESBuild automatic code-splitting is disabled for the following reasons:
- As of this writing, ESBuild code-splitting is suggested to be experimental/WIP: https://esbuild.github.io/api/#splitting
- There is a known bug with ESBuild that loads chunks out of order: https://github.com/evanw/esbuild/issues/399
- The complete client bundle is currently only ~10kB transferred; splitting this down further is unlikely to result in significant load speed gains
- A ticket exists (MNTOR-1171) to set up logical code-splitting depending on partial. Once complete, the conflict/redundancy with ESBuild code-splitting will increase
- see also https://github.com/mozilla/blurts-server/pull/2844
*/
