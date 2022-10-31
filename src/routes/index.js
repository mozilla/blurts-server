import express from 'express'
import { landingPage } from '../controllers/landing.js'
import { dashboardPage } from '../controllers/dashboard.js'
import { breachesPage } from '../controllers/breaches.js'
import { dataRemovalPage } from '../controllers/data-removal.js'
import { settingsPage } from '../controllers/settings.js'
import { requireSessionUser } from '../middleware/auth.js'
import AuthRoutes from './auth.js'
const router = express.Router()

router.get('/', landingPage)
router.get('/dashboard', requireSessionUser, dashboardPage)
router.get('/breaches', requireSessionUser, breachesPage)
router.get('/data-removal', requireSessionUser, dataRemovalPage)
router.get('/settings', requireSessionUser, settingsPage)
router.use('/oauth', AuthRoutes)
// router.use(notFound)

export default router
