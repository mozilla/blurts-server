'use strict'

const EmailUtils = require('../email-utils')
const AppConstants = require('../app-constants')
const path = require('path')
const { readFile } = require('fs/promises')

const partials = ['alert', 'report', 'email_verify', 'email-monthly-unresolved']
const mockBreaches = ['Dropbox', 'Apollo', 'Adobe']
const mockBreachStats = {
  passwords: {
    count: 1,
    numResolved: 0
  },
  numBreaches: {
    count: 2,
    numResolved: 0,
    numUnresolved: 2
  },
  monitoredEmails: {
    count: 2
  }
}

async function getEmailMockup (req, res) {
  if (!['dev', 'heroku', 'stage'].includes(AppConstants.NODE_ENV)) return res.sendStatus(404)

  if (!req.query.partial) {
    return res.redirect('/email-l10n/?partial=email_verify&type=email_verify') // default when no specific partial requested
  } else if (!partials.includes(req.query.partial)) {
    return res.sendStatus(404) // requested partial is not in partials list
  }

  const emailStr = await readFile(path.resolve('views/layouts/email-2022.hbs'), { encoding: 'utf-8' })
  const emailStyle = emailStr.substring(emailStr.indexOf('<style>'), emailStr.indexOf('</style>') + 8)
  const { unsafeBreachesForEmail, emailSubject, breachAlert, unsubscribeUrl, heading, subheading } = getPartialData(req.query.type, req.app.locals.breaches)
  const utmCampaign = req.query.type

  res.render('email_l10n', {
    layout: 'email_l10n_mockups.hbs',
    unsafeBreachesForEmail,
    supportedLocales: req.supportedLocales,
    whichPartial: `email_partials/${req.query.partial}`,
    partialType: req.query.type,
    breachedEmail: req.user?.primary_email || 'breachedEmail@testing.com',
    breachAlert,
    emailSubject: req.fluentFormat(emailSubject),
    heading: req.fluentFormat(heading),
    subheading: req.fluentFormat(subheading),
    ctaHref: EmailUtils.getEmailCtaHref(utmCampaign, 'dashboard-cta'),
    utmCampaign,
    emailStyle,
    unsubscribeUrl,
    csrfToken: req.csrfToken(),
    breachStats: mockBreachStats
  })
}

function getPartialData (partialType, breaches) {
  const unsafeBreachesForEmail = []
  let emailSubject, breachAlert, unsubscribeUrl, heading, subheading

  switch (partialType) {
    case 'email_verify':
      emailSubject = 'email-subject-verify'
      heading = 'email-verify-heading'
      subheading = 'email-verify-subhead'
      break
    case 'noBreaches':
      emailSubject = 'email-subject-no-breaches'
      heading = 'email-breach-summary'
      break
    case 'singleBreach':
      emailSubject = 'email-subject-found-breaches'
      heading = 'email-breach-summary'
      unsafeBreachesForEmail.push(breaches.find(breach => breach.Name === mockBreaches[0]))
      break
    case 'multipleBreaches':
      emailSubject = 'email-subject-found-breaches'
      heading = 'email-breach-summary'
      mockBreaches.forEach(name => {
        unsafeBreachesForEmail.push(breaches.find(breach => breach.Name === name))
      })
      break
    case 'alert':
      emailSubject = 'breach-alert-subject'
      heading = 'email-spotted-new-breach'
      breachAlert = breaches.find(breach => breach.Name === 'LinkedIn')
      break
    case 'email-monthly-unresolved':
      emailSubject = 'email-unresolved-heading'
      heading = 'email-unresolved-heading'
      subheading = 'email-unresolved-subhead'
      unsubscribeUrl = 'fakeunsubscribe.test.com'
      break
  }

  return { unsafeBreachesForEmail, emailSubject, breachAlert, unsubscribeUrl, heading, subheading }
}

async function sendTestEmail (req, res) {
  const { unsafeBreachesForEmail, emailSubject, breachAlert, heading, subheading } = getPartialData(req.body.partialType, req.app.locals.breaches)
  const supportedLocales = req.supportedLocales

  const unsubscribeUrl = EmailUtils.getMonthlyUnsubscribeUrl(req.user, 'monthly-unresolved', 'unsubscribe-cta')
  const utmCampaign = req.body.partialType
  const context = {
    whichPartial: req.body.whichPartial,
    supportedLocales,
    heading: req.fluentFormat(heading),
    subheading: req.fluentFormat(subheading),
    breachedEmail: req.user.primary_email,
    unsafeBreachesForEmail,
    breachAlert,
    breachStats: req.user.breach_stats,
    unsubscribeUrl,
    ctaHref: EmailUtils.getEmailCtaHref(utmCampaign, 'dashboard-cta'),
    utmCampaign
  }

  console.log(context)

  await EmailUtils.sendEmail(req.body.recipientEmail, req.fluentFormat(emailSubject), 'email-2022', context)

  res.send(`
    <h2>Email sent!</h2>
    <a href='/email-l10n/'>Go Back</a> | <a href='/user/logout'>Sign Out</a>
    `)
}

function notFound (req, res) {
  res.status(404)
  res.render('subpage', {
    analyticsID: 'error',
    headline: req.fluentFormat('error-headline'),
    subhead: req.fluentFormat('home-not-found')
  })
}

module.exports = {
  getEmailMockup,
  notFound,
  sendTestEmail
}
