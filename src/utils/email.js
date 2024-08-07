/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createTransport } from 'nodemailer'
import { URL } from 'url'

import AppConstants from '../appConstants.js'
import {
  BadRequestError,
  MethodNotAllowedError,
  UnauthorizedError
} from '../utils/error'
import { getMessage, getStringLookup } from '../utils/fluent.js'
import { updateMonthlyEmailOptout } from '../db/tables/subscribers.js'
import SMTPTransport from 'nodemailer/lib/smtp-transport/index.js'


const { SERVER_URL } = AppConstants

// The SMTP transport object. This is initialized to a nodemailer transport
// object while reading SMTP credentials, or to a dummy function in debug mode.
/**
 * @type {import("nodemailer").Transporter<import("nodemailer/lib/smtp-transport/index.js").SentMessageInfo>}
 */
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
    console.info('smtpUrl-empty', { message: 'EmailUtils will log a JSON response instead of sending emails.' })
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
 *
 * @returns {Promise<SMTPTransport.SentMessageInfo>}
 */
async function sendEmail (recipient, subject, html) {
  if (!gTransporter) {
    throw new Error('SMTP transport not initialized');
  }

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

  try {
    const info = await gTransporter.sendMail(mailOptions);

    /* c8 ignore next 5 */
    if (gTransporter.transporter.name === 'JSONTransport') {
      // @ts-ignore Added typing later, but it disagrees with actual use:
      console.info('JSONTransport', { message: info.message.toString() })
      return info;
    }

    console.info("sent_email", { messageId: info.messageId, response: info.response });
    return info;
  } catch (e) {
    if (e instanceof Error) {
      console.error("error_sending_email", { message: e.message, stack: e.stack });
    /* c8 ignore next 3 */
    } else {
      console.error("error_sending_email", { message: JSON.stringify(e) })
    }
    throw e;
  }
}

/**
 * @param {URL} url
 * @param {Record<string, any>} urlParams
 */
function appendUrlParams (url, urlParams) {
  const defaultUtmParams = {
    utm_source: 'fx-monitor',
    utm_medium: 'email'
  }

  /** @type {Record<string, any>} */
  const allUtmParams = { ...defaultUtmParams, ...urlParams }

  for (const param in allUtmParams) {
    const paramValue = allUtmParams[param]

    if (typeof paramValue !== 'undefined' && paramValue) {
      url.searchParams.set(param, encodeURIComponent(paramValue))
    }
  }

  return url
}

/**
 * @param {{
 *  emailType: string,
 *  content: string,
 *  subscriberId?: string,
 *  dashboardTabType?: import('../app/(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View.jsx').TabType
 * }} email CTA options
 */
function getEmailCtaDashboardHref ({
  emailType,
  content,
  subscriberId,
  dashboardTabType,
}) {
  const dashboardTabSlug = dashboardTabType ? `/${dashboardTabType}` : ""
  const dashboardUrl = `${SERVER_URL}/user/dashboard${dashboardTabSlug}`
  const url = new URL(dashboardUrl)
  const utmParams = {
    subscriber_id: subscriberId,
    utm_campaign: emailType,
    utm_content: content
  }

  return appendUrlParams(url, utmParams)
}

/**
 * @param {{ verification_token: any; }} subscriber
 */
function getVerificationUrl (subscriber) {
  if (!subscriber.verification_token) {
    throw new BadRequestError('subscriber has no verification_token')
  }

  const url = new URL(`${SERVER_URL}/api/v1/user/verify-email`)
  const verificationUtmParams = {
    token: subscriber.verification_token,
    utm_campaign: 'verified-subscribers',
    utm_content: 'account-verification-email'
  }

  return appendUrlParams(url, verificationUtmParams)
}

/**
 * @param {{ isMonthlyEmail: any; subscriber: any; }} args
 */
function getUnsubscribeCtaHref (args) {
  const path = args.isMonthlyEmail
    ? `${SERVER_URL}/user/unsubscribe-monthly`
    : `${SERVER_URL}/user/unsubscribe`

  // TODO: Add unit test when changing this code:
  /* c8 ignore next 3 */
  if (!args.subscriber) {
    return path
  }

  if (args.isMonthlyEmail && !args.subscriber.primary_verification_token) {
    throw new BadRequestError('subscriber has no primary verification_token')
  }

  const url = new URL(path)
  const token = Object.hasOwn(args.subscriber, 'verification_token')
    ? args.subscriber.verification_token
    : args.subscriber.primary_verification_token
  const hash = Object.hasOwn(args.subscriber, 'sha1')
    ? args.subscriber.sha1
    : args.subscriber.primary_sha1

  // Mandatory params for unsubscribing a user
  const unsubscribeUtmParams = {
    hash,
    token,
    utm_campaign: args.isMonthlyEmail
      ? 'monthly-unresolved'
      : 'unsubscribe',
    utm_content: 'unsubscribe-cta'
  }

  return appendUrlParams(url, unsubscribeUtmParams)
}

