/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'
import { getAllBreaches, upsertBreaches, knex } from '../db/tables/breaches.js'
import { InternalServerError } from '../utils/error.js'
import { getMessage } from '../utils/fluent.js'
const { HIBP_THROTTLE_MAX_TRIES, HIBP_THROTTLE_DELAY, HIBP_API_ROOT, HIBP_KANON_API_ROOT, HIBP_KANON_API_TOKEN } = AppConstants

// TODO: fix hardcode
const HIBP_USER_AGENT = 'monitor/1.0.0'
// When HIBP "re-names" a breach, it keeps its old 'Name' value but gets a new 'Title'
// We use 'Name' in Firefox (via Remote Settings), so we have to maintain our own mapping of re-named breaches.
const RENAMED_BREACHES = ['covve']
const RENAMED_BREACHES_MAP = {
  covve: 'db8151dd'
}

// TODO: Add unit test when changing this code:
/* c8 ignore start */
function _addStandardOptions (options = {}) {
  const hibpOptions = {
    headers: {
      'User-Agent': HIBP_USER_AGENT
    }
  }
  return Object.assign(options, hibpOptions)
}
/* c8 ignore stop */

/**
 * @param {string} url
 * @param {any | undefined} reqOptions
 * @param tryCount
 * @returns {Promise<any>}
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function _throttledFetch (url, reqOptions, tryCount = 1) {
  try {
    const response = await fetch(url, reqOptions)
    if (response.ok) return await response.json()

    switch (response.status) {
      case 404:
        // 404 can mean "no results", return undefined response
        return undefined
      case 429:
        console.info('_throttledFetch', { err: 'Error 429, tryCount: ' + tryCount })
        // @ts-ignore TODO: Explicitly parse into a number
        if (tryCount >= HIBP_THROTTLE_MAX_TRIES) {
          throw new InternalServerError(getMessage('error-hibp-throttled'))
        } else {
          tryCount++
          // @ts-ignore HIBP_THROTTLE_DELAY should be defined
          await new Promise(resolve => setTimeout(resolve, HIBP_THROTTLE_DELAY * tryCount))
          return await _throttledFetch(url, reqOptions, tryCount)
        }
      default:
        throw new InternalServerError(`bad response: ${response.status}`)
    }
  } catch (err) {
    console.error('_throttledFetch', { err })
    throw new InternalServerError(getMessage('error-hibp-connect'))
  }
}
/* c8 ignore stop */

/**
 * @param {string} path
 * @param options
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function req (path, options = {}) {
  const url = `${HIBP_API_ROOT}${path}`
  const reqOptions = _addStandardOptions(options)
  return await _throttledFetch(url, reqOptions)
}
/* c8 ignore stop */

/**
 * @param {string} path
 * @param options
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function kAnonReq (path, options = {}) {
  // Construct HIBP url and standard headers
  const url = `${HIBP_KANON_API_ROOT}${path}?code=${encodeURIComponent(HIBP_KANON_API_TOKEN)}`
  const reqOptions = _addStandardOptions(options)
  return await _throttledFetch(url, reqOptions)
}
/* c8 ignore stop */

/**
 * Sanitize data classes
 * ie. "Email Addresses" -> "email-addresses"
 *
 * @param {any[]} dataClasses
 * @returns Array sanitized data classes array
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
function formatDataClassesArray (dataClasses) {
  return dataClasses.map(dataClass =>
    dataClass.toLowerCase()
      .replace(/[^-a-z0-9]/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/(^-|-$)/g, '')
  )
}
/* c8 ignore stop */

/**
 * The type `HibpLikeDbBreach` is roughly the same as the data we receive from
 * HIBP, except that we added a `FaviconUrl`, that AddedDate and ModifiedData
 * are Date objects, and that a couple of fields are not available (because we
 * do not store them in our database, at the time of writing).
 *
 * @typedef {{ FaviconUrl?: string }} WithFaviconUrl
 * @typedef {WithFaviconUrl & Omit<import('../app/functions/universal/breach.ts').Breach, "recencyIndex" | "ResolutionsChecked" | "AddedDate" | "ModifiedDate"> & { AddedDate: Date; ModifiedDate: Date; }} HibpLikeDbBreach
 */

