/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { destroyOAuthToken } from '../../utils/fxa.js'
import Knex from 'knex'
import knexConfig from '../knexfile.js'
import AppConstants from '../../appConstants.js'
import mozlog from '../../utils/log.js'
const knex = Knex(knexConfig)
const { DELETE_UNVERIFIED_SUBSCRIBERS_TIMER } = AppConstants
const log = mozlog('DB.subscribers')

/**
 * @param {string} token
 */
async function getSubscriberByToken (token) {
  const res = await knex('subscribers')
    .where('primary_verification_token', '=', token)

  return res[0]
}

/**
 * @param {string} token
 * @param {string} emailSha1
 */
async function getSubscriberByTokenAndHash (token, emailSha1) {
  const res = await knex.table('subscribers')
    .first()
    .where({
      primary_verification_token: token,
      primary_sha1: emailSha1
    })
  return res
}

/**
 * @param {string[]} hashes
 */
async function getSubscribersByHashes (hashes) {
  return await knex('subscribers').whereIn('primary_sha1', hashes).andWhere('primary_verified', '=', true)
}

/**
 * @param {number} id
 */
async function getSubscriberById (id) {
  const [subscriber] = await knex('subscribers').where({
    id
  })
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber)
  return subscriberAndEmails
}

/**
 * @param {string} uid
 */
async function getSubscriberByFxaUid (uid) {
  const [subscriber] = await knex('subscribers').where({
    fxa_uid: uid
  })
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber)
  return subscriberAndEmails
}

/**
 * @param {string} email
 */
async function getSubscriberByEmail (email) {
  const [subscriber] = await knex('subscribers').where({
    primary_email: email,
    primary_verified: true
  })
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber)
  return subscriberAndEmails
}
/**
 * Update fxa_refresh_token and fxa_profile_json for subscriber
 *
 * @param {any} subscriber knex object in DB
 * @param {string | null} fxaAccessToken from Firefox Account Oauth
 * @param {string | null} fxaRefreshToken from Firefox Account Oauth
 * @param {any} fxaProfileData from Firefox Account
 * @returns {Promise<any>} updated subscriber knex object in DB
 */
async function updateFxAData (subscriber, fxaAccessToken, fxaRefreshToken, fxaProfileData) {
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
  if (updatedSubscriber && subscriber.fxa_refresh_token) {
    destroyOAuthToken({ refresh_token: subscriber.fxa_refresh_token })
  }
  return updatedSubscriber
}

/**
 * Update fxa_profile_json for subscriber
 *
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber knex object in DB
 * @param {string} fxaProfileData from Firefox Account
 * @returns {Promise<object>} updated subscriber knex object in DB
 */
async function updateFxAProfileData (subscriber, fxaProfileData) {
  await knex('subscribers').where('id', subscriber.id)
    .update({
      fxa_profile_json: fxaProfileData
    })
  return getSubscriberById(subscriber.id)
}

/**
 * Remove fxa tokens and profile data for subscriber
 *
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber knex object in DB
 * @returns {Promise<object>} updated subscriber knex object in DB
 */
async function removeFxAData (subscriber) {
  log.debug('removeFxAData', subscriber)
  const updated = await knex('subscribers')
    .where('id', '=', subscriber.id)
    .update({
      fxa_access_token: null,
      fxa_refresh_token: null,
      fxa_profile_json: null
    })
    .returning('*')
  const updatedSubscriber = Array.isArray(updated) ? updated[0] : null
  if (updatedSubscriber && subscriber.fxa_refresh_token) {
    await destroyOAuthToken({ refresh_token: subscriber.fxa_refresh_token })
  }
  if (updatedSubscriber && subscriber.fxa_access_token) {
    await destroyOAuthToken({ token: subscriber.fxa_access_token })
  }
  return updatedSubscriber
}

/**
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber
 * @param {number} onerepProfileId
 */
async function setOnerepProfileId (subscriber, onerepProfileId) {
  await knex('subscribers')
    .where('id', subscriber.id)
    .update({
      onerep_profile_id: onerepProfileId
    })
}

/**
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber
 */
async function setBreachesLastShownNow (subscriber) {
  // TODO: turn 2 db queries into a single query (also see #942)
  const nowDateTime = new Date()
  const nowTimeStamp = nowDateTime.toISOString()
  await knex('subscribers')
    .where('id', '=', subscriber.id)
    .update({
      breaches_last_shown: nowTimeStamp
    })
  return getSubscriberByEmail(subscriber.primary_email)
}

/**
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber
 * @param {boolean} allEmailsToPrimary
 */
async function setAllEmailsToPrimary (subscriber, allEmailsToPrimary) {
  const updated = await knex('subscribers')
    .where('id', subscriber.id)
    .update({
      all_emails_to_primary: allEmailsToPrimary
    })
    .returning('*')
  const updatedSubscriber = Array.isArray(updated) ? updated[0] : null
  return updatedSubscriber
}

/**
 * OBSOLETE, preserved for backwards compatibility
 * TODO: Delete after monitor v2, only use setBreachResolution for v2
 *
 * @param {*} options {user, updatedResolvedBreaches}
 * @returns subscriber
 */
async function setBreachesResolved (options) {
  const { user, updatedResolvedBreaches } = options
  await knex('subscribers')
    .where('id', user.id)
    .update({
      breaches_resolved: updatedResolvedBreaches
    })
  return getSubscriberByEmail(user.primary_email)
}

