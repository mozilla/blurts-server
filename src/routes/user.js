/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import bodyParser from 'body-parser'
import { Router } from 'express'

import { asyncMiddleware } from '../middleware/util.js'
import { requireSessionUser } from '../middleware/auth.js'
import { logout } from '../controllers/auth.js'
// import { dashboardPage } from '../controllers/dashboard.js'
import { breachesPage } from '../controllers/breaches.js'
import { exposuresPage } from '../controllers/exposures.js'
import { dataRemovalPage } from '../controllers/dataRemoval.js'
import { settingsPage } from '../controllers/settings.js'
import {
  unsubscribePage,
  unsubscribeMonthlyPage
} from '../controllers/unsubscribe.js'
import { unsubscribeFromEmails } from '../utils/email.js'

const router = Router()
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

// dashboard page
// MNTOR-1327: for v2 release, we want to temp redirect users from dashboard
// to breach details page for backwards compatibility reasons. Old emails still
// have a reference to the dashboard URI.
// TODO: remove after we have a dashboard
router.get('/dashboard', (req, res) => res.redirect(302, '/user/breaches'))

// data breaches detail page
router.get('/breaches', requireSessionUser, breachesPage)

// data exposures detail page
router.get('/exposures', requireSessionUser, exposuresPage)

// data removal page
router.get('/data-removal', requireSessionUser, dataRemovalPage)

// settings page
router.get('/settings', requireSessionUser, settingsPage)

// sign the user out
router.get('/logout', asyncMiddleware(logout))

// unsubscribe from emails
router.get('/unsubscribe', urlEncodedParser, asyncMiddleware(unsubscribePage))
router.post('/unsubscribe', asyncMiddleware(unsubscribeFromEmails))

router.get(
  '/unsubscribe-monthly',
  urlEncodedParser,
  asyncMiddleware(unsubscribeMonthlyPage)
)

export default router