/**
 * Get all breaches from the database table "breaches",
 * sanitize it, and return a javascript array
 *
 * @returns {Promise<HibpLikeDbBreach[]>} formatted all breaches array
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function getAllBreachesFromDb () {
  /**
   * @type {any[]}
   */
  let dbBreaches = []
  try {
    dbBreaches = await getAllBreaches()
  } catch (e) {
    console.error('getAllBreachesFromDb', 'No breaches exist in the database: ' + e)
    return dbBreaches
  }

  // TODO: we can do some filtering here for the most commonly used fields
  // TODO: change field names to camel case
  return dbBreaches.map(breach => ({
    Id: breach.id,
    Name: breach.name,
    Title: breach.title,
    Domain: breach.domain,
    BreachDate: breach.breach_date,
    AddedDate: breach.added_date,
    ModifiedDate: breach.modified_date,
    PwnCount: breach.pwn_count,
    Description: breach.description,
    LogoPath: breach.logo_path,
    DataClasses: breach.data_classes,
    IsVerified: breach.is_verified,
    IsFabricated: breach.is_fabricated,
    IsSensitive: breach.is_sensitive,
    IsRetired: breach.is_retired,
    IsSpamList: breach.is_spam_list,
    IsMalware: breach.is_malware,
    FaviconUrl: breach.favicon_url,
  }))
}
/* c8 ignore stop */

/**
 * @param {{ locals: { breachLogoMap: Map<any, any>; breaches: any[]; breachesLoadedDateTime: number; }; }} app
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function loadBreachesIntoApp (app) {
  // attempt to fetch breaches from the "breaches" database table
  const breaches = await getAllBreachesFromDb()
  console.debug('loadBreachesIntoApp', `loaded breaches from database: ${breaches.length}`)

  // if "breaches" table does not return results, fall back to HIBP request
  if (breaches?.length < 1) {
    const breachesResponse = await req('/breaches')
    console.debug('loadBreachesIntoApp', `loaded breaches from HIBP: ${breachesResponse.length}`)

    for (const breach of breachesResponse) {
      breach.DataClasses = formatDataClassesArray(breach.DataClasses)
        // @ts-ignore The result should be set
      breach.LogoPath = /[^/]*$/.exec(breach.LogoPath)[0]
      breaches.push(breach)
    }

    // sync the "breaches" table with the latest from HIBP
    await upsertBreaches(breaches)
  }
  // This will be replaced by a map with the breach logos when
  // `downloadBreachIcons` resolves, but by setting it to an empty Map first,
  // we don't delay the server start - we just won't have breach logos yet.
  app.locals.breachLogoMap = new Map()
  app.locals.breaches = breaches
  app.locals.breachesLoadedDateTime = Date.now()
  console.info('done-loading-breaches', 'great success 👍')
}
/* c8 ignore stop */

/**
 * Get addresses and language from either subscribers or email_addresses fields:
 *
 * @param {*} recipient
 * @returns
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
function getAddressesAndLanguageForEmail (recipient) {
  const {
    all_emails_to_primary: allEmailsToPrimary,
    email: breachedEmail,
    primary_email: primaryEmail,
    signup_language: signupLanguage
  } = recipient

  if (breachedEmail) {
    return {
      breachedEmail,
      recipientEmail: allEmailsToPrimary ? primaryEmail : breachedEmail,
      signupLanguage
    }
  }

  return {
    breachedEmail: primaryEmail,
    recipientEmail: primaryEmail,
    signupLanguage
  }
}
/* c8 ignore stop */

/**
 * Filter breaches that we would not like to show.
 *
 * @param {any[]} breaches
 * @returns {any[]} filteredBreaches
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
function getFilteredBreaches (breaches) {
  return breaches.filter(breach => (
    !breach.IsRetired &&
    !breach.IsSpamList &&
    !breach.IsFabricated &&
    breach.IsVerified &&
    breach.Domain !== ''
  ))
}
/* c8 ignore stop */

