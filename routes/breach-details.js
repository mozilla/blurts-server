'use strict'

const express = require('express')
const { getBreachDetail } = require('../controllers/breach-details')
const { asyncMiddleware } = require('../middleware')

const router = express.Router()

router.get('/:breachName', asyncMiddleware(getBreachDetail))

module.exports = router
