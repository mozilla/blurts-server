/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from './fluent.js'

/**
 * Equivalent of Typescript "enum"
 * These enum types map to HIBP's breach data types, defined in HIBP's API
 * Always reference enum instead of strings to avoid spelling error / typos (ie. BreachDataTypes.Passwords)
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
 * @type { Record<keyof BreachDataTypes, { priority: number, header: string, body?: string, applicableCountryCodes?: string[] }> }
 */
const breachResolutionDataTypes = {
  [BreachDataTypes.Passwords]: {
    priority: 1,
    header: 'breach-checklist-pw-header-3',
    body: 'breach-checklist-pw-body-2'
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
    header: 'breach-checklist-sq-header-3',
    body: 'breach-checklist-sq-body'
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
 * @param {Array} userBreachData contains monitored verified emails array. Each email may contain a breaches array
 * @param {Partial<{ countryCode: string }>} options
 * @returns {*} void
 */
function appendBreachResolutionChecklist (userBreachData, options = {}) {
  const { verifiedEmails } = userBreachData
  for (const { breaches } of verifiedEmails) {
    breaches.forEach(b => {
      const dataClasses = b.DataClasses
      const args = {
        companyName: b.Name,
        breachedCompanyLink: `<a href="https://${b.Domain}" target="_blank">${b.Domain}</a>`,
        firefoxRelayLink: `<a href="https://relay.firefox.com/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">${getMessage('breach-checklist-link-firefox-relay')}</a>`,
        passwordManagerLink: `<a href="https://www.mozilla.org/firefox/features/password-manager/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">${getMessage('breach-checklist-link-password-manager')}</a>`,
        mozillaVpnLink: `<a href="https://www.mozilla.org/products/vpn/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">${getMessage('breach-checklist-link-mozilla-vpn')}</a>`,
        equifaxLink: '<a href="https://www.equifax.com/personal/credit-report-services/credit-freeze/" target="_blank">Equifax</a>',
        experianLink: '<a href="https://www.experian.com/freeze/center.html" target="_blank">Experian</a>',
        transUnionLink: '<a href="https://www.transunion.com/credit-freeze" target="_blank">TransUnion</a>'
      }
      b.breachChecklist = getResolutionRecsPerBreach(dataClasses, args, { ...options, hideBreachLink: b.Domain.length <= 0 })
    })
  }
}

/**
 * Get a subset of the breach resolution data types map
 * based on the array of datatypes leaked during a breach
 *
 * @param {Array} dataTypes datatypes leaked during the breach
 * @param {object} args contains necessary variables for the fluent file
 *  - companyName
 *  - breachedCompanyUrl
 * @param {Partial<{ countryCode: string, hideBreachLink: boolean }>} options
 * @returns {Map} map of relevant breach resolution recommendations
 */
function getResolutionRecsPerBreach (dataTypes, args, options = {}) {
  const filteredBreachRecs = {}

  // filter breachResolutionDataTypes based on relevant data types passed in
  for (const [key, value] of Object.entries(breachResolutionDataTypes)) {
    if (
      dataTypes.includes(key) &&
      // Hide the security question or password resolution if we can't link to the breached site:
      (![BreachDataTypes.Passwords, BreachDataTypes.SecurityQuestions].includes(key) || !options.hideBreachLink) &&
      // Hide resolutions that apply to other countries than the user's:
      (!options.countryCode || !Array.isArray(value.applicableCountryCodes) || value.applicableCountryCodes.includes(options.countryCode.toLowerCase()))
    ) {
      filteredBreachRecs[key] = getRecommendationFromResolution(value, args)
    }
  }

  // If we did not have any recommendations, add a generic recommendation:
  if (Object.keys(filteredBreachRecs).length === 0) {
    filteredBreachRecs[BreachDataTypes.General] = getRecommendationFromResolution(breachResolutionDataTypes[BreachDataTypes.General], args)
  }

  // loop through the breach recs
  return filteredBreachRecs
}

// find fluent text based on fluent ids
function getRecommendationFromResolution (resolution, args) {
  let { header, body, priority } = resolution
  header = header ? getMessage(header, args) : ''
  body = body ? getMessage(body, args) : ''
  return { header, body, priority }
}

/**
 * Take breach DataTypes array from HIBP and filter based on BreachDataTypes enums above
 *
 * @param {Array} originalDataTypes breach DataTypes array from HIBP
 * @returns {Array} filtered breach data types
 */
function filterBreachDataTypes (originalDataTypes) {
  const relevantDataTypes = Object.values(BreachDataTypes)
  return originalDataTypes.filter(d => relevantDataTypes.includes(d))
}

export { BreachDataTypes, appendBreachResolutionChecklist, filterBreachDataTypes }
