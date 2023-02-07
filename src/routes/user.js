/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Router } from 'express'

import { asyncMiddleware } from '../middleware/util.js'
import { requireSessionUser } from '../middleware/auth.js'
import { logout } from '../controllers/auth.js'
import { dashboardPage } from '../controllers/dashboard.js'
import { breachesPage } from '../controllers/breaches.js'
import { dataRemovalPage } from '../controllers/data-removal.js'
import { emailsPage, sendTestEmail } from '../controllers/email-preview.js'
import { settingsPage } from '../controllers/settings.js'

const router = Router()

// dashboard page
router.get('/dashboard', requireSessionUser, dashboardPage)

// data breaches detail page
router.get('/breaches', requireSessionUser, breachesPage)

// data removal page
router.get('/data-removal', requireSessionUser, dataRemovalPage)

// emails page
router.get(['/emails', '/emails/:template'], requireSessionUser, emailsPage)

// settings page
router.get('/settings', requireSessionUser, settingsPage)

// sign the user out
router.get('/logout', asyncMiddleware(logout))

// send test email
router.post(
  '/send-test-email',
  requireSessionUser,
  asyncMiddleware(sendTestEmail)
)

export default router
