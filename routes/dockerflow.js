'use strict'

const express = require('express')
const { vers, heartbeat } = require('../controllers/dockerflow')

const router = express.Router()

router.get('/__version__', vers)
router.get('/__heartbeat__', heartbeat)
router.get('/__lbheartbeat__', heartbeat)

module.exports = router
