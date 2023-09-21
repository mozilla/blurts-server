/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'
import { getMessage } from './fluent.js'

/**
 * Equivalent of Typescript "enum"
 * These enum types map to HIBP's breach data types, defined in HIBP's API
 * Always reference enum instead of strings to avoid spelling error / typos (ie. BreachDataTypes.Passwords)
 *
 * @deprecated Use the object with the same name from /src/app/functions/universal/breach.ts instead.
 */
const BreachDataTypes = {
  Passwords: 'passwords',
  Email: 'email-addresses',
  SSN: 'social-security-numbers',
  CreditCard: 'partial-credit-card-data',
  BankAccount: 'bank-account-numbers',
  PIN: 'pins',
  IP: 'ip-addresses',
  Address: 'physical-addresses',
  DoB: 'dates-of-birth',
  Phone: 'phone-numbers',
  SecurityQuestions: 'security-questions-and-answers',
  HistoricalPasswords: 'historical-passwords',
  General: 'general'
}

/**
 * TODO: Map from google doc: https://docs.google.com/document/d/1KoItFsTYVIBInIG2YmA7wSxkKS4vti_X0A0td_yaHVM/edit#
 * Hardcoded map of breach resolution data types
 *
 * @type { Partial<Record<keyof BreachDataTypes, { priority: number, header: string, body?: string, applicableCountryCodes?: string[] }>> }
 */
const breachResolutionDataTypes = {
  [BreachDataTypes.Passwords]: {
    priority: 1,
    header: 'breach-checklist-pw-header-text',
    body: 'breach-checklist-pw-body-text'
  },
  [BreachDataTypes.Email]: {
    priority: 2,
    header: 'breach-checklist-email-header-2',
    body: 'breach-checklist-email-body'
  },
  [BreachDataTypes.SSN]: {
    priority: 3,
    header: 'breach-checklist-ssn-header',
    body: 'breach-checklist-ssn-body-2',
    // The resolution involves American companies, and thus does not apply in other countries:
    applicableCountryCodes: ['us']
  },
  [BreachDataTypes.CreditCard]: {
    priority: 4,
    header: 'breach-checklist-cc-header',
    body: 'breach-checklist-cc-body'
  },
  [BreachDataTypes.BankAccount]: {
    priority: 5,
    header: 'breach-checklist-bank-header',
    body: 'breach-checklist-bank-body'
  },
  [BreachDataTypes.PIN]: {
    priority: 6,
    header: 'breach-checklist-pin-header',
    body: 'breach-checklist-pin-body'
  },
  [BreachDataTypes.IP]: {
    priority: 7,
    header: 'breach-checklist-ip-header-2',
    body: 'breach-checklist-ip-body'
  },
  [BreachDataTypes.Address]: {
    priority: 8,
    header: 'breach-checklist-address-header',
    body: 'breach-checklist-address-body'
  },
  [BreachDataTypes.DoB]: {
    priority: 9,
    header: 'breach-checklist-dob-header',
    body: 'breach-checklist-dob-body'
  },
  [BreachDataTypes.Phone]: {
    priority: 10,
    header: 'breach-checklist-phone-header-2'
  },
  [BreachDataTypes.SecurityQuestions]: {
    priority: 11,
    header: 'breach-checklist-sq-header-text',
    body: 'breach-checklist-sq-body-text'
  },
  [BreachDataTypes.HistoricalPasswords]: {
    priority: 12,
    header: 'breach-checklist-hp-header',
    body: 'breach-checklist-hp-body-2'
  },
  [BreachDataTypes.General]: {
    priority: 13,
    header: 'breach-checklist-general-header'
  }
}

/**
 * Append a field "breachChecklist" to the breaches array of each verified emails
 * The checklist serves the UI with relevant recommendations based on the array of datatypes leaked during a breach.
 *
 * @param {any} userBreachData contains monitored verified emails array. Each email may contain a breaches array
 * @param {Partial<{ countryCode: string }>} options
 * @returns {*} void
 */
