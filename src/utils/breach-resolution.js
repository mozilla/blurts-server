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
  Bank: 'bank-account-numbers',
  PIN: 'pins',
  IP: 'ip-addresses',
  Address: 'physical-addresses',
  DOB: 'dates-of-birth',
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
  [BreachDataTypes.Password]: {
    priority: 1,
    header: '',
    body: ''
  }
}

/**
 * Get a subset of the breach resolution data types map
 * based on the array of datatypes leaked during a breach
 * @param {Array} dataTypes datatypes leaked during the breach
 * @returns {Map} map of relevant breach resolution recommendations
 */
function getBreachResolutionRecs (dataTypes) {
  // TODO: filter based on dataTypes array
  // if datatypes is empty or null, return general only.
  return breachResolutionDataTypes
}

export { BreachDataTypes, getBreachResolutionRecs }
