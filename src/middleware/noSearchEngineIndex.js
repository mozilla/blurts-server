/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'

const { APP_ENV } = AppConstants
const noindexEnvs = ['local', 'heroku', 'stage']
const noSearchEngineIndex = !noindexEnvs.includes(APP_ENV)
  ? (_req, _res, next) => next()
  : (_req, res, next) => {
      res.header('X-Robots-Tag', 'noindex')
      next()
    }

export { noSearchEngineIndex }
