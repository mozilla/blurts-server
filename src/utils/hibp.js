/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { get } from 'node:https'
import { access, constants, createWriteStream } from 'node:fs'
import { dirname, resolve as pathResolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import mozlog from './log.js'
import AppConstants from '../appConstants.js'
import { getAllBreaches, upsertBreaches } from '../db/tables/breaches.js'
import { FluentError, InternalServerError } from '../utils/error.js'
import { mkdir } from 'node:fs/promises'
const { HIBP_THROTTLE_MAX_TRIES, HIBP_THROTTLE_DELAY, HIBP_API_ROOT, HIBP_KANON_API_ROOT, HIBP_KANON_API_TOKEN } = AppConstants

// TODO: fix hardcode
const HIBP_USER_AGENT = 'monitor/1.0.0'
// When HIBP "re-names" a breach, it keeps its old 'Name' value but gets a new 'Title'
// We use 'Name' in Firefox (via Remote Settings), so we have to maintain our own mapping of re-named breaches.
const RENAMED_BREACHES = ['covve']
const RENAMED_BREACHES_MAP = {
  covve: 'db8151dd'
}
const log = mozlog('hibp')

function _addStandardOptions (options = {}) {
  const hibpOptions = {
    headers: {
      'User-Agent': HIBP_USER_AGENT
    }
  }
  return Object.assign(options, hibpOptions)
}

async function _throttledFetch (url, reqOptions, tryCount = 1) {
  try {
    const response = await fetch(url, reqOptions)
    if (response.ok) return await response.json()

    switch (response.status) {
      case 404:
        // 404 can mean "no results", return undefined response
        return undefined
      case 429:
        log.info('_throttledFetch', { err: 'Error 429, tryCount: ' + tryCount })
        if (tryCount >= HIBP_THROTTLE_MAX_TRIES) {
          throw new FluentError('error-hibp-throttled')
        } else {
          tryCount++
          await new Promise(resolve => setTimeout(resolve, HIBP_THROTTLE_DELAY * tryCount))
          return await _throttledFetch(url, reqOptions, tryCount)
        }
      default:
        throw new InternalServerError(`bad response: ${response.status}`)
    }
  } catch (err) {
    log.error('_throttledFetch', { err })
    throw new FluentError('error-hibp-connect')
  }
}

async function req (path, options = {}) {
  const url = `${HIBP_API_ROOT}${path}`
  const reqOptions = _addStandardOptions(options)
  return await _throttledFetch(url, reqOptions)
}

async function kAnonReq (path, options = {}) {
  // Construct HIBP url and standard headers
  const url = `${HIBP_KANON_API_ROOT}${path}?code=${encodeURIComponent(HIBP_KANON_API_TOKEN)}`
  const reqOptions = _addStandardOptions(options)
  return await _throttledFetch(url, reqOptions)
}

/**
 * Sanitize data classes
 * ie. "Email Addresses" -> "email-addresses"
 *
 * @param {Array} dataClasses
 * @returns Array sanitized data classes array
 */
function formatDataClassesArray (dataClasses) {
  return dataClasses.map(dataClass =>
    dataClass.toLowerCase()
      .replace(/[^-a-z0-9]/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/(^-|-$)/g, '')
  )
}

/**
 * Get all breaches from the database table "breaches",
 * sanitize it, and return a javascript array
 *
 * @returns formatted all breaches array
 */
async function getAllBreachesFromDb () {
  let dbBreaches = []
  try {
    dbBreaches = await getAllBreaches()
  } catch (e) {
    log.error('getAllBreachesFromDb', 'No breaches exist in the database: ' + e)
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
    IsMalware: breach.is_malware
  }))
}

