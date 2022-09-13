const DB = require('../db/DB')
const EmailUtils = require('../email-utils')
const { LocaleUtils } = require('../locale-utils')
const AppConstants = require('../app-constants')
const { argv } = require('node:process')

/* Send a monthly email to each subscriber with unresolved breaches
 *
 * Usage:
 * node scripts/send-email-to-unresolved-breach-subscribers.js
 *
 * For testing, pass a comma-separated arg with no spaces, for example:
 * node scripts/send-email-to-unresolved-breach-subscribers.js test1@test.com,test2@test.com,...
 */

async function sendUnresolvedBreachEmails (subscribers = null, limit = 0) {
  let count = 0
  let total = 0
  if (subscribers) {
    total = subscribers.length
  } else {
    // if test subscribers are not available, pull from db
    total = await DB.getSubscribersWithUnresolvedBreachesCount()
    subscribers = await DB.getSubscribersWithUnresolvedBreaches(limit)
  }
  console.log(`- Attempting to email ${subscribers.length} of ${total} subscribers...`)

  for (const subscriber of subscribers) {
    try {
      const supportedLocales = [subscriber.signup_language, 'en'].filter(Boolean) // filter potential nullish signup_language, fallback to en
      const subject = LocaleUtils.fluentFormat(supportedLocales, 'email-unresolved-heading')
      const unsubscribeUrl = EmailUtils.getMonthlyUnsubscribeUrl(subscriber, 'monthly-unresolved', 'unsubscribe-cta')

      await EmailUtils.sendEmail(subscriber.primary_email, subject, 'email-2022',
        {
          whichPartial: 'email_partials/email-monthly-unresolved',
          supportedLocales,
          primaryEmail: subscriber.primary_email,
          breachStats: subscriber.breach_stats,
          unsubscribeUrl
        }
      )
      count++
      await DB.updateMonthlyEmailTimestamp(subscriber.primary_email)
    } catch (e) {
      console.warn(e)
      continue
    }
  }

  console.log(`- Successfully emailed ${count} of ${subscribers.length} subscribers (${total} total)`)
  return {
    emailed: count,
    attempted: subscribers.length,
    total
  }
}

async function init () {
  LocaleUtils.init()
  await EmailUtils.init()
  await DB.createConnection()
}

async function runScript () {
  let subscribers = null
  const limit = parseInt(AppConstants.MONTHLY_CRON_LIMIT)
  if (argv[2]) {
    console.log('Testing job for monthly unresolved breach emails...')
    const res = await prepareTestSubscribers(argv[2])
    subscribers = res.subscribers
    console.log('- Sending test emails to', res.emails)
  } else if (AppConstants.MONTHLY_CRON_ENABLED === 'true') {
    console.log('Running job for monthly unresolved breach emails...')
  } else {
    console.log('Job for monthly unresolved breach emails was not run. MONTHLY_CRON_ENABLED expects the string "true".')
    return
  }
  return await sendUnresolvedBreachEmails(subscribers, limit)
}

async function prepareTestSubscribers (emailCsv = '') {
  // Create subscriber records from a comma-separated list of emails
  const subscribers = []
  const emails = emailCsv.split(',')

  emails.forEach(email => {
    subscribers.push({
      primary_email: email,
      signup_language: 'en',
      primary_verification_token: 'dev-token-for-testing',
      breach_stats: {
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
    })
  })
  return {
    subscribers,
    emails
  }
}

async function teardown () {
  await DB.destroyConnection()
}

async function main () {
  if (AppConstants.NODE_ENV !== 'tests') {
    await init()
    try {
      await runScript()
    } finally {
      await teardown()
    }
  }
}
main()

module.exports = {
  sendUnresolvedBreachEmails
}
