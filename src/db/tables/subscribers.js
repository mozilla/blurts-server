/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { destroyOAuthToken } from '../../utils/fxa.js'
import initKnex from 'knex'
import knexConfig from '../knexfile.js'
import AppConstants from '../../appConstants.js'
import mozlog from '../../utils/log.js'
const knex = initKnex(knexConfig)
const { DELETE_UNVERIFIED_SUBSCRIBERS_TIMER } = AppConstants
const log = mozlog('DB.subscribers')

/**
 * @param {string} token
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscriberByToken (token) {
  const res = await knex('subscribers')
    .where('primary_verification_token', '=', token)

  return res[0]
}
/* c8 ignore stop */

/**
 * @param {string} token
 * @param {string} emailSha1
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscriberByTokenAndHash (token, emailSha1) {
  const res = await knex.table('subscribers')
    .first()
    .where({
      primary_verification_token: token,
      primary_sha1: emailSha1
    })
  return res
}
/* c8 ignore stop */

/**
 * @param {string[]} hashes
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscribersByHashes (hashes) {
  return await knex('subscribers').whereIn('primary_sha1', hashes).andWhere('primary_verified', '=', true)
}
/* c8 ignore stop */

/**
 * @param {number} id
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscriberById (id) {
  const [subscriber] = await knex('subscribers').where({
    id
  })
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber)
  return subscriberAndEmails
}
/* c8 ignore stop */

/**
 * @param {string} uid
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscriberByFxaUid (uid) {
  const [subscriber] = await knex('subscribers').where({
    fxa_uid: uid
  })
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber)
  return subscriberAndEmails
}
/* c8 ignore stop */

/**
 * @param {string} email
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscriberByEmail (email) {
  const [subscriber] = await knex('subscribers').where({
    primary_email: email,
    primary_verified: true
  })
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber)
  return subscriberAndEmails
}
/* c8 ignore stop */

/**
 * Update primary email for subscriber
 *
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber
 * @param {string} updatedEmail primary email to be updated to
 * @returns {Promise<import('knex/types/tables').SubscriberRow | null>} updated subscriber
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updatePrimaryEmail (subscriber, updatedEmail) {
  const trx = await knex.transaction()
  let subscriberTableUpdated, emailTableUpdated
  try {
    // update subscriber primary email to updated email
    subscriberTableUpdated = await knex('subscribers')
      .where('id', '=', subscriber.id)
      .update({
        primary_email: updatedEmail,
        // @ts-ignore knex.fn.now() results in it being set to a date,
        // even if it's not typed as a JS date object:
        updated_at: knex.fn.now(),
      })
      .returning('*')
      .transacting(trx)

    // if email_addresses table has updatedEmail as a secondary in Monitor
    // swap it with the current primary
    // Fixing: MNTOR-1748
    emailTableUpdated = await knex('email_addresses')
      .where('email', '=', updatedEmail)
      .update({
        email: subscriber.primary_email,
        // @ts-ignore knex.fn.now() results in it being set to a date,
        // even if it's not typed as a JS date object:
        updated_at: knex.fn.now(),
      })
      .transacting(trx)

    await trx.commit()
    log.debug('updatePrimaryEmail', { subscriberTableUpdated })
    log.debug('updatePrimaryEmail', { emailTableUpdated })
  } catch (error) {
    await trx.rollback()
    // @ts-ignore Type annotations added later; type unknown:
    log.error('updatePrimaryEmail', error)
  }
  const updatedSubscriber = Array.isArray(subscriberTableUpdated) ? subscriberTableUpdated[0] : null
  return updatedSubscriber
}
/* c8 ignore stop */

/**
 * Update fxa_refresh_token and fxa_profile_json for subscriber
 *
 * @param {any} subscriber knex object in DB
 * @param {string | null} fxaAccessToken from Firefox Account Oauth
 * @param {string | null} fxaRefreshToken from Firefox Account Oauth
 * @param {any} fxaProfileData from Firefox Account
 * @returns {Promise<any>} updated subscriber knex object in DB
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateFxAData (subscriber, fxaAccessToken, fxaRefreshToken, fxaProfileData) {
  const fxaUID = JSON.parse(fxaProfileData).uid
  const updated = await knex('subscribers')
    .where('id', '=', subscriber.id)
    .update({
      fxa_uid: fxaUID,
      fxa_access_token: fxaAccessToken,
      fxa_refresh_token: fxaRefreshToken,
      fxa_profile_json: fxaProfileData,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .returning('*')
  const updatedSubscriber = Array.isArray(updated) ? updated[0] : null
  if (updatedSubscriber && subscriber.fxa_refresh_token) {
    destroyOAuthToken({ refresh_token: subscriber.fxa_refresh_token })
  }
  return updatedSubscriber
}
/* c8 ignore stop */

