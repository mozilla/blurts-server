'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const csrf = require('csurf')

const { asyncMiddleware, requireSessionUser } = require('../middleware')
const { get, post } = require('../controllers/brokers')

const router = express.Router()
const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const csrfProtection = csrf()

router.post('/', urlEncodedParser, csrfProtection, requireSessionUser, asyncMiddleware(post))
router.get('/', csrfProtection, requireSessionUser, asyncMiddleware(get))

module.exports = router
