/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { guestLayout } from '../views/guestLayout.js'
import { exposureScan } from '../views/partials/exposureScan.js'

function exposureScanPage (req, res, next) {
  if (req.method !== 'POST') {
    return next()
  }

  const data = {
    partial: exposureScan,
    nonce: res.locals.nonce
  }

  res.send(JSON.stringify({ success: true }))
}

export { exposureScanPage }
