'use strict'
const express = require('express')
const helmet = require('helmet')
const { getEmailMockUps, previewEmail2022, sendTestEmail, notFound } = require('../controllers/email-l10n')
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
router.get('/email-2022-mockup', csrfProtection, requireAdminUser, helmet.contentSecurityPolicy(cspUnsafeInline), previewEmail2022)
router.post('/send-email-2022', express.urlencoded({ extended: false }), csrfProtection, requireAdminUser, sendTestEmail({ layout: 'email-2022', whichPartial: 'email_partials/email-monthly-unresolved', subjectId: 'email-unresolved-heading' }))
router.use(notFound)

module.exports = router
