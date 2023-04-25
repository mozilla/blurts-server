/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../utils/fluent.js'
import { getCountryCode } from '../utils/countryCode.js'
import { guestLayout } from '../views/guestLayout.js'
import { generateToken } from '../utils/csrf.js'
import { landing } from '../views/partials/landing.js'

function landingPage (req, res) {
  const data = {
    partial: landing,
    csrfToken: generateToken(res),
    countryCode: getCountryCode(req),
    meta: {
      title: getMessage('brand-fx-monitor'),
      socialTitle: getMessage('brand-fx-monitor'),
      socialDescription: getMessage('meta-desc-2')
    }
  }

  // Backward-compatibility with Monitor V1, for SEO.
  if (req.query.breach) {
    const breach = encodeURIComponent(req.query.breach)
    return res.redirect(`/breach-details/${breach}`)
  }

  res.send(guestLayout(data))
}

export { landingPage }
