/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
 * Take breach DataTypes array from HIBP and filter based on BreachDataTypes enums above
 *
 * @param {any[]} originalDataTypes breach DataTypes array from HIBP
 * @returns {any[]} filtered breach data types
 */
function filterBreachDataTypes (originalDataTypes) {
  const relevantDataTypes = Object.values(BreachDataTypes)
  return originalDataTypes.filter(d => relevantDataTypes.includes(d))
}

export { BreachDataTypes, filterBreachDataTypes }