/**
 * A range of hashes can be searched by passing the hash prefix in a GET request:
 * GET /breachedaccount/range/[hash prefix]
 *
 * @param {string} sha1 first 6 chars of email sha1
 * @param {any[]} allBreaches
 * @param {boolean} includeSensitive
 * @param {boolean} filterBreaches
 * @returns
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function getBreachesForEmail (sha1, allBreaches, includeSensitive = false, filterBreaches = true) {
  let foundBreaches = []
  const sha1Prefix = sha1.slice(0, 6).toUpperCase()
  const path = `/breachedaccount/range/${sha1Prefix}`

  const response = await kAnonReq(path)
  if (!response) {
    return []
  }
  // Parse response body, format:
  // [
  //   {"hashSuffix":<suffix>,"websites":[<breach1Name>,...]},
  //   {"hashSuffix":<suffix>,"websites":[<breach1Name>,...]},
  // ]
  for (const breachedAccount of response) {
    if (sha1.toUpperCase() === sha1Prefix + breachedAccount.hashSuffix) {
      foundBreaches = allBreaches.filter(breach => breachedAccount.websites.includes(breach.Name))
      if (filterBreaches) {
        foundBreaches = getFilteredBreaches(foundBreaches)
      }

      // NOTE: DO NOT CHANGE THIS SORT LOGIC
      // We store breach resolutions by recency indices,
      // so that our DB does not contain any part of any user's list of accounts
      foundBreaches.sort((a, b) => {
        // @ts-ignore TODO: Turn dates into a number
        return new Date(b.AddedDate) - new Date(a.AddedDate)
      })

      break
    }
  }

  if (includeSensitive) {
    return foundBreaches
  }
  return foundBreaches.filter(
    breach => !breach.IsSensitive
  )
}
/* c8 ignore stop */

/**
 * @param {any[]} allBreaches
 * @param {string} breachName
 * @returns {HibpLikeDbBreach}
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
function getBreachByName (allBreaches, breachName) {
  breachName = breachName.toLowerCase()
  if (RENAMED_BREACHES.includes(breachName)) {
    // @ts-ignore Converted from regular JS
    breachName = RENAMED_BREACHES_MAP[breachName]
  }
  const foundBreach = allBreaches.find(breach => breach.Name.toLowerCase() === breachName)
  return foundBreach
}
/* c8 ignore stop */

/**
 * A range can be subscribed for callbacks with the following request:
 * POST /range/subscribe
 * {
 *   hashPrefix:"[hash prefix]"
 * }
 * There are two possible response codes that can be returned:
 * 1. HTTP 201: New range subscription has been created
 * 2. HTTP 200: Range subscription already exists
 *
 * @param {string} sha1 sha1 of the email being subscribed
 * @returns 200 or 201 response codes
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function subscribeHash (sha1) {
  const sha1Prefix = sha1.slice(0, 6).toUpperCase()
  const path = '/range/subscribe'
  const options = {
    Method: 'POST',
    Body: { hashPrefix: sha1Prefix }
  }

  return await kAnonReq(path, options)
}
/* c8 ignore stop */

/**
 * A range subscription can be deleted with the following request:
 * DELETE /range/[hash prefix]
 *
 * There is one possible response code that can be returned:
 * HTTP 200: Range subscription successfully deleted
 *
 * @param {string} sha1 sha1 of the email being subscribed
 * @returns 200 response codes
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function deleteSubscribedHash (sha1) {
  const sha1Prefix = sha1.slice(0, 6).toUpperCase()
  const path = `/range/${sha1Prefix}`
  const options = {
    Method: 'DELETE'
  }

  return await kAnonReq(path, options)
}
/* c8 ignore stop */

export {
  req,
  kAnonReq,
  formatDataClassesArray,
  loadBreachesIntoApp,
  getAddressesAndLanguageForEmail,
  getBreachesForEmail,
  getBreachByName,
  getAllBreachesFromDb,
  getFilteredBreaches,
  subscribeHash,
  deleteSubscribedHash,
  knex as knexHibp
}
