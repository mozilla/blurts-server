import { Router } from 'express'

// import { asyncMiddleware } from '../middleware/util.js'
import { breachDetailsPage } from '../controllers/breach-details.js'
import { requireSessionUser } from '../middleware/auth.js'

const router = Router()

router.get('/breaches', requireSessionUser, breachDetailsPage)
// router.get('/dashboard', requireSessionUser, asyncMiddleware(dashboardPage))
// router.get('/settings', requireSessionUser, asyncMiddleware(settingsPage))

export default router