/**
 * Set "breach_resolution" column with the latest breach resolution object
 * This column is meant to replace "breaches_resolved" column, which was used
 * for v1.
 *
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} user user object that contains the id of a user
 * @param {any} updatedBreachesResolution {emailId: [{breachId: {isResolved: bool, resolutionsChecked: [BreachType]}}, {}...]}
 * @returns subscriber
 */
async function setBreachResolution (user, updatedBreachesResolution) {
  await knex('subscribers')
    .where('id', user.id)
    .update({
      breach_resolution: updatedBreachesResolution
    })
  return getSubscriberByEmail(user.primary_email)
}

/**
 * @param {{ user: import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber; updatedWaitlistsJoined: any; }} options
 */
async function setWaitlistsJoined (options) {
  const { user, updatedWaitlistsJoined } = options
  await knex('subscribers')
    .where('id', user.id)
    .update({
      waitlists_joined: updatedWaitlistsJoined
    })
  return getSubscriberByEmail(user.primary_email)
}

/**
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber
 */
async function removeSubscriber (subscriber) {
  await knex('email_addresses').where({ subscriber_id: subscriber.id }).del()
  await knex('subscribers').where({ id: subscriber.id }).del()
}

/**
 * @param {string} token
 * @param {string} emailSha1
 */
async function removeSubscriberByToken (token, emailSha1) {
  const subscriber = await getSubscriberByTokenAndHash(token, emailSha1)
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

async function deleteUnverifiedSubscribers () {
  // @ts-ignore DELETE_UNVERIFIED_SUBSCRIBERS_TIMER should not be undefined
  const expiredDateTime = new Date(Date.now() - DELETE_UNVERIFIED_SUBSCRIBERS_TIMER * 1000)
  const expiredTimeStamp = expiredDateTime.toISOString()
  const numDeleted = await knex('subscribers')
    .where('primary_verified', false)
    .andWhere('created_at', '<', expiredTimeStamp)
    .del()
  log.info('deleteUnverifiedSubscribers', { msg: `Deleted ${numDeleted} rows.` })
}

/**
 * @param {string} fxaUID
 */
async function deleteSubscriberByFxAUID (fxaUID) {
  await knex('subscribers').where('fxa_uid', fxaUID).del()
}

/**
 * @param {number} id
 * @param {string} email
 */
async function deleteResolutionsWithEmail (id, email) {
  const [subscriber] = await knex('subscribers').where({
    id
  })
  const { breach_resolution: breachResolution } = subscriber
  // if email exists in breach resolution, remove it
  if (breachResolution && breachResolution[email]) {
    delete breachResolution[email]
    console.info(`Deleting resolution with email: ${email}`)
    return await setBreachResolution(subscriber, breachResolution)
  }
  console.info(`No resolution with ${email} found, skip`)
}

/**
 * @param {number} id
 * @param {any} stats
 */
async function updateBreachStats (id, stats) {
  await knex('subscribers')
    .where('id', id)
    .update({
      breach_stats: stats
    })
}

/**
 * @param {string} email
 */
async function updateMonthlyEmailTimestamp (email) {
  const res = await knex('subscribers').update({ monthly_email_at: 'now' })
    .where('primary_email', email)
    .returning('monthly_email_at')

  return res
}

/**
 * Unsubscribe user from monthly unresolved breach emails
 *
 * @param {string} token User verification token
 */
async function updateMonthlyEmailOptout (token) {
  await knex('subscribers')
    .update('monthly_email_optout', true)
    .where('primary_verification_token', token)
}

function getSubscribersWithUnresolvedBreachesQuery () {
  return knex('subscribers')
    .whereRaw('monthly_email_optout IS NOT TRUE')
    .whereRaw("greatest(created_at, monthly_email_at) < (now() - interval '30 days')")
    .whereRaw("(breach_stats #>> '{numBreaches, numUnresolved}')::int > 0")
}

async function getSubscribersWithUnresolvedBreaches (limit = 0) {
  let query = getSubscribersWithUnresolvedBreachesQuery()
    .select('primary_email', 'primary_verification_token', 'breach_stats', 'signup_language')
  if (limit) {
    query = query.limit(limit).orderBy('created_at')
  }
  return await query
}

async function getSubscribersWithUnresolvedBreachesCount () {
  const query = getSubscribersWithUnresolvedBreachesQuery()
  // @ts-ignore This will return a string
  const count = parseInt((await query.count({ count: '*' }))[0].count)
  return count
}


/**
 * Private
 *
 * @param {any} subscriber
 */
async function joinEmailAddressesToSubscriber (subscriber) {
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
export {
  getSubscriberByToken,
  getSubscribersByHashes,
  getSubscriberByTokenAndHash,
  getSubscriberById,
  getSubscriberByFxaUid,
  getSubscriberByEmail,
  getSubscribersWithUnresolvedBreachesQuery,
  getSubscribersWithUnresolvedBreaches,
  getSubscribersWithUnresolvedBreachesCount,
  updateFxAData,
  removeFxAData,
  updateFxAProfileData,
  setOnerepProfileId,
  setBreachesLastShownNow,
  setAllEmailsToPrimary,
  setBreachesResolved,
  setBreachResolution,
  setWaitlistsJoined,
  updateBreachStats,
  updateMonthlyEmailTimestamp,
  updateMonthlyEmailOptout,
  removeSubscriber,
  removeSubscriberByToken,
  deleteUnverifiedSubscribers,
  deleteSubscriberByFxAUID,
  deleteResolutionsWithEmail
}
