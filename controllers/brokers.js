'use strict'

const DB = require('../db/DB')
const OneRep = require('../lib/onerep')

const validStates = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  DC: 'District of Columbia',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
  AS: 'American Samoa',
  GU: 'Guam',
  MP: 'Northern Mariana Islands',
  PR: 'Puerto Rico',
  VI: 'Virgin Islands',
  UM: 'United States Minor Outlying Islands',
  MH: 'Marshall Islands',
  FM: 'Micronesia',
  PW: 'Palau',
  AA: 'U.S. Armed Forces Americas',
  AE: 'U.S. Armed Forces Europe',
  AP: 'U.S. Armed Forces Pacific'
}

async function get (req, res) {
  const profileData = req.user.onerep_profile_id ? await OneRep.getProfile(req.user) : null
  const scans = profileData ? await OneRep.listScans(req.user) : []
  const scanResults = scans.length > 0 ? await OneRep.getScanResults(req.user) : []
  res.render('brokers', {
    csrfToken: req.csrfToken(),
    profileData: expandDatesInProfileData(profileData),
    email: profileData?.email ?? req.user?.primary_email ?? req.user?.fxa_profile_json?.email,
    scans,
    scanResults: expandDatesInScanResults(scanResults.data),
    scanStats: {
      newCount: (scanResults?.data ?? []).filter(scanResult => scanResult.status === 'new').length
    },
    validStates
  })
}

async function post (req, res) {
  const {
    first_name,
    last_name,
    city,
    state,
    birth_date,
    email
  } = req.body
  const birth_date_parts = birth_date.split('-').map(part => Number.parseInt(part, 10))
  // Whereas OneRep expects an ISO 8601 string,
  // the time component is `00:00:00.000Z` in their example.
  // Thus, presumably the user's time zone is irrelevant.
  const birth_date_obj = new Date(Date.UTC(birth_date_parts[0], birth_date_parts[1] - 1, birth_date_parts[2]))
  const profileData = {
    first_name,
    last_name,
    birth_date: (birth_date_parts.length === 3 && birth_date_parts.every(part => !Number.isNaN(part)))
      ? birth_date_obj.toISOString().split('T')[0]
      : undefined,
    emails: [
      { email }
    ],
    addresses: [
      { city, state }
    ]
  }
  await OneRep.createProfile(req.user, profileData)
  const updatedUser = await DB.getSubscriberById(req.user.id)
  await OneRep.createScan(updatedUser)
  res.redirect('/brokers')
}

/**
 * @typedef {Object} ScanResult
 * @property {number} id
 * @property {number} profile_id
 * @property {number} scan_id
 * @property {'new' | 'optout_in_progress' | 'waiting_for_verification' | 'removed'} status
 * @property {string | null} first_name
 * @property {string | null} middle_name
 * @property {string | null} last_name
 * @property {`${number}` | null} age
 * @property {Array<{ zip: number, street: string, city: string }>} addresses
 * @property {string[]} phones
 * @property {string[]} emails
 * @property {string[]} relatives
 * @property {string} link
 * @property {string} data_broker
 * @property {number} data_broker_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * I couldn't figure out how to access Handlebars helpers in the .hbs file, so I'm just applying them here:
 *
 * @param {ScanResult[] | undefined} scanResults Scan results returned by the OneRep API
 * @returns {ScanResult[]} The input scan results, but with created_at and updated_at transformed into human-readable dates
 */
function expandDatesInScanResults (scanResults = []) {
  return scanResults.map(scanResult => ({
    ...scanResult,
    created_at: formatIsoDatetimeString(scanResult.created_at),
    updated_at: formatIsoDatetimeString(scanResult.updated_at)
  }))
}

/**
 * @typedef {Object} ProfileData
 * @property {number} id
 * @property {string | null} first_name
 * @property {string | null} middle_name
 * @property {string | null} last_name
 * @property {string | null} birth_date
 * @property {string[]} first_names
 * @property {string[]} middle_names
 * @property {string[]} last_names
 * @property {string[]} phone_numbers
 * @property {string[]} emails
 * @property {Array<{
 *  id: number,
 *  profile_id: number,
 *  state: keyof validStates,
 *  city: string,
 *  address_line: null | string,
 *  zip: null | string,
 *  created_at: string,
 *  updated_at: string,
 *  url: string
 * }>} addresses
 * @property {'inactive' | 'active'} status
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * I couldn't figure out how to access Handlebars helpers in the .hbs file, so I'm just applying them here:
 *
 * @param {ProfileData | null} profileData Profile data returned by the OneRep API
 * @returns {ProfileData} The input profile data, but with created_at and updated_at transformed into human-readable dates
 */
function expandDatesInProfileData (profileData) {
  if (profileData === null) {
    return null
  }
  return ({
    ...profileData,
    created_at: formatIsoDatetimeString(profileData.created_at),
    updated_at: formatIsoDatetimeString(profileData.updated_at),
    birth_date: formatIsoDateString(profileData.birth_date)
  })
}

function formatIsoDatetimeString (dateString) {
  return (new Date(dateString)).toString()
}
function formatIsoDateString (dateString) {
  return (new Date(dateString)).toDateString()
}

async function onerepEventWebhook (req, res) {
  const { id, type, data } = req.body
  await OneRep.recordEvent(id, type, data.object)
  if (type === 'scan.completed') {
    // When a user's scan is compelted, start the optout/removal
    const user = await DB.getSubscriberByOneRepProfileID(data.object.profile_id)
    const oneRepProfile = await OneRep.getProfile(user)
    if (oneRepProfile.status !== 'active') {
      await OneRep.activate(user)
    }
    await OneRep.optout(user)
  }
  return res.json('OK')
}

module.exports = {
  get,
  post,
  onerepEventWebhook
}