async function loadBreachesIntoApp (app) {
  try {
    // attempt to fetch breaches from the "breaches" database table
    const breaches = await getAllBreachesFromDb()
    log.debug('loadBreachesIntoApp', `loaded breaches from database: ${breaches.length}`)

    // if "breaches" table does not return results, fall back to HIBP request
    if (breaches?.length < 1) {
      const breachesResponse = await req('/breaches')
      log.debug('loadBreachesIntoApp', `loaded breaches from HIBP: ${breachesResponse.length}`)

      for (const breach of breachesResponse) {
        breach.DataClasses = formatDataClassesArray(breach.DataClasses)
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
    downloadBreachIcons(breaches).then(breachLogoMap => {
      app.locals.breachLogoMap = breachLogoMap
    })
    app.locals.breaches = breaches
    app.locals.breachesLoadedDateTime = Date.now()
  } catch (error) {
    throw new FluentError('error-hibp-load-breaches')
  }
  log.info('done-loading-breaches', 'great success 👍')
}

async function downloadBreachIcons (breaches) {
  const breachDomains = breaches
    .map(breach => breach.Domain)
    .filter(breachDomain => breachDomain.length > 0)
  const logoFolder = AppConstants.LIVE_RELOAD === 'true'
    ? pathResolve(dirname(fileURLToPath(import.meta.url)), '../client/images/logo_cache/')
    : pathResolve(dirname(fileURLToPath(import.meta.url)), '../../dist/images/logo_cache/')
  try {
    await mkdir(logoFolder)
  } catch {
    // Do nothing; if the directory already exists, that's fine.
  }
  const logoMapElems = await Promise.all(breachDomains.map(breachDomain => {
    return new Promise((resolve, reject) => {
      const logoPath = pathResolve(logoFolder, breachDomain.toLowerCase() + '.ico')
      access(logoPath, constants.F_OK, (accessError) => {
        if (!accessError) {
          resolve([breachDomain, `/images/logo_cache/${breachDomain.toLowerCase()}.ico`])
          return
        }
        get(`https://icons.duckduckgo.com/ip3/${breachDomain}.ico`, (response) => {
          if (response.statusCode !== 200) {
            resolve(null)
            return
          }

          const file = createWriteStream(logoPath)
          response.pipe(file)
          file.on('finish', () => {
            file.close()
            resolve([breachDomain, `/images/logo_cache/${breachDomain.toLowerCase()}.ico`])
          })
          file.on('error', (error) => reject(error))
        }).on('error', (_error) => {
          resolve(null)
        })
      })
    })
  }))

  return new Map(logoMapElems.filter(elm => elm !== null))
}

/**
 * Get addresses and language from either subscribers or email_addresses fields:
 *
 * @param {*} recipient
 * @returns
 */
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

/**
 * Filter breaches that we would not like to show.
 *
 * @param {Array} breaches
 * @returns {Array} filteredBreaches
 */
function getFilteredBreaches (breaches) {
  return breaches.filter(breach => (
    !breach.IsRetired &&
    !breach.IsSpamList &&
    !breach.IsFabricated &&
    breach.IsVerified &&
    breach.Domain !== ''
  ))
}

/**
 * A range of hashes can be searched by passing the hash prefix in a GET request:
 * GET /breachedaccount/range/[hash prefix]
 *
 * @param {string} sha1 first 6 chars of email sha1
 * @param {Array} allBreaches
 * @param {boolean} includeSensitive
 * @param {boolean} filterBreaches
 * @returns
 */
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

function getBreachByName (allBreaches, breachName) {
  breachName = breachName.toLowerCase()
  if (RENAMED_BREACHES.includes(breachName)) {
    breachName = RENAMED_BREACHES_MAP[breachName]
  }
  const foundBreach = allBreaches.find(breach => breach.Name.toLowerCase() === breachName)
  return foundBreach
}

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
async function subscribeHash (sha1) {
  const sha1Prefix = sha1.slice(0, 6).toUpperCase()
  const path = '/range/subscribe'
  const options = {
    Method: 'POST',
    Body: { hashPrefix: sha1Prefix }
  }

  return await kAnonReq(path, options)
}

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
async function deleteSubscribedHash (sha1) {
  const sha1Prefix = sha1.slice(0, 6).toUpperCase()
  const path = `/range/${sha1Prefix}`
  const options = {
    Method: 'DELETE'
  }

  return await kAnonReq(path, options)
}

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
  deleteSubscribedHash
}
