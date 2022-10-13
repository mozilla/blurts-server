import * as uuid from 'uuid'
import Knex from 'knex'
// import { FluentError } from '../locale-utils'
import AppConstants from '../app-constants.js'
// import { subscribeHash } from '../hibp'
import { destroyOAuthToken, getSha1 } from '../utils/fxa.js'
import mozlog from '../utils/log.js'

import knexConfig from './knexfile.js'
const { DELETE_UNVERIFIED_SUBSCRIBERS_TIMER } = AppConstants

let knex = Knex(knexConfig)
const uuidv4 = uuid.v4()

const log = mozlog('DB')

export async function getSubscriberByToken (token) {
  const res = await knex('subscribers')
    .where('primary_verification_token', '=', token)

  return res[0]
}

export async function getEmailByToken (token) {
  const res = await knex('email_addresses')
    .where('verification_token', '=', token)

  return res[0]
}

export async function getEmailById (emailAddressId) {
  const res = await knex('email_addresses')
    .where('id', '=', emailAddressId)

  return res[0]
}

export async function getSubscriberByTokenAndHash (token, emailSha1) {
  const res = await knex.table('subscribers')
    .first()
    .where({
      primary_verification_token: token,
      primary_sha1: emailSha1
    })
  return res
}

export async function joinEmailAddressesToSubscriber (subscriber) {
  if (subscriber) {
    const emailAddressRecords = await knex('email_addresses').where({
      subscriber_id: subscriber.id
    })
    subscriber.email_addresses = emailAddressRecords.map(
      emailAddress => ({ id: emailAddress.id, email: emailAddress.email })
    )
  }
  return subscriber
}

export async function getSubscriberById (id) {
  const [subscriber] = await knex('subscribers').where({
    id
  })
  const subscriberAndEmails = await this.joinEmailAddressesToSubscriber(subscriber)
  return subscriberAndEmails
}

export async function getSubscriberByFxaUid (uid) {
  const [subscriber] = await knex('subscribers').where({
    fxa_uid: uid
  })
  const subscriberAndEmails = await this.joinEmailAddressesToSubscriber(subscriber)
  return subscriberAndEmails
}

export async function getSubscriberByEmail (email) {
  const [subscriber] = await knex('subscribers').where({
    primary_email: email,
    primary_verified: true
  })
  const subscriberAndEmails = await this.joinEmailAddressesToSubscriber(subscriber)
  return subscriberAndEmails
}

