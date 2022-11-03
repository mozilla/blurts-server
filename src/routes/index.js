import express from 'express'
import { landingPage } from '../controllers/landing.js'
import authRoutes from './auth.js'
import userRoutes from './user.js'
import userApiRoutes from './user-api.js'
// import adminRoutes from './admin.js'
const router = express.Router()

router.get('/', landingPage)
router.use('/oauth', authRoutes)
router.use('/user', userRoutes)
// router.use('/admin', adminRoutes)
router.use('/v1/api/user/', userApiRoutes)
// router.use(notFound)

export default router
