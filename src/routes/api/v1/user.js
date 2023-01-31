/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Router, json } from 'express'

import { asyncMiddleware } from '../../../middleware/util.js'
import { requireSessionUser } from '../../../middleware/auth.js'
import { methodNotAllowed } from '../../../middleware/error.js'
import { putBreachResolution, getBreaches } from '../../../controllers/breaches.js'
import { addEmail, resendEmail, removeEmail, verifyEmail, updateCommunicationOptions } from '../../../controllers/settings.js'

const router = Router()
// breaches
router.put('/breaches', requireSessionUser, asyncMiddleware(putBreachResolution))
router.get('/breaches', requireSessionUser, asyncMiddleware(getBreaches))
router.post('/email', requireSessionUser, asyncMiddleware(addEmail))
router.post('/resend-email', requireSessionUser, asyncMiddleware(resendEmail))
router.post('/remove-email', requireSessionUser, asyncMiddleware(removeEmail))
router.get('/verify-email', asyncMiddleware(verifyEmail))
router.post('/update-comm-option', requireSessionUser, asyncMiddleware(updateCommunicationOptions))
router.use(methodNotAllowed)
export default router