function appendBreachResolutionChecklist (userBreachData, options = {}) {
  const { verifiedEmails } = userBreachData

  for (const { breaches } of verifiedEmails) {
    breaches.forEach((/** @type {any} */ b) => {
      // TODO: Add unit test when changing this code:
      /* c8 ignore next 3 */
      const dataClasses = b.DataClasses
      const blockList = (AppConstants.HIBP_BREACH_DOMAIN_BLOCKLIST ?? '').split(',')
      const showLink = b.Domain && !blockList.includes(b.Domain)

      const args = {
        companyName: b.Name,
        breachedCompanyLink: showLink ? `https://${b.Domain}` : '',
        firefoxRelayLink: `<a href="https://relay.firefox.com/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">${getMessage('breach-checklist-link-firefox-relay')}</a>`,
        passwordManagerLink: `<a href="https://www.mozilla.org/firefox/features/password-manager/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">${getMessage('breach-checklist-link-password-manager')}</a>`,
        mozillaVpnLink: `<a href="https://www.mozilla.org/products/vpn/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">${getMessage('breach-checklist-link-mozilla-vpn')}</a>`,
        equifaxLink: '<a href="https://www.equifax.com/personal/credit-report-services/credit-freeze/" target="_blank">Equifax</a>',
        experianLink: '<a href="https://www.experian.com/freeze/center.html" target="_blank">Experian</a>',
        transUnionLink: '<a href="https://www.transunion.com/credit-freeze" target="_blank">TransUnion</a>'
      }
      b.breachChecklist = getResolutionRecsPerBreach(dataClasses, args, options)
    })
  }
}

/**
 * Get a subset of the breach resolution data types map
 * based on the array of datatypes leaked during a breach
 *
 * @param {any} dataTypes datatypes leaked during the breach
 * @param {object} args contains necessary variables for the fluent file
 *  - companyName
 *  - breachedCompanyUrl
 * @param {Partial<{ countryCode: string }>} options
 * @returns {Record<string, any>} map of relevant breach resolution recommendations
 */
function getResolutionRecsPerBreach (dataTypes, args, options = {}) {
  /** @type {Record<string, any>} */
  const filteredBreachRecs = {}

  // filter breachResolutionDataTypes based on relevant data types passed in
  for (const resolution of Object.entries(breachResolutionDataTypes)) {
    const [key, value] = resolution
    if (
      dataTypes.includes(key) &&
      // Hide resolutions that apply to other countries than the user's:
      (!options.countryCode || !Array.isArray(value.applicableCountryCodes) || value.applicableCountryCodes.includes(options.countryCode.toLowerCase()))
    ) {
      filteredBreachRecs[key] = getRecommendationFromResolution(resolution, args)
    }
  }

  // If we did not have any recommendations, add a generic recommendation:
  if (Object.keys(filteredBreachRecs).length === 0) {
    const resolutionTypeGeneral = BreachDataTypes.General
    filteredBreachRecs[resolutionTypeGeneral] = getRecommendationFromResolution(
      [
        resolutionTypeGeneral,
        // @ts-ignore This should resolve to a correct data type
        breachResolutionDataTypes[resolutionTypeGeneral]
      ],
      args
    )
  }

  // loop through the breach recs
  return filteredBreachRecs
}

/**
 * Get the fluent string for the body
 *
 * @param {string} body for the fluent body string
 * @param {any} args
 * @returns {string} body string
 */
function getBodyMessage (body, args) {
  const { stringArgs } = args

  const companyLink = stringArgs.breachedCompanyLink
  return getMessage(body, stringArgs)
    .replace(
      '<breached-company-link>',
      companyLink ? `<a href="${companyLink}" target="_blank">` : ''
    )
    .replace(
      '</breached-company-link>',
      companyLink ? '</a>' : ''
    )
}

// find fluent text based on fluent ids
/**
 * @param {any[]} resolution
 * @param {any} args
 */
function getRecommendationFromResolution (resolution, args) {
  const [resolutionType, resolutionContent] = resolution
  let { header, body, priority } = resolutionContent

  // TODO: Add unit test when changing this code:
  /* c8 ignore next */
  header = header ? getMessage(header, args) : ''
  body = body
    ? getBodyMessage(body, { resolutionType, stringArgs: args })
    : ''
  return { header, body, priority }
}

/**
 * Take breach DataTypes array from HIBP and filter based on BreachDataTypes enums above
 *
 * @param {any[]} originalDataTypes breach DataTypes array from HIBP
 * @returns {any[]} filtered breach data types
 */
function filterBreachDataTypes (originalDataTypes) {
  const relevantDataTypes = Object.values(BreachDataTypes)
  return originalDataTypes.filter(d => relevantDataTypes.includes(d))
}

export { BreachDataTypes, appendBreachResolutionChecklist, filterBreachDataTypes }
