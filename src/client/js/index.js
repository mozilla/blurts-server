/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Glean from '@mozilla/glean/web'

import './scroll-observer.js'
import './resize-observer.js'
import './components/circle-chart.js'
import './components/custom-select.js'
import './components/toast-alert.js'
import './nav.js'
import './user-menu.js'
import './partials/breaches.js'
import './partials/settings.js'
import './partials/unsubscribe.js'
import './partials/notFound.js'
import './dialog.js'
import './utils.js'

import * as monitorPings from './generated/pings.js'
import * as userJourneyMetrics from './generated/userJourney.js'

Glean.setDebugViewTag('monitor-dev')
const sendGleanPings = true
Glean.initialize('monitor', sendGleanPings, {
  debug: { logPings: true }
})

userJourneyMetrics.pathname.set(window.location.pathname)
userJourneyMetrics.visit.set(new Date())

monitorPings.userJourney.submit()
