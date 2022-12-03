import { Router } from 'express'

import { asyncMiddleware } from '../middleware/util.js'
import { init, confirmed, logout } from '../controllers/auth.js'

const router = Router()

router.get('/init', init)
router.get('/confirmed', asyncMiddleware(confirmed))
router.get('/logout', asyncMiddleware(logout))

export default router
