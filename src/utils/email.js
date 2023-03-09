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

function appendUtmParams (url, utmParams) {
  const defaultUtmParams = {
    utm_source: 'fx-monitor',
    utm_medium: 'email'
  }

  const allUtmParams = { ...defaultUtmParams, utmParams }

  for (const param in allUtmParams) {
    const paramValue = allUtmParams[param]

    if (paramValue) {
      url.searchParams.set(param, paramValue)
    }
  }

  return url
}

function getEmailCtaHref (emailType, content, subscriberId = null) {
  const dashboardUrl = `${SERVER_URL}/user/breaches`
  const url = new URL(dashboardUrl)
  const utmParams = {
    campaign: emailType,
    content,
    subscriber_id: subscriberId
  }

  return appendUtmParams(url, utmParams)
}

function getVerificationUrl (subscriber) {
  if (!subscriber.verification_token) {
    throw new Error('subscriber has no verification_token')
  }

  const url = new URL(`${SERVER_URL}/api/v1/user/verify-email`)
  const verificationUtmParams = {
    campaign: 'account-verification-email',
    content: 'verified-subscribers',
    token: encodeURIComponent(subscriber.verification_token)
  }

  return appendUtmParams(url, verificationUtmParams)
}

// TODO: Unsubscribing from emails is only implemented for
// the monthly unresolved breach report
function getUnsubscribeCtaHref ({ subscriber, isMonthlyEmail }) {
  const path = isMonthlyEmail
    ? `${SERVER_URL}/user/unsubscribe-monthly`
    : `${SERVER_URL}/user/unsubscribe`

  if (!subscriber) {
    return path
  }

  const url = new URL(path)
  const token = Object.hasOwn(subscriber, 'verification_token')
    ? subscriber.verification_token
    : subscriber.primary_verification_token
  const hash = Object.hasOwn(subscriber, 'sha1')
    ? subscriber.sha1
    : subscriber.primary_sha1

  // Mandatory params for unsubscribing a user
  const unsubscribeUtmParams = {
    campaign: isMonthlyEmail
      ? 'monthly-unresolved'
      : 'unsubscribe',
    content: 'unsubscribe-cta',
    hash: encodeURIComponent(hash),
    token: encodeURIComponent(token)
  }

  return appendUtmParams(url, unsubscribeUtmParams)
}

function postUnsubscribe (req, res) {
  console.log('postUnsubscribe')

  return res.json({
    success: true,
    status: 200,
    message: 'Unsubscribed'
  })
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
  ctaHref: getEmailCtaHref('email-test-notification', 'dashboard-cta'),
  heading: getMessage('email-spotted-new-breach'),
  recipientEmail: recipient,
  subscriberId: 123,
  supportedLocales: ['en'],
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
  unsubscribeUrl: getUnsubscribeCtaHref({
    subscriber: null,
    isMonthlyEmail: true
  }),
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
    ctaHref: getEmailCtaHref('email-test-notification', 'dashboard-cta'),
    heading: unsafeBreachesForEmail.length
      ? getMessage('email-subject-found-breaches')
      : getMessage('email-subject-no-breaches'),
    emailBreachStats,
    recipientEmail: recipient,
    subscriberId: 123,
    unsafeBreachesForEmail,
    utmCampaign: ''
  }
}

export {
  EmailTemplateType,
  getEmailCtaHref,
  getMonthlyDummyData,
  getNotifictionDummyData,
  getSignupReportDummyData,
  getUnsubscribeCtaHref,
  getVerificationDummyData,
  getVerificationUrl,
  initEmail,
  postUnsubscribe,
  sendEmail
}
