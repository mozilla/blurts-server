import { v4 as uuidv4 } from 'uuid'
import Knex from 'knex'
import knexConfig from '../knexfile.js'
import mozlog from '../../utils/log.js'
import { fluentError } from '../../utils/fluent.js'
import { subscribeHash } from '../../utils/hibp.js'
import { getSha1 } from '../../utils/fxa.js'
import { getSubscriberByEmail, updateFxAData } from './subscribers.js'
const knex = Knex(knexConfig)
const log = mozlog('DB.email_addresses')

async function getEmailByToken (token) {
  const res = await knex('email_addresses')
    .where('verification_token', '=', token)

  return res[0]
}

async function getEmailById (emailAddressId) {
  const res = await knex('email_addresses')
    .where('id', '=', emailAddressId)

  return res[0]
}

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

async function addSubscriberUnverifiedEmailHash (user, email) {
  const res = await knex('email_addresses').insert({
    subscriber_id: user.id,
    email,
    sha1: getSha1(email),
    verification_token: uuidv4(),
    verified: false
  }).returning('*')
  return res[0]
}

async function resetUnverifiedEmailAddress (emailAddressId) {
  const newVerificationToken = uuidv4()
  const res = await knex('email_addresses')
    .update({
      verification_token: newVerificationToken,
      updated_at: knex.fn.now()
    })
    .where('id', emailAddressId)
    .returning('*')
  return res[0]
}

async function verifyEmailHash (token) {
  const unverifiedEmail = await getEmailByToken(token)
  if (!unverifiedEmail) {
    throw fluentError('Error message for this verification email timed out or something went wrong.')
  }
  const verifiedEmail = await _verifyNewEmail(unverifiedEmail)
  return verifiedEmail[0]
}

// TODO: refactor into an upsert? https://jaketrent.com/post/upsert-knexjs/
// Used internally, ideally should not be called by consumers.
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
async function _addEmailHash (sha1, email, signupLanguage, verified = false) {
  log.debug('_addEmailHash', { sha1, email, signupLanguage, verified })
  try {
    return await _getSha1EntryAndDo(sha1, async aEntry => {
      // Entry existed, patch the email value if supplied.
      if (email) {
        const res = await knex('subscribers')
          .update({
            primary_email: email,
            primary_sha1: getSha1(email.toLowerCase()),
            primary_verified: verified,
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
    log.error(e)
    throw fluentError('error-could-not-add-email')
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
     * @param {string} fxaAccessToken from Firefox Account Oauth
     * @param {string} fxaRefreshToken from Firefox Account Oauth
     * @param {string} fxaProfileData from Firefox Account
     * @returns {object} subscriber knex object added to DB
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
     * @param {object} emailHash knex object in DB
     * @returns {object} verified subscriber knex object in DB
     */
async function _verifySubscriber (emailHash) {
  // TODO: move this "up" into controllers/users ?
  await subscribeHash(emailHash.primary_sha1)

  const verifiedSubscriber = await knex('subscribers')
    .where('primary_email', '=', emailHash.primary_email)
    .update({
      primary_verified: true,
      updated_at: knex.fn.now()
    })
    .returning('*')

  return verifiedSubscriber
}

// Verifies new emails added by existing users
async function _verifyNewEmail (emailHash) {
  await subscribeHash(emailHash.sha1)

  const verifiedEmail = await knex('email_addresses')
    .where('id', '=', emailHash.id)
    .update({
      verified: true
    })
    .returning('*')

  return verifiedEmail
}

async function getUserEmails (userId) {
  const userEmails = await knex('email_addresses')
    .where('subscriber_id', '=', userId)
    .returning('*')

  return userEmails
}

// This is used by SES callbacks to remove email addresses when recipients
// perma-bounce or mark our emails as spam
// Removes from either subscribers or email_addresses as necessary
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

async function removeOneSecondaryEmail (emailId) {
  await knex('email_addresses')
    .where({
      id: emailId
    })
    .del()
}

async function getEmailAddressesByHashes (hashes) {
  return await knex('email_addresses')
    .join('subscribers', 'email_addresses.subscriber_id', '=', 'subscribers.id')
    .whereIn('email_addresses.sha1', hashes)
    .andWhere('email_addresses.verified', '=', true)
}

async function deleteEmailAddressesByUid (uid) {
  await knex('email_addresses').where({ subscriber_id: uid }).del()
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
