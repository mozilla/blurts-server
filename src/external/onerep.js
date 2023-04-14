/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'
import mozlog from '../utils/log.js'
const log = mozlog('external.onerep')

/**
 * @param {string} path
 * @param {Parameters<typeof fetch>[1]} [options]
 */
async function onerepFetch (path, options = {}) {
  const url = 'https://api.onerep.com' + path
  const headers = new Headers(options.headers)
  headers.set('Authorization', `Basic ${Buffer.from(`${AppConstants.ONEREP_API_KEY}:`).toString('base64')}`)
  return fetch(url, { ...options, headers })
}

/**
 * @typedef {object} OneRepProfile
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} city
 * @property {import('../utils/states').StateAbbr} state
 * @property {import('../utils/parse.js').ISO8601DateString} [birth_date]
 * @property {import('../utils/parse.js').E164PhoneNumberString} [phone_number]
 */

/**
 * @param {OneRepProfile} profileData
 * @returns {Promise<number>} Profile ID
 */
export async function createProfile (profileData) {
  /**
   * See https://docs.onerep.com/#operation/createProfile
   *
   * @type {any}
   */
  const requestBody = {
    first_name: profileData.first_name,
    last_name: profileData.last_name,
    addresses: [
      {
        state: profileData.state,
        city: profileData.city
      }
    ]
  }
  if (profileData.birth_date) {
    requestBody.birth_date = profileData.birth_date
  }
  if (profileData.phone_number) {
    requestBody.phone_numbers = [
      { number: profileData.phone_number }
    ]
  }
  const response = await onerepFetch('/profiles', {
    method: 'POST',
    body: JSON.stringify(requestBody)
  })
  if (!response.ok) {
    log.info(`Failed to create OneRep profile: [${response.status}] [${response.statusText}]`)
    throw new Error(`Failed to create OneRep profile: [${response.status}] [${response.statusText}]`)
  }
  /**
   * See https://docs.onerep.com/#operation/createProfile
   *
   * @type {{
   *   id: number,
   *   status: 'active' | 'inactive',
   *   created_at: import('../utils/parse.js').ISO8601DateString,
   *   updated_at: import('../utils/parse.js').ISO8601DateString,
   *   url: string,
   * }}
   */
  const savedProfile = await response.json()
  return savedProfile.id
}

/**
 * @param {number} profileId
 * @returns {Promise<void>}
 */
export async function activateProfile (profileId) {
  /**
   * See https://docs.onerep.com/#operation/activateProfile
   *
   * @type {any}
   */
  const response = await onerepFetch(`/profiles/${profileId}/activate`, {
    method: 'PUT'
  })
  if (!response.ok) {
    log.info(`Failed to activate OneRep profile: [${response.status}] [${response.statusText}]`)
    throw new Error(`Failed to activate OneRep profile: [${response.status}] [${response.statusText}]`)
  }
}

/**
 * @param {number} profileId
 * @returns {Promise<void>}
 */
export async function optoutProfile (profileId) {
  /**
   * See https://docs.onerep.com/#operation/optoutProfile
   */
  const response = await onerepFetch(`/profiles/${profileId}/optout`, {
    method: 'POST'
  })
  if (!response.ok) {
    log.info(`Failed to opt-out OneRep profile: [${response.status}] [${response.statusText}]`)
    throw new Error(`Failed to opt-out OneRep profile: [${response.status}] [${response.statusText}]`)
  }
}

/**
 * @typedef {object} CreateScanResponse
 * @property {number} id
 * @property {number} profile_id
 * @property {'in_progress'} status
 * @property {'manual'} reason
 * @property {import('../utils/parse.js').ISO8601DateString} created_at
 * @property {import('../utils/parse.js').ISO8601DateString} updated_at
 */

/**
 * @param {number} profileId
 * @returns {Promise<CreateScanResponse>}
 */
export async function createScan (profileId) {
  /**
   * See https://docs.onerep.com/#operation/createScan
   */
  const response = await onerepFetch(`/profiles/${profileId}/scans`, {
    method: 'POST'
  })
  if (!response.ok) {
    log.info(`Failed to create a scan: [${response.status}] [${response.statusText}]`)
    throw new Error(`Failed to create a scan: [${response.status}] [${response.statusText}]`)
  }
  return response.json()
}

/**
 * @typedef {{ current_page: number; from: number; last_page: number; per_page: number; to: number; total: number; }} OneRepMeta
 * @typedef {object} Scan
 * @property {number} id
 * @property {number} profile_id
 * @property {'in_progress' | 'finished'} status
 * @property {'initial' | 'monitoring' | 'manual'} reason
 * @typedef {{ meta: OneRepMeta, data: Scan[] }} ListScansResponse
 */

/**
 * @param {number} profileId
 * @param {Partial<{ page: number; per_page: number }>} [options]
 * @returns {Promise<ListScansResponse>}
 */
export async function listScans (profileId, options = {}) {
  const queryParams = new URLSearchParams()
  if (options.page) {
    queryParams.set('page', options.page.toString())
  }
  if (options.per_page) {
    queryParams.set('per_page', options.per_page.toString())
  }
  /**
   * See https://docs.onerep.com/#operation/getScans
   *
   * @type {any}
   */
  const response = await onerepFetch(`/profiles/${profileId}/scans?` + queryParams.toString(), {
    method: 'GET'
  })
  if (!response.ok) {
    log.info(`Failed to fetch scans: [${response.status}] [${response.statusText}]`)
    throw new Error(`Failed to fetch scans: [${response.status}] [${response.statusText}]`)
  }
  return response.json()
}

/**
 * @typedef {object} ScanResult
 * @property {number} id
 * @property {number} profile_id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} middle_name
 * @property {`${number}`} age
 * @property {Array<{ city: string; state: string; street: string; zip: string; }>} addresses
 * @property {string[]} phones
 * @property {string[]} emails
 * @property {string} data_broker
 * @property {import('../utils/parse.js').ISO8601DateString} created_at
 * @property {import('../utils/parse.js').ISO8601DateString} updated_at
 * @typedef {{ meta: OneRepMeta, data: ScanResult[] }} ListScanResultsResponse
 */

/**
 * @typedef {'new' | 'optout_in_progress' | 'waiting_for_verification' | 'removed'} RemovalStatus
 * @param {number} profileId
 * @param {Partial<{ page: number; per_page: number; status: RemovalStatus }>} [options]
 * @returns {Promise<ListScanResultsResponse>}
 */
export async function listScanResults (profileId, options = {}) {
  const queryParams = new URLSearchParams({ 'profile_id[]': profileId.toString() })
  if (options.page) {
    queryParams.set('page', options.page.toString())
  }
  if (options.per_page) {
    queryParams.set('per_page', options.per_page.toString())
  }
  if (options.status) {
    const statuses = Array.isArray(options.status) ? options.status : [options.status]
    statuses.forEach(status => {
      queryParams.append('status[]', status)
    })
  }
  /**
   * See https://docs.onerep.com/#operation/getScanResults
   *
   * @type {any}
   */
  const response = await onerepFetch('/scan-results/?' + queryParams.toString(), {
    method: 'GET'
  })
  if (!response.ok) {
    log.info(`Failed to fetch scan results: [${response.status}] [${response.statusText}]`)
    throw new Error(`Failed to fetch scan results: [${response.status}] [${response.statusText}]`)
  }
  return response.json()
}
