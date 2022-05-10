'use strict'
const express = require('express')
const { getEmailMockUps, notFound } = require('../controllers/email-l10n')
const router = express.Router()

router.get('/', getEmailMockUps)
router.use(notFound)

module.exports = router
