const DB = require('../db/DB')
const EmailUtils = require('../email-utils')
const { LocaleUtils } = require('../locale-utils')
const { argv } = require('node:process')

const testEmails = argv[2] // expects a comma-separated string with no spaces e.g. test1@test.com,test2@test.com,...

let subscribers

if (testEmails) {
  subscribers = []

  testEmails.split(',').forEach(email => {
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
}

sendUnresolvedBreachEmails()

async function sendUnresolvedBreachEmails () {
  let count = 0

  LocaleUtils.init()
  await EmailUtils.init()
  await DB.createConnection()

  console.log('Starting cron job for monthly unresolved breach emails')

  if (subscribers) {
    console.log('- Test email list detected')
  } else {
    subscribers = await DB.getSubscribersWithUnresolvedBreaches()
  }
  console.log('- Recipient total:', subscribers.length)

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

  await DB.destroyConnection()
  console.log(`- Successfully emailed ${count} of ${subscribers.length} subscribers`)
}
