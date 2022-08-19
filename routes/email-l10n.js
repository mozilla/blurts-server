'use strict'
const express = require('express')
const helmet = require('helmet')
const { getEmailMockUps, sendTestEmail, notFound } = require('../controllers/email-l10n')
const { requireAdminUser } = require('../middleware')
const csrf = require('csurf')

const csrfProtection = csrf()
const router = express.Router()
const cspUnsafeInline = {
  directives: {
    defaultSrc: "'self'",
    styleSrc: "'unsafe-inline'"
  }
}

router.get('/', getEmailMockUps)
router.get('/test-email', csrfProtection, requireAdminUser, helmet.contentSecurityPolicy(cspUnsafeInline), (req, res) => res.render('layouts/email-2022-mockup', { layout: 'email-2022-mockup', whichPartial: 'email_partials/email-monthly-unresolved', csrfToken: req.csrfToken(), recipientEmail: req.user.primary_email }))
router.post('/send-test-email', express.urlencoded({ extended: false }), csrfProtection, requireAdminUser, sendTestEmail({ layout: 'email-2022', whichPartial: 'email_partials/email-monthly-unresolved', subjectId: 'email-unresolved-heading' }))
router.use(notFound)

module.exports = router
