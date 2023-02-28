/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createTransport } from 'nodemailer'
import { URL } from 'url'

import mozlog from './log.js'
import AppConstants from '../app-constants.js'
import { getMessage } from '../utils/fluent.js'

const log = mozlog('email-utils')

const { SERVER_URL } = AppConstants

// The SMTP transport object. This is initialized to a nodemailer transport
// object while reading SMTP credentials, or to a dummy function in debug mode.
let gTransporter

const EmailTemplateType = {
  Notification: 'notification',
  Verification: 'verification',
  Monthly: 'monthly',
  SignupReport: 'signup-report'
}

async function initEmail (smtpUrl = AppConstants.SMTP_URL) {
  // Allow a debug mode that will log JSON instead of sending emails.
  if (!smtpUrl) {
    log.info('smtpUrl-empty', { message: 'EmailUtils will log a JSON response instead of sending emails.' })
    gTransporter = createTransport({ jsonTransport: true })
    return true
  }

  gTransporter = createTransport(smtpUrl)
  const gTransporterVerification = await gTransporter.verify()
  return gTransporterVerification
}

/**
 * Send Email
 *
 * @param {string} recipient
 * @param {string} subject
 * @param {string} html
 * @returns {Promise} <Promise>
 */
function sendEmail (recipient, subject, html) {
  if (!gTransporter) {
    return Promise.reject(new Error('SMTP transport not initialized'))
  }

  return new Promise((resolve, reject) => {
    const emailFrom = AppConstants.EMAIL_FROM
    const mailOptions = {
      from: emailFrom,
      to: recipient,
      subject,
      html,
      headers: {
        'x-ses-configuration-set': AppConstants.SES_CONFIG_SET
      }
    }

    gTransporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(new Error(error))
        return
      }
      if (gTransporter.transporter.name === 'JSONTransport') {
        log.info('JSONTransport', { message: info.message.toString() })
      }
      resolve(info)
    })
  })
}

function appendUtmParams (url, campaign, content) {
  const utmParameters = {
    utm_source: 'fx-monitor',
    utm_medium: 'email',
    utm_campaign: campaign,
    utm_content: content
  }
  for (const param in utmParameters) {
    url.searchParams.append(param, utmParameters[param])
  }
  return url
}

function getEmailCtaHref (emailType, content, subscriberId = null) {
  const url = new URL(SERVER_URL)
  if (subscriberId) {
    url.searchParams.set('subscriber_id', subscriberId)
  }

  return appendUtmParams(url, emailType, content)
}

function getVerificationUrl (subscriber) {
  if (!subscriber.verification_token) {
    throw new Error('subscriber has no verification_token')
  }

  const url = new URL(`${SERVER_URL}/api/v1/user/verify-email`)
  url.searchParams.set(
    'token',
    encodeURIComponent(subscriber.verification_token)
  )

  return appendUtmParams(
    url,
    'verified-subscribers',
    'account-verification-email'
  )
}

function getUnsubscribeUrl (subscriber, emailType) {
  const path = `${SERVER_URL}/user/unsubscribe`
  if (!subscriber) {
    return path
  }

  // TODO: email unsubscribe is broken for most emails
  const token = Object.hasOwn(subscriber, 'verification_token')
    ? subscriber.verification_token
    : subscriber.primary_verification_token
  const hash = Object.hasOwn(subscriber, 'sha1')
    ? subscriber.sha1
    : subscriber.primary_sha1

  const url = new URL(path)
  url.searchParams.set('token', encodeURIComponent(token))
  url.searchParams.set('hash', encodeURIComponent(hash))

  return appendUtmParams(url, 'unsubscribe', emailType)
}

function getMonthlyUnsubscribeUrl (subscriber, campaign, content) {
  const path = `${SERVER_URL}/user/unsubscribe-monthly/`
  if (!subscriber) {
    return path
  }

  // TODO: create new subscriptions section in settings to manage
  // all emails and avoid one-off routes like this
  if (subscriber && !subscriber.primary_verification_token) {
    throw new Error('subscriber has no primary verification_token')
  }

  const url = new URL(path)
  url.searchParams.set(
    'token',
    encodeURIComponent(subscriber.primary_verification_token)
  )

  return appendUtmParams(url, campaign, content)
}

