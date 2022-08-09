'use strict'

const express = require('express')
const bearerToken = require('express-bearer-token')
const bodyParser = require('body-parser')
const csrf = require('csurf')

const { asyncMiddleware, requireSessionUser } = require('../middleware')
const {
  add, verify, logout,
  getDashboard, getPreferences, getBreachStats,
  removeEmail, resendEmail, updateCommunicationOptions,
  getUnsubscribe, postUnsubscribe, getRemoveFxm, postRemoveFxm, postResolveBreach, admin
} = require('../controllers/user')

const router = express.Router()
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const csrfProtection = csrf()

router.get('/dashboard', csrfProtection, requireSessionUser, asyncMiddleware(getDashboard))
router.get('/preferences', csrfProtection, requireSessionUser, asyncMiddleware(getPreferences))
router.use('/breach-stats', bearerToken())
router.get('/breach-stats', urlEncodedParser, asyncMiddleware(getBreachStats))
router.get('/logout', logout)
router.post('/email', urlEncodedParser, csrfProtection, requireSessionUser, asyncMiddleware(add))
router.post('/remove-email', urlEncodedParser, csrfProtection, requireSessionUser, asyncMiddleware(removeEmail))
router.post('/resend-email', jsonParser, csrfProtection, requireSessionUser, asyncMiddleware(resendEmail))
router.post('/update-comm-option', jsonParser, csrfProtection, requireSessionUser, asyncMiddleware(updateCommunicationOptions))
router.get('/verify', jsonParser, asyncMiddleware(verify))
router.use('/unsubscribe', urlEncodedParser)
router.get('/unsubscribe', urlEncodedParser, asyncMiddleware(getUnsubscribe))
router.post('/unsubscribe', csrfProtection, asyncMiddleware(postUnsubscribe))
router.get('/remove-fxm', urlEncodedParser, csrfProtection, requireSessionUser, asyncMiddleware(getRemoveFxm))
router.post('/remove-fxm', jsonParser, csrfProtection, requireSessionUser, asyncMiddleware(postRemoveFxm))
router.post('/resolve-breach', jsonParser, urlEncodedParser, requireSessionUser, asyncMiddleware(postResolveBreach))
router.get('/admin', requireSessionUser, admin)
module.exports = router
