/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
import EmailUtils from '../utils/email.js'
import { mainLayout } from '../views/main.js'
import { settings } from '../views/partials/settings.js'
import AppConstants from '../app-constants.js'
import { getBreachesForEmail } from '../utils/hibp.js'
// TODO when email verification template lands
// import { getTemplate } from '../views/email-2022.js'
import { generateToken } from '../utils/csrf.js'

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
  emails.forEach((email) => breachCounts.set(email.email, 0))

  const allBreaches = req.app.locals.breaches
  for (const email of emails) {
    const breaches = await getBreachesForEmail(
      email.sha1,
      allBreaches,
      true,
      false
    )
    breachCounts.set(email.email, breaches.length)
  }

  const data = {
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
  // FIXME what should we use in v2 for email address validation?
  if (!email) {
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

  // TODO: what should we return to the client?
  return res.json('Resent the email')
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

  // TODO: what should we return to the client?
  return res.json('Resent the email')
}

async function _sendVerificationEmail (emailId) {
  const unverifiedEmailAddressRecord = await resetUnverifiedEmailAddress(
    emailId
  )
  const recipientEmail = unverifiedEmailAddressRecord.email
  await EmailUtils.sendEmail(
    recipientEmail,
    getMessage('email-subject-verify'),
    // TODO when email verification template lands
    // getTemplate,
    '<html>placeholder</html>',
    {
      recipientEmail,
      ctaHref: EmailUtils.getVerificationUrl(unverifiedEmailAddressRecord),
      utmCampaign: 'email_verify',
      unsubscribeUrl: EmailUtils.getUnsubscribeUrl(
        unverifiedEmailAddressRecord,
        'account-verification-email'
      ),
      whichPartial: 'email_partials/email_verify',
      heading: getMessage('email-verify-heading'),
      subheading: getMessage('email-verify-subhead')
    }
  )
}

async function verifyEmail (req, res) {
  const token = req.query.token
  await verifyEmailHash(token)

  return res.redirect('/user/settings')
}

async function updateCommunicationOptions (req, res) {
  try {
    const sessionUser = req.user
    // 0 = Send breach alerts to the email address found in brew breach.
    // 1 = Send all breach alerts to user's primary email address.
    const allEmailsToPrimary = Number(req.body.communicationOption) === 1
    const updatedSubscriber = await setAllEmailsToPrimary(
      sessionUser,
      allEmailsToPrimary
    )
    req.session.user = updatedSubscriber

    return res.json('Comm options updated')
  } catch (ex) {
    return res.json('Error updating comm options')
  }
}

export {
  settingsPage,
  resendEmail,
  addEmail,
  removeEmail,
  verifyEmail,
  updateCommunicationOptions
}
