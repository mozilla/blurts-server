/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'

import {
  getUserEmails,
  resetUnverifiedEmailAddress,
  addSubscriberUnverifiedEmailHash,
  removeOneSecondaryEmail,
  getEmailById,
  verifyEmailHash
} from '../db/tables/emailAddresses.js'

import { setAllEmailsToPrimary, deleteResolutionsWithEmail } from '../db/tables/subscribers.js'

import { getMessage } from '../utils/fluent.js'
import { sendEmail, getVerificationUrl } from '../utils/email.js'

import { getBreachesForEmail } from '../utils/hibp.js'
import { getSha1 } from '../utils/fxa.js'
import { validateEmailAddress } from '../utils/emailAddress.js'
import { generateToken } from '../utils/csrf.js'
import { TooManyRequestsError, UnauthorizedError, BadRequestError } from '../utils/error.js'

import { mainLayout } from '../views/mainLayout.js'
import { settings } from '../views/partials/settings.js'
import { getTemplate } from '../views/emails/email2022.js'
import { verifyPartial } from '../views/emails/emailVerify.js'

async function settingsPage (req, res) {
  /** @type {Array<import('../db/tables/emailAddresses.js').EmailRow>} */
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
    const breaches = await getBreachesForEmail(getSha1(email.email), allBreaches, true)
    breachCounts.set(email.email, breaches?.length || 0)
  }

  const {
    all_emails_to_primary: allEmailsToPrimary,
    fxa_profile_json: fxaProfile
  } = req.user

  const data = {
    allEmailsToPrimary,
    fxaProfile,
    partial: settings,
    emails,
    breachCounts,
    limit: AppConstants.MAX_NUM_ADDRESSES,
    csrfToken: generateToken(res),
    meta: {
      title: getMessage('settings-meta-title')
    },
    pathname: req._parsedOriginalUrl?.pathname
  }

  res.send(mainLayout(data))
}

async function addEmail (req, res) {
  const sessionUser = req.user
  const emailCount = 1 + (req.user.email_addresses?.length ?? 0) // primary + verified + unverified emails
  const validatedEmail = validateEmailAddress(req.body.email)

  if (validatedEmail === null) {
    throw new BadRequestError(getMessage('user-add-invalid-email'))
  }

  if (emailCount >= AppConstants.MAX_NUM_ADDRESSES) {
    throw new BadRequestError(getMessage('user-add-too-many-emails'))
  }

  checkForDuplicateEmail(sessionUser, validatedEmail.email)

  const unverifiedSubscriber = await addSubscriberUnverifiedEmailHash(
    req.session.user,
    validatedEmail.email
  )

  await sendVerificationEmail(sessionUser, unverifiedSubscriber.id)

  return res.json({
    success: true,
    status: 200,
    newEmailCount: emailCount + 1,
    message: 'Sent the verification email'
  })
}

function checkForDuplicateEmail (sessionUser, email) {
  const emailLowerCase = email.toLowerCase()
  if (emailLowerCase === sessionUser.primary_email.toLowerCase()) {
    throw new BadRequestError(getMessage('user-add-duplicate-email'))
  }

  for (const secondaryEmail of sessionUser.email_addresses) {
    if (emailLowerCase === secondaryEmail.email.toLowerCase()) {
      throw new BadRequestError(getMessage('user-add-duplicate-email'))
    }
  }
}

async function removeEmail (req, res) {
  const emailId = req.body.emailId
  const sessionUser = req.user
  const existingEmail = await getEmailById(emailId)

  if (existingEmail?.subscriber_id !== sessionUser.id) {
    throw new BadRequestError(getMessage('error-not-subscribed'))
  }

  removeOneSecondaryEmail(emailId)
  deleteResolutionsWithEmail(existingEmail.subscriber_id, existingEmail.email)
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
    throw new UnauthorizedError(getMessage('user-verify-token-error'))
  }

  await sendVerificationEmail(sessionUser, emailId)

  return res.json({
    success: true,
    status: 200,
    message: 'Sent the verification email'
  })
}

async function sendVerificationEmail (user, emailId) {
  try {
    const unverifiedEmailAddressRecord = await resetUnverifiedEmailAddress(
      emailId
    )
    const recipientEmail = unverifiedEmailAddressRecord.email
    const data = {
      recipientEmail,
      ctaHref: getVerificationUrl(unverifiedEmailAddressRecord),
      utmCampaign: 'email_verify',
      heading: getMessage('email-verify-heading'),
      subheading: getMessage('email-verify-subhead'),
      partial: { name: 'verify' }
    }
    await sendEmail(
      recipientEmail,
      getMessage('email-subject-verify'),
      getTemplate(data, verifyPartial)
    )
  } catch (err) {
    if (err.message === 'error-email-validation-pending') {
      throw new TooManyRequestsError('Verification email recently sent, try again later')
    } else {
      throw err
    }
  }
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