/**
 * Check if params contain all mandatory params.
 *
 * @param {Record<string, string>} params Params that we like to have checked
 * @param {string} mandatoryParams A comma separated list of mandatory params
 * @returns {boolean} True if all mandatory params are present in params
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
function hasMandatoryParams (params, mandatoryParams) {
  return mandatoryParams.split(',').every(paramKey => {
    const paramKeyParsed = paramKey.trim()
    return (
      Object.hasOwn(params, paramKeyParsed) &&
      params[paramKeyParsed] !== ''
    )
  })
}
/* c8 ignore stop */

/**
 * TODO: Unsubscribing from emails is currently only implemented for the
 * monthly unresolved breach report.
 *
 * Unsubscribes a user from receiving emails other than the monthly reports.
 *
 * @param {any} req Request should contain a `token` and `hash` query param.
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function unsubscribeFromEmails (req) {
  const urlQuery = req.query

  // For unsubscribing from emails we need a hash and token
  if (!hasMandatoryParams(urlQuery, 'hash,token')) {
    throw new UnauthorizedError(getMessage('user-unsubscribe-token-email-error'))
  }

  throw new MethodNotAllowedError()
}
/* c8 ignore stop */

/**
 * Unsubscribe the user from receiving the monthly unresolved breach reports.
 *
 * @param {any} req Request that should contain a `token` query param
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function unsubscribeFromMonthlyReport (req) {
  const urlQuery = req.query

  // For unsubscribing from the monthly emails we need a token
  if (!hasMandatoryParams(urlQuery, 'token')) {
    throw new UnauthorizedError(getMessage('user-unsubscribe-token-error'))
  }

  // Unsubscribe user from the monthly unresolved breach emails
  await updateMonthlyEmailOptout(urlQuery.token)
}
/* c8 ignore stop */

/**
 * Dummy data for populating the breach notification email preview.
 *
 * @param {string} recipient
 * @param {import("@fluent/react").ReactLocalization} [l10n]
 * @returns Breach dummy data
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
const getNotificationDummyData = (recipient, l10n) => {
  const getMessage = getStringLookup(l10n);

  return ({
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
    ctaHref: getEmailCtaDashboardHref({
      emailType: 'email-test-notification',
      content: 'dashboard-cta',
    }),
    heading: getMessage('email-spotted-new-breach'),
    recipientEmail: recipient,
    subscriberId: 123,
    supportedLocales: ['en']
  })
}
/* c8 ignore stop */

/**
 * Dummy data for populating the email verification preview
 *
 * @param {string} recipient
 * @param {import("@fluent/react").ReactLocalization} [l10n]
 * @returns {object} Email verification dummy data
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
const getVerificationDummyData = (recipient, l10n) => {
  const getMessage = getStringLookup(l10n);

  return ({
    ctaHref: SERVER_URL,
    heading: getMessage('email-verify-heading'),
    recipientEmail: recipient,
    subheading: getMessage('email-verify-subhead')
  })
}
/* c8 ignore stop */

/**
 * Dummy data for populating the signup report email
 *
 * @param {string} recipient
 * @param {import("@fluent/react").ReactLocalization} [l10n]
 * @returns {object} Signup report email dummy data
 */

// TODO: Add unit test when changing this code:
/* c8 ignore start */
const getSignupReportDummyData = (recipient, l10n) => {
  const getMessage = getStringLookup(l10n);
  const unsafeBreachesForEmail = [
    getNotificationDummyData(recipient, l10n).breachData
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
    ctaHref: getEmailCtaDashboardHref({
      emailType: 'email-test-notification',
      content: 'dashboard-cta',
    }),
    heading: unsafeBreachesForEmail.length
      ? getMessage('email-subject-found-breaches')
      : getMessage('email-subject-no-breaches'),
    emailBreachStats,
    recipientEmail: recipient,
    subscriberId: 123,
    unsafeBreachesForEmail
  }
}
/* c8 ignore stop */

export {
  EmailTemplateType,
  getEmailCtaDashboardHref,
  getNotificationDummyData,
  getSignupReportDummyData,
  getUnsubscribeCtaHref,
  getVerificationDummyData,
  getVerificationUrl,
  initEmail,
  unsubscribeFromEmails,
  unsubscribeFromMonthlyReport,
  sendEmail
}
