/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { generateToken } from '../utils/csrf.js'
import { guestLayout } from '../views/guestLayout.js'
import { exposureScan } from '../views/partials/exposureScan.js'

function exposureScanPage (req, res, next) {
  if (req.method !== 'GET' || typeof req.query.email !== 'string') {
    next()
    return
  }

  const data = {
    partial: exposureScan,
    nonce: res.locals.nonce,
    csrfToken: generateToken(res)
  }

  res.send(guestLayout(data))
}

export { exposureScanPage }
