/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Router } from 'express'

import { requireSessionUser } from '../middleware/auth.js'
import { asyncMiddleware } from '../middleware/util.js'
import { init, confirmed, logout, premiumUpgrade, premiumConfirmed } from '../controllers/auth.js'

const router = Router()

router.get('/init', init)
router.get('/confirmed', asyncMiddleware(confirmed))
router.get('/logout', asyncMiddleware(logout))

router.get('/premium/upgrade', requireSessionUser, asyncMiddleware(premiumUpgrade))
router.get('/premium/confirmed', requireSessionUser, asyncMiddleware(premiumConfirmed))

export default router
