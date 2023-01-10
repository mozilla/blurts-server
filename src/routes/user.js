import { Router } from 'express'

import { asyncMiddleware } from '../middleware/util.js'
import { requireSessionUser } from '../middleware/auth.js'
import { logout } from '../controllers/auth.js'
import { dashboardPage } from '../controllers/dashboard.js'
import { breachesPage } from '../controllers/breaches.js'
import { dataRemovalPage } from '../controllers/data-removal.js'
import { settingsPage } from '../controllers/settings.js'

const router = Router()

// dashboard page
router.get('/dashboard', requireSessionUser, dashboardPage)

// data breaches detail page
router.get('/breaches', requireSessionUser, breachesPage)

// data removal page
router.get('/data-removal', requireSessionUser, dataRemovalPage)

// settings page
router.get('/settings', requireSessionUser, settingsPage)

// sign the user out
router.get('/logout', asyncMiddleware(logout))

export default router
