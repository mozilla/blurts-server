/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getCountryCode } from '../utils/country-code.js'
import { guestLayout } from '../views/guestLayout.js'
import { generateToken } from '../utils/csrf.js'
import { landing } from '../views/partials/landing.js'

function landingPage (req, res) {
  const data = {
    partial: landing,
    csrfToken: generateToken(res),
    countryCode: getCountryCode(req)
  }

  // Backward-compatibility with Monitor V1, for SEO.
  if (req.query.breach) {
    const breach = encodeURIComponent(req.query.breach)
    return res.redirect(`/breach-details/${breach}`)
  }

  res.send(guestLayout(data))
}

export { landingPage }
