/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Router } from 'express'
import { heartbeat } from '../../../controllers/dockerflow.js'

const router = Router()

router.get('/__heartbeat__', heartbeat)
router.get('/__lbheartbeat__', heartbeat)

export default router