/**
 * Update fxa_profile_json for subscriber
 *
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber knex object in DB
 * @param {string} fxaProfileData from Firefox Account
 * @returns {Promise<object>} updated subscriber knex object in DB
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateFxAProfileData (subscriber, fxaProfileData) {
  await knex('subscribers').where('id', subscriber.id)
    .update({
      fxa_profile_json: fxaProfileData,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
  return getSubscriberById(subscriber.id)
}
/* c8 ignore stop */

/**
 * Remove fxa tokens and profile data for subscriber
 *
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber knex object in DB
 * @returns {Promise<import('knex/types/tables').SubscriberRow | null>} updated subscriber knex object in DB
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function removeFxAData (subscriber) {
  log.debug('removeFxAData', subscriber)
  const updated = await knex('subscribers')
    .where('id', '=', subscriber.id)
    .update({
      fxa_access_token: null,
      fxa_refresh_token: null,
      fxa_profile_json: null,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
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
/* c8 ignore stop */

/**
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function setBreachesLastShownNow (subscriber) {
  // TODO: turn 2 db queries into a single query (also see #942)
  const nowDateTime = new Date()
  const nowTimeStamp = nowDateTime.toISOString()
  await knex('subscribers')
    .where('id', '=', subscriber.id)
    .update({
      breaches_last_shown: nowTimeStamp,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
  return getSubscriberByEmail(subscriber.primary_email)
}
/* c8 ignore stop */

/**
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber
 * @param {boolean} allEmailsToPrimary
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function setAllEmailsToPrimary (subscriber, allEmailsToPrimary) {
  const updated = await knex('subscribers')
    .where('id', subscriber.id)
    .update({
      all_emails_to_primary: allEmailsToPrimary,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .returning('*')
  const updatedSubscriber = Array.isArray(updated) ? updated[0] : null
  return updatedSubscriber
}
/* c8 ignore stop */

/**
 * OBSOLETE, preserved for backwards compatibility
 * TODO: Delete after monitor v2, only use setBreachResolution for v2
 *
 * @param {*} options {user, updatedResolvedBreaches}
 * @returns subscriber
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function setBreachesResolved (options) {
  const { user, updatedResolvedBreaches } = options
  await knex('subscribers')
    .where('id', user.id)
    .update({
      breaches_resolved: updatedResolvedBreaches,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
  return getSubscriberByEmail(user.primary_email)
}
/* c8 ignore stop */

/**
 * Set "breach_resolution" column with the latest breach resolution object
 * This column is meant to replace "breaches_resolved" column, which was used
 * for v1.
 *
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} user user object that contains the id of a user
 * @param {any} updatedBreachesResolution {emailId: [{breachId: {isResolved: bool, resolutionsChecked: [BreachType]}}, {}...]}
 * @returns subscriber
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function setBreachResolution (user, updatedBreachesResolution) {
  await knex('subscribers')
    .where('id', user.id)
    .update({
      breach_resolution: updatedBreachesResolution,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
  return getSubscriberByEmail(user.primary_email)
}
/* c8 ignore stop */

/**
 * @param {{ user: import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber; updatedWaitlistsJoined: any; }} options
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function setWaitlistsJoined (options) {
  const { user, updatedWaitlistsJoined } = options
  await knex('subscribers')
    .where('id', user.id)
    .update({
      waitlists_joined: updatedWaitlistsJoined,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
  return getSubscriberByEmail(user.primary_email)
}
/* c8 ignore stop */

/**
 * @param {import('../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js').Subscriber} subscriber
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function removeSubscriber (subscriber) {
  await knex('email_addresses').where({ subscriber_id: subscriber.id }).del()
  await knex('subscribers').where({ id: subscriber.id }).del()
}
/* c8 ignore stop */

/**
 * @param {string} token
 * @param {string} emailSha1
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
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
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
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
/* c8 ignore stop */

