const DB = require('../db/DB')
const EmailUtils = require('../email-utils')
const { LocaleUtils } = require('../locale-utils')

async function sendUnresolvedBreachEmails () {
  const subscribers = await DB.getSubscribersWithUnresolvedBreaches()

  subscribers.forEach(async subscriber => {
    const supportedLocales = [subscriber.signup_language, 'en'].filter(Boolean) // filter potential nullish signup_language
    const subject = LocaleUtils.fluentFormat(supportedLocales, 'email-unresolved-heading')

    await EmailUtils.sendEmail(subscriber.primary_email, subject, 'email-2022',
      {
        whichPartial: 'email_partials/email-monthly-unresolved',
        supportedLocales,
        primaryEmail: subscriber.primary_email,
        breachStats: subscriber.breach_stats
      }
    )
  })
}

module.exports = { sendUnresolvedBreachEmails }
