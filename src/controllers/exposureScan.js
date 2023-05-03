/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { generateToken } from '../utils/csrf.js'
import { guestLayout } from '../views/guestLayout.js'
import { exposureScan } from '../views/partials/exposureScan.js'
import { getMessage } from '../utils/fluent.js'

/**
 * @type {import('express').RequestHandler}
 */
const exposureScanPage = (req, res, next) => {
  if (req.method !== 'GET') {
    next()
    return
  }

  /**
   * @type {GuestViewPartialData<import('../views/partials/exposureScan.js').PartialParameters>}
   */
  const data = {
    partial: exposureScan,
    nonce: res.locals.nonce,
    csrfToken: generateToken(res, req),
    meta: {
      title: getMessage('breach-scan-meta-title'),
      socialTitle: getMessage('breach-scan-meta-social-title'),
      socialDescription: getMessage('breach-scan-meta-social-description')
    }
  }

  res.send(guestLayout(data))
}

export { exposureScanPage }
