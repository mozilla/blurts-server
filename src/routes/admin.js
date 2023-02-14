/* This Source Code Form is subject to the terms of the Mozilla Public
  * License, v. 2.0. If a copy of the MPL was not distributed with this
  * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Router } from 'express'

import { asyncMiddleware } from '../middleware/util.js'
import { adminPage } from '../controllers/admin.js'
import { requireAdminUser } from '../middleware/auth.js'
import { emailsPage, sendTestEmail } from '../controllers/email-preview.js'

const router = Router()

router.get('/', requireAdminUser, adminPage)

// emails page
router.get(['/emails', '/emails/:template'], requireAdminUser, emailsPage)

// send test email
router.post(
  '/send-test-email',
  requireAdminUser,
  asyncMiddleware(sendTestEmail)
)

export default router
