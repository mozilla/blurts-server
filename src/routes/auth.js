import { Router } from 'express'
import pkg from 'body-parser'

import { asyncMiddleware } from '../middleware/util.js'
import { init, confirmed } from '../controllers/auth.js'
const { json } = pkg

const router = Router()
const jsonParser = json()

router.get('/init', jsonParser, init)
router.get('/confirmed', jsonParser, asyncMiddleware(confirmed))
// router.get('/logout', logout)

export default router
