import express from 'express'
import { landingPage } from '../controllers/index.js'
import { breachDetailsPage } from '../controllers/breach-details.js'
import { requireSessionUser } from '../middleware/user.js'
import AuthRoutes from './auth.js'
const router = express.Router()

router.get('/', landingPage)
router.get('/breach-details', requireSessionUser, breachDetailsPage)
router.use('/auth', AuthRoutes)
// router.use(notFound)

export default router
