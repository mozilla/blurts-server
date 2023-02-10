/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'
import { getBreachByName, loadBreachesIntoApp } from '../utils/hibp.js'
import { UnauthorizedError, UserInputError } from '../utils/error.js'
import mozlog from '../utils/log.js'
const log = mozlog('controllers.hibp')

/**
 * Whenever a breach is detected on the HIBP side, HIBP sends a request to this endpoint.
 * This function attempts to retrieve the breach info from the local cache, if not found
 * it retrieves it from the database
 * A breach notification contains the following parameters:
 * - breachName
 * - hashPrefix
 * - hashSuffixes
 * More about how account identities are anonymized: https://blog.mozilla.org/security/2018/06/25/scanning-breached-accounts-k-anonymity/
 */
async function notify (req, res) {
  if (!req.token || req.token !== AppConstants.HIBP_NOTIFY_TOKEN) {
    const errorMessage = 'HIBP notify endpoint requires valid authorization token.'
    throw new UnauthorizedError(errorMessage)
  }
  if (!['breachName', 'hashPrefix', 'hashSuffixes'].every(req.body?.hasOwnProperty, req.body)) {
    throw new UserInputError('HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.')
  }

  const { breachName } = req.body

  //   const reqHashPrefix = req.body.hashPrefix.toLowerCase()
  let breachAlert = getBreachByName(req.app.locals.breaches, breachName)

  if (!breachAlert) {
    // If breach isn't found, try to reload breaches from HIBP
    log.debug('notify', 'Breach is not found, reloading breaches...')
    await loadBreachesIntoApp(req.app)
    breachAlert = getBreachByName(req.app.locals.breaches, breachName)
    if (!breachAlert) {
      // If breach *still* isn't found, we have a real error
      throw new Error('Unrecognized breach: ' + breachName)
    }
  }

  if (breachAlert.IsSpamList || breachAlert.IsFabricated || !breachAlert.IsVerified || breachAlert.Domain === '') {
    log.info(`${breachAlert.Name} is fabricated, a spam list, not associated with a website, or unverified. \n Breach Alert not sent.`)
    return res.status(200).json(
      { info: 'Breach loaded into database. Subscribers not notified.' }
    )
  }
  // TODO: send email notification to affected subscribers after loading new breaches
  // This part will be completed as a part of the email epic

  //   const hashes = req.body.hashSuffixes.map(suffix => reqHashPrefix + suffix.toLowerCase())
  //   const subscribers = await getSubscribersByHashes(hashes)
  //   const emailAddresses = await getEmailAddressesByHashes(hashes)
  //   const recipients = subscribers.concat(emailAddresses)
  //   log.info('notification', { length: recipients.length, breachAlertName: breachAlert.Name })

  //   const utmID = 'breach-alert'
  //   const notifiedRecipients = []

  //   for (const recipient of recipients) {
  //     log.info('notify', { recipient })
  //     // Get subscriber ID from "subscriber_id" property (if email_addresses record)
  //     // or from "id" property (if subscribers record)
  //     const subscriberId = recipient.subscriber_id || recipient.id
  //     const { recipientEmail, breachedEmail, signupLanguage } = getAddressesAndLanguageForEmail(recipient)
  //     const ctaHref = EmailUtils.getEmailCtaHref(utmID, 'dashboard-cta', subscriberId)

  //     const requestedLanguage = signupLanguage ? acceptedLanguages(signupLanguage) : ''
  //     const supportedLocales = negotiateLanguages(
  //       requestedLanguage,
  //       req.app.locals.AVAILABLE_LANGUAGES,
  //       { defaultLocale: 'en' }
  //     )

  //     const subject = LocaleUtils.fluentFormat(supportedLocales, 'breach-alert-subject')
  //     const heading = LocaleUtils.fluentFormat(supportedLocales, 'email-spotted-new-breach')
  //     const template = 'email-2022'
  //     if (!notifiedRecipients.includes(breachedEmail)) {
  //       await EmailUtils.sendEmail(
  //         recipientEmail, subject, template,
  //         {
  //           breachedEmail,
  //           recipientEmail,
  //           subscriberId,
  //           supportedLocales,
  //           breachAlert,
  //           SERVER_URL: AppConstants.SERVER_URL,
  //           unsubscribeUrl: EmailUtils.getUnsubscribeUrl(recipient, utmID),
  //           ctaHref,
  //           utmCampaign: utmID,
  //           whichPartial: 'email_partials/alert',
  //           heading
  //         }
  //       )
  //       notifiedRecipients.push(breachedEmail)
  //     }
  //   }
  //   log.info('notified', { length: notifiedRecipients.length })
  //   res.status(200)
  //   res.json(
  //     { info: 'Notified subscribers of breach.' }
  //   )

  // TODO: remove after email
  res.status(200).json({
    info: 'Not yet... but will notify subscribers of breach when email is fixed'
  })
}

export {
  notify
}