/**
 * Delete subscriber when a FxA user id is provided
 * Also deletes all the additional email addresses associated with the account
 *
 * @param {any} sub subscriber object
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function deleteSubscriber (sub) {
  const trx = await knex.transaction()
  log.debug('deleteSubscriber', JSON.stringify(sub))

  try {
    await knex('email_addresses').where({ subscriber_id: sub.id }).del().transacting(trx)
    await knex('subscribers').returning('id').where('fxa_uid', sub.fxa_uid).del().transacting(trx)
    await trx.commit()
  } catch (error) {
    await trx.rollback()
    // @ts-ignore Type annotations added later; type unknown:
    log.error('deleteSubscriber', error)
  }
  //  const subscriber = await knex('subscribers').returning('id').where('fxa_uid', fxaUID).del()
  //  if (subscriber && subscriber[0]) { await knex('email_addresses').where({ subscriber_id: subscriber[0].id }).del() }
}
/* c8 ignore stop */

/**
 * @param {number} id
 * @param {string} email
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function deleteResolutionsWithEmail (id, email) {
  /** @type {any} */
  const [subscriber] = await knex('subscribers').where({
    id
  })
  /** @type {{ breach_resolution: any }} */
  const { breach_resolution: breachResolution } = subscriber
  // if email exists in breach resolution, remove it
  if (breachResolution && breachResolution[email]) {
    delete breachResolution[email]
    console.info(`Deleting resolution with email: ${email}`)
    return await setBreachResolution(subscriber, breachResolution)
  }
  console.info(`No resolution with ${email} found, skip`)
}
/* c8 ignore stop */

/**
 * @param {number} id
 * @param {any} stats
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateBreachStats (id, stats) {
  await knex('subscribers')
    .where('id', id)
    .update({
      breach_stats: stats,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
}
/* c8 ignore stop */

/**
 * @param {string} email
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateMonthlyEmailTimestamp (email) {
  const res = await knex('subscribers')
    .update({
      monthly_email_at: 'now',
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .where('primary_email', email)
    .returning('monthly_email_at')

  return res
}
/* c8 ignore stop */

/**
 * Unsubscribe user from monthly unresolved breach emails
 *
 * @param {string} token User verification token
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateMonthlyEmailOptout (token) {
  await knex('subscribers')
    .update('monthly_email_optout', true)
    .where('primary_verification_token', token)
}
/* c8 ignore stop */

/**
 * @param {number} subscriberId
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getOnerepProfileId (subscriberId) {
  return await knex('subscribers')
    .select('onerep_profile_id')
    .where('id', subscriberId)
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
function getSubscribersWithUnresolvedBreachesQuery () {
  return knex('subscribers')
    .whereRaw('monthly_email_optout IS NOT TRUE')
    .whereRaw("greatest(created_at, monthly_email_at) < (now() - interval '30 days')")
    .whereRaw("(breach_stats #>> '{numBreaches, numUnresolved}')::int > 0")
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscribersWithUnresolvedBreaches (limit = 0) {
  let query = getSubscribersWithUnresolvedBreachesQuery()
    .select('primary_email', 'primary_verification_token', 'breach_stats', 'signup_language')
  if (limit) {
    query = query.limit(limit).orderBy('created_at')
  }
  return await query
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscribersWithUnresolvedBreachesCount () {
  const query = getSubscribersWithUnresolvedBreachesQuery()
  // @ts-ignore This will return a string
  const count = parseInt((await query.count({ count: '*' }))[0].count)
  return count
}
/* c8 ignore stop */


/**
 * Private
 *
 * @param {any} subscriber
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
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
/* c8 ignore stop */

export {
  getOnerepProfileId,
  getSubscriberByToken,
  getSubscribersByHashes,
  getSubscriberByTokenAndHash,
  getSubscriberById,
  getSubscriberByFxaUid,
  getSubscriberByEmail,
  getSubscribersWithUnresolvedBreachesQuery,
  getSubscribersWithUnresolvedBreaches,
  getSubscribersWithUnresolvedBreachesCount,
  updatePrimaryEmail,
  updateFxAData,
  removeFxAData,
  updateFxAProfileData,
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
  deleteSubscriber,
  deleteResolutionsWithEmail,
  knex as knexSubscribers
}
