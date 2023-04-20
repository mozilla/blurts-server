/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'
import express from 'express'

import adminRoutes from './pages/admin.js'
import breachDetailRoutes from './pages/breachDetail.js'
import breachesRoutes from './pages/breaches.js'
import previewRoutes from './pages/preview.js'
import userRoutes from './pages/user.js'

import authRoutes from './api/v1/auth.js'
import dockerFlowRoutes from './api/v1/dockerflow.js'
import hibpApiRoutes from './api/v1/hibp.js'
import userApiRoutes from './api/v1/user.js'

import { dialog } from '../controllers/api/v1/dialog.js'
import { requestBreachScan } from '../controllers/api/v1/requestBreachScan.js'
import { exposureScanPage } from '../controllers/pages/exposureScan.js'
import { landingPage } from '../controllers/pages/landing.js'
import { notFoundPage } from '../controllers/pages/notFound.js'

import { doubleCsrfProtection } from '../utils/csrf.js'
import { notFound } from '../middleware/error.js'

const router = express.Router()

router.get('/', landingPage)
router.use('/admin', doubleCsrfProtection, adminRoutes)
router.use('/breach-details', doubleCsrfProtection, breachDetailRoutes)
router.use('/breaches', doubleCsrfProtection, breachesRoutes)
router.use('/oauth', doubleCsrfProtection, authRoutes)
router.get('/scan', exposureScanPage)
router.use('/user', doubleCsrfProtection, userRoutes)

router.get('*/dialog/:name', dialog)
router.use('/api/v1/hibp/', hibpApiRoutes)
router.use('/api/v1/scan', doubleCsrfProtection, requestBreachScan)
router.use('/api/v1/user/', doubleCsrfProtection, userApiRoutes)
router.use('/api/v1/', doubleCsrfProtection, dockerFlowRoutes)

// Do not make the non-auth previews available on prod
if (AppConstants.NODE_ENV !== 'production') {
  router.use('/preview', previewRoutes)
}

router.use(notFound)
router.use(notFoundPage)

export default router