export async function getEmailAddressRecordByEmail (email) {
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

export async function addSubscriberUnverifiedEmailHash (user, email) {
  const res = await knex('email_addresses').insert({
    subscriber_id: user.id,
    email,
    sha1: getSha1(email),
    verification_token: uuidv4(),
    verified: false
  }).returning('*')
  return res[0]
}

export async function resetUnverifiedEmailAddress (emailAddressId) {
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

export async function verifyEmailHash (token) {
  const unverifiedEmail = await this.getEmailByToken(token)
  if (!unverifiedEmail) {
    throw new FluentError('Error message for this verification email timed out or something went wrong.')
  }
  const verifiedEmail = await this._verifyNewEmail(unverifiedEmail)
  return verifiedEmail[0]
}

// TODO: refactor into an upsert? https://jaketrent.com/post/upsert-knexjs/
// Used internally, ideally should not be called by consumers.
export async function _getSha1EntryAndDo (sha1, aFoundCallback, aNotFoundCallback) {
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
export async function _addEmailHash (sha1, email, signup_language, verified = false) {
  try {
    return await this._getSha1EntryAndDo(sha1, async aEntry => {
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
      const verification_token = uuidv4()
      const res = await knex('subscribers')
        .insert({ primary_sha1: getSha1(email.toLowerCase()), primary_email: email, signup_language, primary_verification_token: verification_token, primary_verified: verified })
        .returning('*')
      return res[0]
    })
  } catch (e) {
    throw new FluentError('error-could-not-add-email')
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
export async function addSubscriber (email, signupLanguage, fxaAccessToken = null, fxaRefreshToken = null, fxaProfileData = null) {
  const emailHash = await this._addEmailHash(getSha1(email), email, signupLanguage, true)
  const verified = await this._verifySubscriber(emailHash)
  const verifiedSubscriber = Array.isArray(verified) ? verified[0] : null
  if (fxaRefreshToken || fxaProfileData) {
    return this._updateFxAData(verifiedSubscriber, fxaAccessToken, fxaRefreshToken, fxaProfileData)
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
export async function _verifySubscriber (emailHash) {
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
export async function _verifyNewEmail (emailHash) {
  await subscribeHash(emailHash.sha1)

  const verifiedEmail = await knex('email_addresses')
    .where('id', '=', emailHash.id)
    .update({
      verified: true
    })
    .returning('*')

  return verifiedEmail
}

export async function getUserEmails (userId) {
  const userEmails = await knex('email_addresses')
    .where('subscriber_id', '=', userId)
    .returning('*')

  return userEmails
}

/**
   * Update fxa_refresh_token and fxa_profile_json for subscriber
   *
   * @param {object} subscriber knex object in DB
   * @param {string} fxaAccessToken from Firefox Account Oauth
   * @param {string} fxaRefreshToken from Firefox Account Oauth
   * @param {string} fxaProfileData from Firefox Account
   * @returns {object} updated subscriber knex object in DB
   */
export async function updateFxAData (subscriber, fxaAccessToken, fxaRefreshToken, fxaProfileData) {
  const fxaUID = JSON.parse(fxaProfileData).uid
  const updated = await knex('subscribers')
    .where('id', '=', subscriber.id)
    .update({
      fxa_uid: fxaUID,
      fxa_access_token: fxaAccessToken,
      fxa_refresh_token: fxaRefreshToken,
      fxa_profile_json: fxaProfileData
    })
    .returning('*')
  const updatedSubscriber = Array.isArray(updated) ? updated[0] : null
  if (updatedSubscriber) {
    destroyOAuthToken({ refresh_token: subscriber.fxa_refresh_token })
  }
  return updatedSubscriber
}

export async function updateFxAProfileData (subscriber, fxaProfileData) {
  await knex('subscribers').where('id', subscriber.id)
    .update({
      fxa_profile_json: fxaProfileData
    })
  return this.getSubscriberById(subscriber.id)
}

export async function setBreachesLastShownNow (subscriber) {
  // TODO: turn 2 db queries into a single query (also see #942)
  const nowDateTime = new Date()
  const nowTimeStamp = nowDateTime.toISOString()
  await knex('subscribers')
    .where('id', '=', subscriber.id)
    .update({
      breaches_last_shown: nowTimeStamp
    })
  return this.getSubscriberByEmail(subscriber.primary_email)
}

export async function setAllEmailsToPrimary (subscriber, allEmailsToPrimary) {
  const updated = await knex('subscribers')
    .where('id', subscriber.id)
    .update({
      all_emails_to_primary: allEmailsToPrimary
    })
    .returning('*')
  const updatedSubscriber = Array.isArray(updated) ? updated[0] : null
  return updatedSubscriber
}

export async function setBreachesResolved (options) {
  const { user, updatedResolvedBreaches } = options
  await knex('subscribers')
    .where('id', user.id)
    .update({
      breaches_resolved: updatedResolvedBreaches
    })
  return this.getSubscriberByEmail(user.primary_email)
}

export async function setWaitlistsJoined (options) {
  const { user, updatedWaitlistsJoined } = options
  await knex('subscribers')
    .where('id', user.id)
    .update({
      waitlists_joined: updatedWaitlistsJoined
    })
  return this.getSubscriberByEmail(user.primary_email)
}

export async function removeSubscriber (subscriber) {
  await knex('email_addresses').where({ subscriber_id: subscriber.id }).del()
  await knex('subscribers').where({ id: subscriber.id }).del()
}

// This is used by SES callbacks to remove email addresses when recipients
// perma-bounce or mark our emails as spam
// Removes from either subscribers or email_addresses as necessary
export async function removeEmail (email) {
  const subscriber = await this.getSubscriberByEmail(email)
  if (!subscriber) {
    const emailAddress = await this.getEmailAddressRecordByEmail(email)
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

export async function removeSubscriberByToken (token, emailSha1) {
  const subscriber = await this.getSubscriberByTokenAndHash(token, emailSha1)
  if (!subscriber) {
    return false
  }
  await knex('subscribers')
    .where({
      primary_verification_token: subscriber.primary_verification_token,
      primary_sha1: subscriber.primary_sha1
    })
    .del()
  return subscriber
}

export async function removeOneSecondaryEmail (emailId) {
  await knex('email_addresses')
    .where({
      id: emailId
    })
    .del()
}

export async function getSubscribersByHashes (hashes) {
  return await knex('subscribers').whereIn('primary_sha1', hashes).andWhere('primary_verified', '=', true)
}

export async function getEmailAddressesByHashes (hashes) {
  return await knex('email_addresses')
    .join('subscribers', 'email_addresses.subscriber_id', '=', 'subscribers.id')
    .whereIn('email_addresses.sha1', hashes)
    .andWhere('email_addresses.verified', '=', true)
}

export async function deleteUnverifiedSubscribers () {
  const expiredDateTime = new Date(Date.now() - DELETE_UNVERIFIED_SUBSCRIBERS_TIMER * 1000)
  const expiredTimeStamp = expiredDateTime.toISOString()
  const numDeleted = await knex('subscribers')
    .where('primary_verified', false)
    .andWhere('created_at', '<', expiredTimeStamp)
    .del()
  log.info('deleteUnverifiedSubscribers', { msg: `Deleted ${numDeleted} rows.` })
}

export async function deleteSubscriberByFxAUID (fxaUID) {
  await knex('subscribers').where('fxa_uid', fxaUID).del()
}

export async function deleteEmailAddressesByUid (uid) {
  await knex('email_addresses').where({ subscriber_id: uid }).del()
}

export async function updateBreachStats (id, stats) {
  await knex('subscribers')
    .where('id', id)
    .update({
      breach_stats: stats
    })
}

export async function updateMonthlyEmailTimestamp (email) {
  const res = await knex('subscribers').update({ monthly_email_at: 'now' })
    .where('primary_email', email)
    .returning('monthly_email_at')

  return res
}

export async function updateMonthlyEmailOptout (token) {
  await knex('subscribers').update('monthly_email_optout', true).where('primary_verification_token', token)
}

export function getSubscribersWithUnresolvedBreachesQuery () {
  return knex('subscribers')
    .whereRaw('monthly_email_optout IS NOT TRUE')
    .whereRaw("greatest(created_at, monthly_email_at) < (now() - interval '30 days')")
    .whereRaw("(breach_stats #>> '{numBreaches, numUnresolved}')::int > 0")
}

export async function getSubscribersWithUnresolvedBreaches (limit = 0) {
  let query = this.getSubscribersWithUnresolvedBreachesQuery()
    .select('primary_email', 'primary_verification_token', 'breach_stats', 'signup_language')
  if (limit) {
    query = query.limit(limit).orderBy('created_at')
  }
  return await query
}

export async function getSubscribersWithUnresolvedBreachesCount () {
  const query = this.getSubscribersWithUnresolvedBreachesQuery()
  const count = parseInt((await query.count({ count: '*' }))[0].count)
  return count
}

export async function createConnection () {
  if (knex === null) {
    knex = Knex(knexConfig)
  }
}

export async function destroyConnection () {
  if (knex !== null) {
    await knex.destroy()
    knex = null
  }
}
