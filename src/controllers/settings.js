/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'

import {
  getUserEmails,
  resetUnverifiedEmailAddress,
  addSubscriberUnverifiedEmailHash,
  removeOneSecondaryEmail,
  getEmailById,
  verifyEmailHash
} from '../db/tables/email_addresses.js'

import { setAllEmailsToPrimary } from '../db/tables/subscribers.js'

import { fluentError, getMessage } from '../utils/fluent.js'
import { sendEmail, getVerificationUrl, getUnsubscribeUrl } from '../utils/email.js'

import { getBreachesForEmail } from '../utils/hibp.js'
import { generateToken } from '../utils/csrf.js'

import { mainLayout } from '../views/main.js'
import { settings } from '../views/partials/settings.js'
import { getTemplate } from '../emails/templates/email-2022.js'
import { verifyPartial } from '../emails/partials/email-verify.js'

async function settingsPage (req, res) {
  const emails = await getUserEmails(req.session.user.id)
  // Add primary subscriber email to the list
  emails.push({
    email: req.session.user.primary_email,
    sha1: req.session.user.primary_sha1,
    primary: true,
    verified: true
  })

  const breachCounts = new Map()

  const allBreaches = req.app.locals.breaches
  for (const email of emails) {
    const breaches = await getBreachesForEmail(
      email.sha1,
      allBreaches,
      true,
      false
    )
    breachCounts.set(email.email, breaches?.length || 0)
  }

  const data = {
    fxaProfile: req.user.fxa_profile_json,
    partial: settings,
    emails,
    breachCounts,
    limit: AppConstants.MAX_NUM_ADDRESSES,
    csrfToken: generateToken(res)
  }

  res.send(mainLayout(data))
}

async function addEmail (req, res) {
  const sessionUser = await req.user
  const email = req.body.email
  // Use the same regex as HTML5 email input type
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!email || !email.match(emailRegex)) {
    throw fluentError('user-add-invalid-email')
  }

  if (sessionUser.email_addresses.length >= AppConstants.MAX_NUM_ADDRESSES) {
    throw fluentError('user-add-too-many-emails')
  }

  _checkForDuplicateEmail(sessionUser, email)

  const unverifiedSubscriber = await addSubscriberUnverifiedEmailHash(
    req.session.user,
    email
  )

  await _sendVerificationEmail(unverifiedSubscriber.id)

  return res.json({
    success: true,
    status: 200,
    message: 'Sent the verification email'
  })
}

function _checkForDuplicateEmail (sessionUser, email) {
  email = email.toLowerCase()
  if (email === sessionUser.primary_email.toLowerCase()) {
    throw fluentError('user-add-duplicate-email')
  }

  for (const secondaryEmail of sessionUser.email_addresses) {
    if (email === secondaryEmail.email.toLowerCase()) {
      throw fluentError('user-add-duplicate-email')
    }
  }
}

async function removeEmail (req, res) {
  const emailId = req.body.emailId
  const sessionUser = req.user
  const existingEmail = await getEmailById(emailId)

  if (existingEmail.subscriber_id !== sessionUser.id) {
    throw fluentError('error-not-subscribed')
  }

  removeOneSecondaryEmail(emailId)
  res.redirect('/user/settings')
}

async function resendEmail (req, res) {
  const emailId = req.body.emailId
  const sessionUser = req.user
  const existingEmail = await getUserEmails(sessionUser.id)

  const filteredEmail = existingEmail.filter(
    (a) => a.email === emailId && a.subscriber_id === sessionUser.id
  )

  if (!filteredEmail) {
    throw fluentError('user-verify-token-error')
  }

  await _sendVerificationEmail(emailId)

  return res.json({
    success: true,
    status: 200,
    message: 'Sent the verification email'
  })
}

async function _sendVerificationEmail (emailId) {
  const unverifiedEmailAddressRecord = await resetUnverifiedEmailAddress(
    emailId
  )
  const recipientEmail = unverifiedEmailAddressRecord.email
  const data = {
    recipientEmail,
    ctaHref: getVerificationUrl(unverifiedEmailAddressRecord),
    utmCampaign: 'email_verify',
    unsubscribeUrl: getUnsubscribeUrl(
      unverifiedEmailAddressRecord,
      'account-verification-email'
    ),
    whichPartial: 'email_partials/email_verify',
    heading: getMessage('email-verify-heading'),
    subheading: getMessage('email-verify-subhead'),
    partial: { name: 'verify' }
  }
  await sendEmail(
    recipientEmail,
    getMessage('email-subject-verify'),
    getTemplate(data, verifyPartial(data))
  )
}

async function verifyEmail (req, res) {
  const token = req.query.token
  await verifyEmailHash(token)

  return res.redirect('/user/settings')
}

async function updateCommunicationOptions (req, res) {
  const sessionUser = req.user
  // 0 = Send breach alerts to the email address found in brew breach.
  // 1 = Send all breach alerts to user's primary email address.
  const allEmailsToPrimary = Number(req.body.communicationOption) === 1
  const updatedSubscriber = await setAllEmailsToPrimary(
    sessionUser,
    allEmailsToPrimary
  )
  req.session.user = updatedSubscriber

  return res.json({
    success: true,
    status: 200,
    message: 'Communications options updated'
  })
}

export {
  settingsPage,
  resendEmail,
  addEmail,
  removeEmail,
  verifyEmail,
  updateCommunicationOptions
}
