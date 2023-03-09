/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getBreachByName } from '../utils/hibp.js'

import { mainLayout } from '../views/main.js'
import { allBreachesPartial } from '../views/partials/all-breaches.js'
import { breachDetailsPartial } from '../views/partials/breach-detail.js'

async function breachesPage (req, res) {
  const data = {
    partial: allBreachesPartial,
    nonce: res.locals.nonce,
    breaches: req.app.locals.breaches
  }

  res.send(mainLayout(data))
}

async function breachDetailsPage (req, res) {
  const allBreaches = req.app.locals.breaches
  const breachName = req.params.breachName
  const featuredBreach = getBreachByName(allBreaches, breachName)

  if (!featuredBreach) {
    return res.redirect('/')
  }

  const data = {
    partial: breachDetailsPartial,
    nonce: res.locals.nonce,
    breach: featuredBreach
  }

  res.send(mainLayout(data))
}

export {
  breachDetailsPage,
  breachesPage
}
