import express from 'express'
import { landingPage } from '../controllers/index.js'
import { breachDetailsPage } from '../controllers/breach-details.js'
const router = express.Router()

router.get('/', landingPage)
router.get('/breach-details', breachDetailsPage)

export default router
