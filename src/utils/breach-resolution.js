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
 * Get a subset of the breach resolution data types map
 * based on the array of datatypes leaked during a breach
 * @param {Array} dataTypes datatypes leaked during the breach
 * @returns {Map} map of relevant breach resolution recommendations
 */
function getBreachResolutionRecs (dataTypes, args) {
  let filteredBreachRecs = {}

  // if datatypes is empty or null, return general only.
  if (!dataTypes || dataTypes.length < 1) {
    filteredBreachRecs = breachResolutionDataTypes[BreachDataTypes.General]
  }

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

export { BreachDataTypes, getBreachResolutionRecs, filterBreachDataTypes }
