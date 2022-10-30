import express from 'express'
import { landingPage } from '../controllers/index.js'

import AuthRoutes from './auth.js'
import userRoutes from './user.js'
// import adminRoutes from './admin.js'
const router = express.Router()

router.get('/', landingPage)
router.use('/oauth', AuthRoutes)
router.use('/user', userRoutes)
// router.use('/admin', adminRoutes)
// router.use(notFound)

export default router
