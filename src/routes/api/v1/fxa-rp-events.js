/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 import { Router } from 'express'
 import { asyncMiddleware } from '../../../middleware/util.js'
 import { fxaRpEvents } from '../../../controllers/fxa-rp-events.js'
 
 const router = Router()
 
 router.post('/fxa-rp-events', asyncMiddleware(fxaRpEvents))
 
 export default router
 