'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const csrf = require('csurf')

const { asyncMiddleware, requireSessionUser } = require('../middleware')
const { get, post, postOptout, onerep_event_webhook } = require('../controllers/brokers')

const router = express.Router()
const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();
const csrfProtection = csrf()

router.post('/', urlEncodedParser, csrfProtection, requireSessionUser, asyncMiddleware(post))
router.get('/', csrfProtection, requireSessionUser, asyncMiddleware(get))
router.post('/optout/', urlEncodedParser, csrfProtection, requireSessionUser, asyncMiddleware(postOptout))
router.post("/onerep_event", jsonParser, asyncMiddleware(onerep_event_webhook));

module.exports = router
