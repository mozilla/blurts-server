import mozlog from './log.js'
import AppConstants from '../app-constants.js'
import { fluentError } from './fluent.js'
import { getAllBreaches } from '../db/tables/breaches.js'
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
          throw fluentError('error-hibp-throttled')
        } else {
          tryCount++
          await new Promise(resolve => setTimeout(resolve, HIBP_THROTTLE_DELAY * tryCount))
          return await _throttledFetch(url, reqOptions, tryCount)
        }
      default:
        throw new Error(`bad response: ${response.status}`)
    }
  } catch (err) {
    log.error('_throttledFetch', { err })
    throw fluentError('error-hibp-connect')
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

function matchFluentID (dataCategory) {
  return dataCategory.toLowerCase()
    .replace(/[^-a-z0-9]/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/(^-|-$)/g, '')
}

function formatDataClassesArray (dataCategories) {
  const formattedArray = []
  dataCategories.forEach(category => {
    formattedArray.push(matchFluentID(category))
  })
  return formattedArray
}

/**
 * Get all breaches from the database table "breaches",
 * sanitize it, and return a javascript array
 * @returns formatted all breaches array
 */
async function getAllBreachesFromDb () {
  const dbBreaches = await getAllBreaches()

  // TODO: we can do some filtering here for the most commonly used fields
  // TODO: change field names to camel case
  return dbBreaches.map(breach => ({
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
    }
    app.locals.breaches = breaches
    app.locals.breachesLoadedDateTime = Date.now()
    app.locals.latestBreach = getLatestBreach(breaches)
    app.locals.mostRecentBreachDateTime = app.locals.latestBreach.AddedDate
  } catch (error) {
    throw fluentError('error-hibp-load-breaches')
  }
  log.info('done-loading-breaches', 'great success 👍')
}
/**
A range of hashes can be searched by passing the hash prefix in a GET request:
GET /breachedaccount/range/[hash prefix]

 * @param {string} sha1 first 6 chars of email sha1
 * @param {*} allBreaches
 * @param {*} includeSensitive
 * @param {*} filterBreaches
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
        foundBreaches = filterBreaches(foundBreaches)
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

function filterBreaches (breaches) {
  return breaches.filter(
    breach => !breach.IsRetired &&
                !breach.IsSpamList &&
                !breach.IsFabricated &&
                breach.IsVerified &&
                breach.Domain !== ''
  )
}

function getLatestBreach (breaches) {
  let latestBreach = {}
  let latestBreachDateTime = new Date(0)
  for (const breach of breaches) {
    if (breach.IsSensitive) {
      continue
    }
    const breachAddedDate = new Date(breach.AddedDate)
    if (breachAddedDate > latestBreachDateTime) {
      latestBreachDateTime = breachAddedDate
      latestBreach = breach
    }
  }
  return latestBreach
}
/**
A range can be subscribed for callbacks with the following request:
POST /range/subscribe
{
  hashPrefix:"[hash prefix]"
}
There are two possible response codes that will be returned:
1. HTTP 201: New range subscription has been created
2. HTTP 200: Range subscription already exists
 * @param {string} sha1 first 6 chars of sha1 of the email being subscribed
 * @returns 200 or 201 response codes
 */
async function subscribeHash (sha1) {
  const sha1Prefix = sha1.slice(0, 6).toUpperCase()
  const path = '/range/subscribe'
  const options = {
    method: 'POST',
    json: { hashPrefix: sha1Prefix }
  }

  return await kAnonReq(path, options)
}

export {
  req,
  kAnonReq,
  matchFluentID,
  formatDataClassesArray,
  loadBreachesIntoApp,
  getBreachesForEmail,
  getBreachByName,
  getAllBreachesFromDb,
  filterBreaches,
  getLatestBreach,
  subscribeHash
}
