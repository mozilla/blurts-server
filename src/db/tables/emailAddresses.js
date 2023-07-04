/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { v4 as uuidv4 } from 'uuid'
import initKnex from 'knex'
import knexConfig from '../knexfile.js'
import mozlog from '../../utils/log.js'
import { subscribeHash } from '../../utils/hibp.js'
import { getSha1 } from '../../utils/fxa.js'
import { getSubscriberByEmail, updateFxAData } from './subscribers.js'
import {
  ForbiddenError,
  InternalServerError,
  UnauthorizedError
} from '../../utils/error.js'
import { getMessage } from '../../utils/fluent.js'
const knex = initKnex(knexConfig)
const log = mozlog('DB.email_addresses')

/**
 * @param {string} token
 */
async function getEmailByToken (token) {
  const res = await knex('email_addresses')
    .where('verification_token', '=', token)

  return res[0]
}

/**
 * @param {string} emailAddressId
 */
async function getEmailById (emailAddressId) {
  const res = await knex('email_addresses')
    .where('id', '=', emailAddressId)

  return res[0]
}

/**
 * @param {string} email
 */
async function getEmailAddressRecordByEmail (email) {
  const emailAddresses = await knex('email_addresses').where({
    email, verified: true
  })
  if (!emailAddresses) {
    return null
  }
  if (emailAddresses.length > 1) {
    // TODO: handle multiple emails in separate(?) subscriber accounts?
    log.warn('getEmailAddressRecordByEmail', { msg: 'found the same email multiple times' })
  }
  return emailAddresses[0]
}

/**
 * @param {{ id: number; }} user
 * @param {string} email
 */
async function addSubscriberUnverifiedEmailHash (user, email) {
  const res = await knex.transaction(trx => {
    return trx('email_addresses')
      .forUpdate()
      .select({
        subscriber_id: user.id
      })
      .insert({
        subscriber_id: user.id,
        email,
        sha1: getSha1(email),
        verification_token: uuidv4(),
        verified: false
      }).returning('*')
  })
  return await res[0]
}

/**
 * @param {number | string} emailAddressId
 * @param {import("@fluent/react").ReactLocalization} l10n
 */
async function resetUnverifiedEmailAddress (emailAddressId, l10n) {
  const newVerificationToken = uuidv4()

  // Time in ms to require between verification reset.
  const verificationWait = 5 * 60 * 1000 // 5 minutes

  const verificationRecentlyUpdated = await knex('email_addresses')
    .select('id')
    .whereRaw('"updated_at" > NOW() - INTERVAL \'1 MILLISECOND\' * ?', verificationWait)
    .andWhere('id', emailAddressId)
    .first()

  if (verificationRecentlyUpdated?.id === (typeof emailAddressId === "number" ? emailAddressId : parseInt(emailAddressId, 10))) {
    throw new ForbiddenError(l10n.getString('error-email-validation-pending'))
  }

  const res = await knex('email_addresses')
    .update({
      verification_token: newVerificationToken,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now()
    })
    .where('id', emailAddressId)
    .returning('*')
  return res[0]
}

/**
 * @param {string} token
 */
async function verifyEmailHash (token) {
  const unverifiedEmail = await getEmailByToken(token)
  if (!unverifiedEmail) {
    throw new UnauthorizedError('Error message for this verification email timed out or something went wrong.')
  }
  const verifiedEmail = await _verifyNewEmail(unverifiedEmail)
  return verifiedEmail[0]
}

// TODO: refactor into an upsert? https://jaketrent.com/post/upsert-knexjs/
// Used internally, ideally should not be called by consumers.
/**
 * @param {string} sha1
 * @param {any} aFoundCallback
 * @param {any} aNotFoundCallback
 */
async function _getSha1EntryAndDo (sha1, aFoundCallback, aNotFoundCallback) {
  const existingEntries = await knex('subscribers')
    .where('primary_sha1', sha1)

  if (existingEntries.length && aFoundCallback) {
    return await aFoundCallback(existingEntries[0])
  }

  if (!existingEntries.length && aNotFoundCallback) {
    return await aNotFoundCallback()
  }
}

// Used internally.
/**
 * @param {string} sha1
 * @param {string} email
 * @param {string} signupLanguage
 * @param verified
 */
async function _addEmailHash (sha1, email, signupLanguage, verified = false) {
  log.debug('_addEmailHash', { sha1, email, signupLanguage, verified })
  try {
    return await _getSha1EntryAndDo(sha1, async (/** @type {any} */ aEntry) => {
      // Entry existed, patch the email value if supplied.
      if (email) {
        const res = await knex('subscribers')
          .update({
            primary_email: email,
            primary_sha1: getSha1(email.toLowerCase()),
            primary_verified: verified,
            // @ts-ignore knex.fn.now() results in it being set to a date,
            // even if it's not typed as a JS date object:
            updated_at: knex.fn.now()
          })
          .where('id', '=', aEntry.id)
          .returning('*')
        return res[0]
      }

      return aEntry
    }, async () => {
      // Always add a verification_token value
      const verificationToken = uuidv4()
      const res = await knex('subscribers')
        .insert({ primary_sha1: getSha1(email.toLowerCase()), primary_email: email, signup_language: signupLanguage, primary_verification_token: verificationToken, primary_verified: verified })
        .returning('*')
      return res[0]
    })
  } catch (e) {
    // @ts-ignore Log whatever, we don't care
    log.error(e)
    throw new InternalServerError(getMessage('error-could-not-add-email'))
  }
}

