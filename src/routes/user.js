import { Router } from 'express'

// import { asyncMiddleware } from '../middleware/util.js'
import { requireSessionUser } from '../middleware/auth.js'
import { dashboardPage } from '../controllers/dashboard.js'
import { breachesPage } from '../controllers/breaches.js'
import { dataRemovalPage } from '../controllers/data-removal.js'
import { settingsPage } from '../controllers/settings.js'

const router = Router()

router.get('/dashboard', requireSessionUser, dashboardPage)
router.get('/breaches', requireSessionUser, breachesPage)
router.get('/data-removal', requireSessionUser, dataRemovalPage)
router.get('/settings', requireSessionUser, settingsPage)

export default router
