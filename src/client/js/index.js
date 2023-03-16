/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Glean from '@mozilla/glean/web'
import { v4 as uuidv4 } from 'uuid'

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
import * as monitorManagementMetrics from './generated/monitor.js'
import * as userJourneyMetrics from './generated/userJourney.js'

Glean.setDebugViewTag('monitor-dev')
const sendGleanPings = true
Glean.initialize('monitor', sendGleanPings, {
  debug: { logPings: true }
})

userJourneyMetrics.pathname.set(window.location.href)
userJourneyMetrics.visit.set(new Date())

// FIXME safely derive stable ID
// const monitorId = uuidv5(req.user.fxa_uid, AppConstants.GLEAN_UUID_NAMESPACE)
const monitorId = uuidv4()

monitorManagementMetrics.id.set(monitorId)
monitorPings.userJourney.submit()