function postUnsubscribe () {
  console.log('postUnsubscribe')
}

/**
 * Dummy data for populating the breach notification email preview
 *
 * @param {string} recipient
 * @returns {object} Breach dummy data
 */
const getNotifictionDummyData = (recipient) => ({
  breachData: {
    Id: 1,
    Name: 'Adobe',
    Title: 'Adobe',
    Domain: 'adobe.com',
    BreachDate: '2013-01-01T22:00:00.000Z',
    AddedDate: '2013-01-02T00:00:00.000Z',
    ModifiedDate: '2023-01-01T00:00:00.000Z',
    PwnCount: 123,
    Description: 'Example description',
    LogoPath: '/images/favicon-144.webp',
    DataClasses: [
      'email-addresses',
      'password-hints',
      'passwords',
      'usernames'
    ],
    IsVerified: true,
    IsFabricated: false,
    IsSensitive: false,
    IsRetired: false,
    IsSpamList: false,
    IsMalware: false
  },
  breachedEmail: recipient,
  ctaHref: SERVER_URL,
  heading: getMessage('email-spotted-new-breach'),
  recipientEmail: recipient,
  subscriberId: 123,
  supportedLocales: ['en'],
  unsubscribeUrl: getUnsubscribeUrl(null, 'email-notification-test'),
  utmCampaign: ''
})

/**
 * Dummy data for populating the email verification preview
 *
 * @param {string} recipient
 * @returns {object} Email verification dummy data
 */
const getVerificationDummyData = (recipient) => ({
  ctaHref: SERVER_URL,
  heading: getMessage('email-verify-heading'),
  recipientEmail: recipient,
  subheading: getMessage('email-verify-subhead'),
  unsubscribeUrl: getUnsubscribeUrl(null, 'email-verification-test'),
  utmCampaign: 'email_verify'
})

/**
 * Dummy data for populating the monthly unresolved breaches email
 *
 * @param {string} recipient
 * @returns {object} Monthly unresolved breaches dummy data
 */
const getMonthlyDummyData = (recipient) => ({
  breachedEmail: 'breached@email.com',
  ctaHref: SERVER_URL,
  heading: getMessage('email-unresolved-heading'),
  monitoredEmails: {
    count: 2
  },
  numBreaches: {
    count: 3,
    numResolved: 2,
    numUnresolved: 1
  },
  recipientEmail: recipient,
  subheading: getMessage('email-unresolved-subhead'),
  unsubscribeUrl: getMonthlyUnsubscribeUrl(
    null,
    'email-monthly-test',
    ''
  ),
  utmCampaign: ''
})

/**
 * Dummy data for populating the signup report email
 *
 * @param {string} recipient
 * @returns {object} Signup report email dummy data
 */

const getSignupReportDummyData = (recipient) => {
  const unsafeBreachesForEmail = [
    getNotifictionDummyData(recipient).breachData
  ]
  const breachesCount = unsafeBreachesForEmail.length
  const numPasswordsExposed = 1

  const emailBreachStats = [
    {
      statNumber: breachesCount,
      statTitle: getMessage('known-data-breaches-exposed', {
        breaches: breachesCount
      })
    },
    {
      statNumber: numPasswordsExposed,
      statTitle: getMessage('passwords-exposed', {
        passwords: numPasswordsExposed
      })
    }
  ]

  return {
    breachedEmail: recipient,
    ctaHref: SERVER_URL,
    heading: unsafeBreachesForEmail.length
      ? getMessage('email-subject-found-breaches')
      : getMessage('email-subject-no-breaches'),
    emailBreachStats,
    recipientEmail: recipient,
    subscriberId: 123,
    unsafeBreachesForEmail,
    unsubscribeUrl: getUnsubscribeUrl(null, 'email-signup-test'),
    utmCampaign: ''
  }
}

export {
  EmailTemplateType,
  getEmailCtaHref,
  getMonthlyDummyData,
  getMonthlyUnsubscribeUrl,
  getNotifictionDummyData,
  getSignupReportDummyData,
  getUnsubscribeUrl,
  getVerificationDummyData,
  getVerificationUrl,
  initEmail,
  postUnsubscribe,
  sendEmail
}