/**
 * Add a subscriber:
 * 1. Add a record to subscribers
 * 2. Immediately call _verifySubscriber
 * 3. For FxA subscriber, add refresh token and profile data
 *
 * @param {string} email to add
 * @param {string} signupLanguage from Accept-Language
 * @param {string | null} fxaAccessToken from Firefox Account Oauth
 * @param {string | null} fxaRefreshToken from Firefox Account Oauth
 * @param {string | null} fxaProfileData from Firefox Account
 * @returns {Promise<import('knex/types/tables').SubscriberRow>} subscriber knex object added to DB
 */
async function addSubscriber (email, signupLanguage, fxaAccessToken = null, fxaRefreshToken = null, fxaProfileData = null) {
  console.log({ email })
  console.log({ signupLanguage })
  const emailHash = await _addEmailHash(getSha1(email), email, signupLanguage, true)
  const verified = await _verifySubscriber(emailHash)
  const verifiedSubscriber = Array.isArray(verified) ? verified[0] : null
  if (fxaRefreshToken || fxaProfileData) {
    return updateFxAData(verifiedSubscriber, fxaAccessToken, fxaRefreshToken, fxaProfileData)
  }
  return verifiedSubscriber
}

/**
 * When an email is verified, convert it into a subscriber:
 * 1. Subscribe the hash to HIBP
 * 2. Update our subscribers record to verified
 * 3. (if opted in) Subscribe the email to Fx newsletter
 *
 * @param {any} emailHash knex object in DB
 * @returns {Promise<any>} verified subscriber knex object in DB
 */
async function _verifySubscriber (emailHash) {
  await subscribeHash(emailHash.primary_sha1)

  const verifiedSubscriber = await knex('subscribers')
    .where('primary_email', '=', emailHash.primary_email)
    .update({
      primary_verified: true,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now()
    })
    .returning('*')

  return verifiedSubscriber
}

// Verifies new emails added by existing users
/**
 * @param {{ sha1: string; id: number; }} emailHash
 */
async function _verifyNewEmail (emailHash) {
  await subscribeHash(emailHash.sha1)

  const verifiedEmail = await knex('email_addresses')
    .where('id', '=', emailHash.id)
    .update({
      verified: true,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .returning('*')

  return verifiedEmail
}

/**
 * @typedef {object} EmailRow Email data, as returned from the database table `email_addresses`
 * @property {number} id
 * @property {string} email
 * @property {string} sha1
 * @property {boolean} verified
 * @property {number} subscriber_id
 */

/**
 * @param {number} userId
 * @returns {Promise<EmailRow[]>}
 */
async function getUserEmails (userId) {
  const userEmails = await knex('email_addresses')
    .where('subscriber_id', '=', userId)
    .returning('*')

  return userEmails
}

// This is used by SES callbacks to remove email addresses when recipients
// perma-bounce or mark our emails as spam
// Removes from either subscribers or email_addresses as necessary
/**
 * @param {string} email
 */
async function removeEmail (email) {
  const subscriber = await getSubscriberByEmail(email)
  if (!subscriber) {
    const emailAddress = await getEmailAddressRecordByEmail(email)
    if (!emailAddress) {
      log.warn('removed-subscriber-not-found')
      return
    }
    await knex('email_addresses')
      .where({
        email,
        verified: true
      })
      .del()
    return
  }
  // This can fail if a subscriber has more email_addresses and marks
  // a primary email as spam, but we should let it fail so we can see it
  // in the logs
  await knex('subscribers')
    .where({
      primary_verification_token: subscriber.primary_verification_token,
      primary_sha1: subscriber.primary_sha1
    })
    .del()
}

/**
 * @param {string} emailId
 */
async function removeOneSecondaryEmail (emailId) {
  await knex('email_addresses')
    .where("id", emailId)
    .del()
}

/**
 * @param {string[]} hashes
 */
async function getEmailAddressesByHashes (hashes) {
  return await knex('email_addresses')
    .join('subscribers', 'email_addresses.subscriber_id', '=', 'subscribers.id')
    .whereIn('email_addresses.sha1', hashes)
    .andWhere('email_addresses.verified', '=', true)
}

/**
 * @param {string} uid
 */
async function deleteEmailAddressesByUid (uid) {
  await knex('email_addresses').where("subscriber_id", uid).del()
}

export {
  getEmailByToken,
  getEmailById,
  getEmailAddressRecordByEmail,
  addSubscriberUnverifiedEmailHash,
  resetUnverifiedEmailAddress,
  verifyEmailHash,
  addSubscriber,
  getUserEmails,
  removeEmail,
  removeOneSecondaryEmail,
  getEmailAddressesByHashes,
  deleteEmailAddressesByUid
}
