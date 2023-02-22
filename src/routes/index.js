/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import express from 'express'

import adminRoutes from './admin.js'
import authRoutes from './auth.js'
import dockerFlowRoutes from './dockerflow.js'
import hibpApiRoutes from './api/v1/hibp.js'
import previewRoutes from './preview.js'
import userApiRoutes from './api/v1/user.js'
import userRoutes from './user.js'

import { dialog } from '../controllers/dialog.js'
import { landingPage } from '../controllers/landing.js'
import { notFoundPage } from '../controllers/notFound.js'
import { notFound } from '../middleware/error.js'
import { robotsTxt } from '../middleware/robots.js'

const router = express.Router()

router.get('/', landingPage)
router.get('/robots.txt', robotsTxt)
router.get('*/dialog/:name', dialog)

router.use('/', dockerFlowRoutes)
router.use('/admin', adminRoutes)
router.use('/api/v1/hibp/', hibpApiRoutes)
router.use('/api/v1/user/', userApiRoutes)
router.use('/oauth', authRoutes)
router.use('/preview', previewRoutes)
router.use('/user', userRoutes)

router.use(notFound)
router.use(notFoundPage)

export default router
