/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { doubleCsrf } from 'csrf-csrf'
import * as AppConstants from '../app-constants.js'

// defaults to ignore GET, HEAD, OPTIONS
const { doubleCsrfProtection, generateToken } = doubleCsrf({
  getSecret: (req) => req.secret || AppConstants.CSRF_SECRET,
  cookieName: 'monitor.x-csrf-token'
})

export {
  doubleCsrfProtection,
  generateToken
}
