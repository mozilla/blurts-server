/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import express from 'express'
import { landingPage } from '../controllers/landing.js'
import { dialog } from '../controllers/dialog.js'
import { robotsTxt } from '../middleware/robots.js'
import dockerFlowRoutes from './dockerflow.js'
import authRoutes from './auth.js'
import userRoutes from './user.js'
import hibpApiRoutes from './api/v1/hibp.js'
import userApiRoutes from './api/v1/user.js'
// import adminRoutes from './admin.js'
import { notFound } from '../middleware/error.js'

const router = express.Router()

router.use('/', dockerFlowRoutes)
router.get('/', landingPage)
router.get('/dialog/:partial', dialog)
router.get('/robots.txt', robotsTxt)
router.use('/oauth', authRoutes)
router.use('/user', userRoutes)
// router.use('/admin', adminRoutes)
router.use('/api/v1/user/', userApiRoutes)
router.use('/api/v1/hibp/', hibpApiRoutes)
router.use(notFound)

export default router
