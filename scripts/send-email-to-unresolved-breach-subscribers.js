const DB = require('../db/DB')
const EmailUtils = require('../email-utils')
const { LocaleUtils } = require('../locale-utils')
const AppConstants = require('../app-constants')

async function sendUnresolvedBreachEmails () {
  const subscribers = await DB.getSubscribersWithUnresolvedBreaches()

  subscribers.forEach(async subscriber => {
    const supportedLocales = [subscriber.signup_language, 'en'].filter(Boolean) // filter potential nullish signup_language, fallback to en
    const subject = LocaleUtils.fluentFormat(supportedLocales, 'email-unresolved-heading')
    const unsubscribeUrl = `${AppConstants.SERVER_URL}/user/unsubscribe-monthly?token=${subscriber.primary_verification_token}`

    await EmailUtils.sendEmail(subscriber.primary_email, subject, 'email-2022',
      {
        whichPartial: 'email_partials/email-monthly-unresolved',
        supportedLocales,
        primaryEmail: subscriber.primary_email,
        breachStats: subscriber.breach_stats,
        unsubscribeUrl
      }
    )

    DB.updateMonthlyEmailTimestamp(subscriber.primary_email)
  })
}

module.exports = { sendUnresolvedBreachEmails }
