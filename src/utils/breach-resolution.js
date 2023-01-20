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
 */
const breachResolutionDataTypes = {
  [BreachDataTypes.Passwords]: {
    priority: 1,
    header: 'breach-checklist-pw-header',
    body: 'breach-checklist-pw-body'
  },
  [BreachDataTypes.Email]: {
    priority: 2,
    header: 'breach-checklist-email-header',
    body: 'breach-checklist-email-body'
  },
  [BreachDataTypes.SSN]: {
    priority: 3,
    header: 'breach-checklist-ssn-header',
    body: 'breach-checklist-ssn-body'
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
    header: 'breach-checklist-ip-header',
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
    header: 'breach-checklist-phone-header'
  },
  [BreachDataTypes.SecurityQuestions]: {
    priority: 11,
    header: 'breach-checklist-sq-header',
    body: 'breach-checklist-sq-body'
  },
  [BreachDataTypes.HistoricalPasswords]: {
    priority: 12,
    header: 'breach-checklist-hp-header',
    body: 'breach-checklist-hp-body'
  },
  [BreachDataTypes.General]: {
    priority: 13,
    header: 'breach-checklist-general-header'
  }
}

/**
 * Append a field "breachChecklist" to the breaches array of each verified emails
 * The checklist serves the UI with relevant recommendations based on the array of datatypes leaked during a breach.
 * @param {Array} userBreachData contains monitored verified emails array. Each email may contain a breaches array
 * @returns {*} void
 */
function appendBreachResolutionChecklist (userBreachData) {
  const { verifiedEmails } = userBreachData
  for (const { breaches } of verifiedEmails) {
    breaches.forEach(b => {
      const dataClasses = b.dataClasses
      const args = {
        companyName: b.name,
        breachedCompanyUrl: `https://${b.domain}`
      }
      b.breachChecklist = getResolutionRecsPerBreach(dataClasses, args)
    })
  }
}

/**
 * Get a subset of the breach resolution data types map
 * based on the array of datatypes leaked during a breach
 * @param {Array} dataTypes datatypes leaked during the breach
 * @param {Object} args contains necessary variables for the fluent file
 *  - companyName
 *  - breachedCompanyUrl
 * @returns {Map} map of relevant breach resolution recommendations
 */
function getResolutionRecsPerBreach (dataTypes, args) {
  const filteredBreachRecs = {}

  // if datatypes is empty or null, return general only.
  if (!dataTypes?.length) dataTypes = [BreachDataTypes.General]

  // filter breachResolutionDataTypes based on relevant data types passed in
  for (const [key, value] of Object.entries(breachResolutionDataTypes)) {
    if (dataTypes.includes(key)) {
      // find fluent text based on fluent ids
      let { header, body, priority } = value
      header = header ? getMessage(header, args) : ''
      body = body ? getMessage(body, args) : ''
      filteredBreachRecs[key] = { header, body, priority }
    }
  }

  // loop through the breach recs
  return filteredBreachRecs
}

/**
 * Take breach DataTypes array from HIBP and filter based on BreachDataTypes enums above
 * @param {array} originalDataTypes breach DataTypes array from HIBP
 * @returns {array} filtered breach data types
 */
function filterBreachDataTypes (originalDataTypes) {
  const relevantDataTypes = Object.values(BreachDataTypes)
  return originalDataTypes.filter(d => relevantDataTypes.includes(d))
}

export { BreachDataTypes, appendBreachResolutionChecklist, filterBreachDataTypes }
