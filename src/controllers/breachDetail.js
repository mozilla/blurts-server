/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getBreachByName } from '../utils/hibp.js'
import { getMessage } from '../utils/fluent.js'

import { guestLayout } from '../views/guestLayout.js'
import { allBreaches } from '../views/partials/allBreaches.js'
import { breachDetail } from '../views/partials/breachDetail.js'

async function breachesPage (req, res) {
  const data = {
    partial: allBreaches,
    breaches: req.app.locals.breaches,
    breachLogos: req.app.locals.breachLogoMap,
    meta: {
      title: getMessage('breach-all-meta-title'),
      socialTitle: getMessage('breach-all-meta-social-title'),
      socialDescription: getMessage('breach-all-meta-social-description')
    },
    pathname: req._parsedOriginalUrl?.pathname
  }

  res.send(guestLayout(data))
}

async function breachDetailPage (req, res) {
  const allBreaches = req.app.locals.breaches
  const breachName = req.params.breachName
  const featuredBreach = getBreachByName(allBreaches, breachName)

  if (!featuredBreach) {
    return res.redirect('/')
  }

  const data = {
    partial: breachDetail,
    skipPartialModule: true,
    breach: featuredBreach,
    breachLogos: req.app.locals.breachLogoMap,
    meta: {
      title: getMessage('breach-detail-meta-title', { company: featuredBreach.Title }),
      socialTitle: getMessage('breach-detail-meta-social-title', { company: featuredBreach.Title }),
      socialDescription: getMessage('breach-detail-meta-social-description')
    },
    pathname: req._parsedOriginalUrl?.pathname
  }

  res.send(guestLayout(data))
}

export {
  breachDetailPage,
  breachesPage
}
