'use strict'

const { LocaleUtils } = require('./../locale-utils')

const { makeBreachCards } = require('./breaches')
const { prettyDate } = require('./hbs-helpers')

function emailBreachStats (args) {
  const locales = args.data.root.supportedLocales
  const userBreaches = args.data.root.unsafeBreachesForEmail
  let numPasswordsExposed = 0

  userBreaches.forEach(breach => {
    if (breach.DataClasses.includes('passwords')) {
      numPasswordsExposed++
    }
  })

  const emailBreachStats = {
    numBreaches: {
      statNumber: userBreaches.length,
      statTitle: LocaleUtils.fluentFormat(locales, 'known-data-breaches-exposed', { breaches: userBreaches.length })
    },
    numPasswords: {
      statNumber: numPasswordsExposed,
      statTitle: LocaleUtils.fluentFormat(locales, 'passwords-exposed', { passwords: numPasswordsExposed })
    }
  }

  if (userBreaches.length === 0) delete emailBreachStats.numPasswords // if user has no breaches, do not show passwords exposed stat

  return emailBreachStats
}

function getUnsafeBreachesForEmailReport (args) {
  const locales = args.data.root.supportedLocales
  const foundBreaches = JSON.parse(JSON.stringify(args.data.root.unsafeBreachesForEmail))

  if (foundBreaches.length > 4) {
    foundBreaches.length = 4
  }
  return makeBreachCards(foundBreaches, locales)
}

function boldVioletText (breachedEmail, addBlockDisplayToEmail = false) {
  let optionalDisplayProperty = ''

  if (addBlockDisplayToEmail) {
    optionalDisplayProperty = 'display: block;'
  }

  // garble email address so that email clients won't turn it into a link
  breachedEmail = breachedEmail.replace(/([@.:])/g, '<span>$1</span>')
  return `<span class="rec-email text-bold" style=" ${optionalDisplayProperty} font-weight: 700; color: #9059ff; font-family: sans-serif; text-decoration: none;"> ${breachedEmail}</span>`
}

function getEmailHeader (args) {
  const locales = args.data.root.supportedLocales
  const emailType = args.data.root.whichPartial
  const breachedEmail = args.data.root.breachedEmail

  if (emailType === 'email_partials/email_verify') {
    return LocaleUtils.fluentFormat(locales, 'email-link-expires')
  }

  if (args.data.root.breachAlert) {
    return LocaleUtils.fluentFormat(locales, 'email-alert-hl', { userEmail: boldVioletText(breachedEmail, true) })
  }

  const userBreaches = args.data.root.unsafeBreachesForEmail

  if (userBreaches.length === 0) {
    return LocaleUtils.fluentFormat(locales, 'email-no-breaches-hl', { userEmail: boldVioletText(breachedEmail, true) })
  }

  return LocaleUtils.fluentFormat(locales, 'email-found-breaches-hl')
}

function getReportHeader (args) {
  const locales = args.data.root.supportedLocales
  const reportHeader = {
    date: prettyDate(new Date(), locales),
    strings: {
      email: 'email-address',
      reportDate: 'report-date',
      fxmReport: 'firefox-monitor-report'
    }
  }
  for (const stringId in reportHeader.strings) {
    const newString = LocaleUtils.fluentFormat(locales, reportHeader.strings[stringId])
    reportHeader.strings[stringId] = newString
  }
  return args.fn(reportHeader)
}

function getEmailFooterCopy (args) {
  const locales = args.data.root.supportedLocales

  let faqLink = LocaleUtils.fluentFormat(locales, 'frequently-asked-questions')
  faqLink = `<a href="https://support.mozilla.org/kb/firefox-monitor-faq">${faqLink}</a>`

  if (!(args.data.root.whichPartial === 'email_partials/email-monthly-unresolved')) {
    return LocaleUtils.fluentFormat(locales, 'email-verify-footer-copy', { faqLink })
  }

  const unsubUrl = args.data.root.unsubscribeUrl
  const unsubLinkText = LocaleUtils.fluentFormat(locales, 'email-unsub-link')
  const unsubLink = `<a href="${unsubUrl}">${unsubLinkText}</a>`

  const localizedFooterCopy = LocaleUtils.fluentFormat(locales, 'email-footer-blurb', {
    unsubLink,
    faqLink
  })

  return localizedFooterCopy
}

function getEmailCTA (args) {
  const locales = args.data.root.supportedLocales
  const emailType = args.data.root.whichPartial

  if (emailType === 'email_partials/email_verify') {
    return LocaleUtils.fluentFormat(locales, 'verify-email-cta')
  }
  return LocaleUtils.fluentFormat(locales, 'go-to-dashboard-link')
}

function getBreachSummaryHeadline (args) {
  const locales = args.data.root.supportedLocales
  const breachedEmail = args.data.root.breachedEmail
  return LocaleUtils.fluentFormat(locales, 'email-breach-summary-for-email', { userEmail: boldVioletText(breachedEmail) })
}

function getBreachAlert (args) {
  const locales = args.data.root.supportedLocales
  const breachAlert = [args.data.root.breachAlert]
  const breachAlertCard = makeBreachCards(breachAlert, locales)
  return args.fn(breachAlertCard[0])
}

function getServerUrlForNestedEmailPartial (args) {
  return args.data.root.SERVER_URL
}

module.exports = {
  emailBreachStats,
  getBreachAlert,
  getBreachSummaryHeadline,
  getEmailHeader,
  getEmailFooterCopy,
  getEmailCTA,
  getReportHeader,
  getServerUrlForNestedEmailPartial,
  getUnsafeBreachesForEmailReport
}
