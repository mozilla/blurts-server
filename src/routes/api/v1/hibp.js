import { Router } from 'express'
import { asyncMiddleware, bearerToken } from '../../../middleware/util.js'
import { notify } from '../../../controllers/hibp.js'

const router = Router()

router.use('/notify', bearerToken)
router.post('/notify', asyncMiddleware(notify))

export default router
