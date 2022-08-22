'use strict'

const EmailUtils = require('../email-utils')
const AppConstants = require('../app-constants')
const path = require('path')
const { readdir } = require('fs/promises')
const partialDir = path.join(path.dirname(require.main.filename), '/views/partials/email_partials')
const { LocaleUtils } = require('./../locale-utils')
const DB = require('../db/DB')
const { initMinuteCron } = require('../cron')

let partialFilenames

async function getPartialFilenames () {
  try {
    partialFilenames = await readdir(partialDir)
  } catch (e) {
    console.error(e)
    partialFilenames = []
  }

  return partialFilenames
}

async function getEmailMockUps (req, res) {
  const email = 'example@email.com'
  const partials = partialFilenames || await getPartialFilenames()

  if (!['dev', 'heroku'].includes(AppConstants.NODE_ENV)) return notFound(req, res)

  if (!req.query.partial) {
    req.query.partial = 'email_verify'
    req.query.type = 'email_verify'
  }

  if (!partials.includes(`${req.query.partial}.hbs`)) return notFound(req, res)

  if (['breachAlert', 'pre-fxa', 'singleBreach', 'multipleBreaches', 'noBreaches', 'email_verify'].indexOf(req.query.type) === -1) {
    return res.redirect('/email-l10n')
  }

  const unsafeBreachesForEmail = [];
  ['Dropbox', 'Apollo', 'Adobe'].forEach(name => {
    unsafeBreachesForEmail.push(req.app.locals.breaches.filter(breach => breach.Name === name)[0])
  })

  const emailContent = ((req) => {
    switch (req.query.type) {
      case 'pre-fxa':
        return {
          emailSubject: req.fluentFormat('pre-fxa-subject'),
          preFxaEmail: true,
          breachAlert: null
        }
      case 'noBreaches':
        return {
          emailSubject: req.fluentFormat('email-subject-no-breaches'),
          breachAlert: null,
          unsafeBreachesForEmail: []
        }
      case 'breachAlert':
        return {
          emailSubject: req.fluentFormat('breach-alert-subject'),
          breachAlert: req.app.locals.breaches.filter(breach => breach.Name === 'LinkedIn')[0],
          unsafeBreachesForEmail: null,
          preFxaSubscriber: true
        }
      case 'email_verify':
        return {
          emailSubject: req.fluentFormat('email-subject-verify'),
          breachAlert: null,
          unsafeBreachesForEmail: null
        }
      case 'multipleBreaches':
        return {
          emailSubject: req.fluentFormat('email-subject-found-breaches'),
          unsafeBreachesForEmail,
          breachAlert: null
        }
      default:
        return {
          emailSubject: req.fluentFormat('email-subject-found-breaches'),
          unsafeBreachesForEmail: unsafeBreachesForEmail.slice(0, 1),
          breachAlert: null
        }
    }
  })(req)

  res.render('email_l10n', {
    layout: 'email_l10n_mockups.hbs',
    unsafeBreachesForEmail: emailContent.unsafeBreachesForEmail,
    supportedLocales: req.supportedLocales,
    whichPartial: `email_partials/${req.query.partial}`,
    breachedEmail: 'breachedEmail@testing.com',
    recipientEmail: 'recipientEmail@testing.com',
    breachAlert: emailContent.breachAlert,
    emailSubject: emailContent.emailSubject,
    preFxaSubscriber: emailContent.preFxaSubscriber,
    email,
    preFxaEmail: emailContent.preFxaEmail,
    ctaHref: EmailUtils.getEmailCtaHref('breach-alert', 'go-to-dashboard')
  })
}

function notFound (req, res) {
  res.status(404)
  res.render('subpage', {
    analyticsID: 'error',
    headline: req.fluentFormat('error-headline'),
    subhead: req.fluentFormat('home-not-found')
  })
}

async function previewEmail2022 (req, res) {
  const breachStats = await DB.getBreachStats(req.user.id)

  res.render('layouts/email-2022-mockup', {
    layout: 'email-2022-mockup',
    whichPartial: 'email_partials/email-monthly-unresolved',
    csrfToken: req.csrfToken(),
    primaryEmail: req.user.primary_email,
    breachStats
  })
}

function sendTestEmail (data) {
  return async function (req, res) {
    const breachStats = await DB.getBreachStats(req.user.id)
    const subject = LocaleUtils.fluentFormat(req.supportedLocales, data.subjectId)
    const context = {
      whichPartial: data.whichPartial,
      supportedLocales: req.supportedLocales,
      primaryEmail: req.user.primary_email,
      breachStats
    }

    async function sendEmail () {
      await EmailUtils.sendEmail(req.body.recipientEmail, subject, data.layout, context)
    }

    if (req.body.delay === 'on') {
      initMinuteCron(sendEmail)

      return res.send(`
      <h2>Email scheduled to send 1 minute from now!</h2>
      <a href='/email-l10n/email-2022-mockup'>Go Back</a> | <a href='/user/logout'>Sign Out</a>
      `)
    }

    await sendEmail()

    res.send(`
    <h2>Email sent!</h2>
    <a href='/email-l10n/email-2022-mockup'>Go Back</a> | <a href='/user/logout'>Sign Out</a>
    `)
  }
}

module.exports = {
  getEmailMockUps,
  notFound,
  previewEmail2022,
  sendTestEmail
}
