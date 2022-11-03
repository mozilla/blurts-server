import { Router } from 'express'

import { asyncMiddleware } from '../middleware/util.js'
import { requireSessionUser } from '../middleware/auth.js'
import { putBreachResolution, getBreaches } from '../controllers/breaches.js'

const router = Router()
// breaches
router.put('/breaches', requireSessionUser, asyncMiddleware(putBreachResolution))
router.get('/breaches', requireSessionUser, asyncMiddleware(getBreaches))
export default router
