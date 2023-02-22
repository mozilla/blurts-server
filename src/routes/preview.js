/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Router } from 'express'
import { emailsPreviewPage } from '../controllers/email-preview.js'

const router = Router()

router.get(['/emails', '/emails/:template'], emailsPreviewPage)

export default router
