
import { Router } from 'express'
import { heartbeat } from '../controllers/dockerflow.js'

const router = Router()

router.get('/__heartbeat__', heartbeat)
router.get('/__lbheartbeat__', heartbeat)

export default router
