'use strict'
const express = require('express')
const helmet = require('helmet')
const { getEmailMockup, sendTestEmail, notFound } = require('../controllers/email-l10n')
const { requireAdminUser } = require('../middleware')
const csrf = require('csurf')

const csrfProtection = csrf()
const router = express.Router()
const cspUnsafeInline = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'https://monitor.cdn.mozilla.net/'],
    formAction: ["'self'"]
  }
}

// Route needs unsafe-inline because inline styles are required as best-practice for HTML email styling.
// Route requires admin user and is not enabled for production.
router.get('/', requireAdminUser, csrfProtection, helmet.contentSecurityPolicy(cspUnsafeInline), getEmailMockup)
router.post('/send-test-email', express.urlencoded({ extended: false }), csrfProtection, requireAdminUser, sendTestEmail)
router.use(notFound)

module.exports = router
