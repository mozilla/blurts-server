/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getBreachByName } from '../utils/hibp.js'

import { guestLayout } from '../views/guestLayout.js'
import { allBreaches } from '../views/partials/all-breaches.js'
import { breachDetails } from '../views/partials/breach-detail.js'

async function breachesPage (req, res) {
  const data = {
    partial: allBreaches,
    breaches: req.app.locals.breaches,
    breachLogos: req.app.locals.breachLogoMap,
    nonce: res.locals.nonce
  }

  res.send(guestLayout(data))
}

async function breachDetailsPage (req, res) {
  const allBreaches = req.app.locals.breaches
  const breachName = req.params.breachName
  const featuredBreach = getBreachByName(allBreaches, breachName)

  if (!featuredBreach) {
    return res.redirect('/')
  }

  const data = {
    partial: breachDetails,
    breach: featuredBreach,
    breachLogos: req.app.locals.breachLogoMap,
    nonce: res.locals.nonce
  }

  res.send(guestLayout(data))
}

export {
  breachDetailsPage,
  breachesPage
}
