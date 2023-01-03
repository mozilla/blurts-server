import express from 'express'
import { landingPage } from '../controllers/landing.js'
import { robotsTxt } from '../middleware/robots.js'
import { generateToken } from '../middleware/csrf.js'
import authRoutes from './auth.js'
import userRoutes from './user.js'
import hibpApiRoutes from './api/v1/hibp.js'
import userApiRoutes from './api/v1/user.js'
// import adminRoutes from './admin.js'
import { notFound } from '../middleware/error.js'

const router = express.Router()

router.get('/', landingPage)
router.get('/robots.txt', robotsTxt)
router.use('/oauth', authRoutes)
router.use('/user', userRoutes)
// router.use('/admin', adminRoutes)
router.use('/api/v1/user/', userApiRoutes)
router.use('/api/v1/hibp/', hibpApiRoutes)
router.use(notFound)

export default router
