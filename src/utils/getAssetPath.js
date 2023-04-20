/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

/** @type {Record<string, string>} */
const assetPathMap = process.env.npm_lifecycle_event === 'dev' ? {} : JSON.parse(readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), '../../dist/meta.json'), 'utf-8'))

/**
 * @param {string} sourcePath
 * @returns {string | undefined}
 */
export function getAssetPath (sourcePath) {
  if (process.env.npm_lifecycle_event === 'dev') {
    return sourcePath
  }

  return assetPathMap['client' + sourcePath]?.replace('../dist', '')
}
