/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Router } from 'express'
import { asyncMiddleware, bearerToken } from '../../../middleware/util.js'
import { notify } from '../../../controllers/api/v1/hibp.js'

const router = Router()

router.use('/notify', bearerToken)
router.post('/notify', asyncMiddleware(notify))

export default router
