import express from 'express'
import { landingPage } from '../controllers/index.js'

const router = express.Router()

router.get('/', landingPage)

export default router
