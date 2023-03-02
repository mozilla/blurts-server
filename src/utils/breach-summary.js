/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachDataTypes } from './breach-resolution.js'

/**
 * Returns a breach summary JSON that contains the following attributes
 *  - monitoredEmails: the number of emails monitored
 *  - numBreaches: resolved, unresolved, total number of breaches
 *  - breachedDataTypes: total number of breaches for passwords, emails, ips, or others
 *
 * @param {*} verifiedEmails verified emails array from allBreaches object
 * @returns breach summary
 */

function breachSummary (verifiedEmails) {
  const breachSummary = {
    monitoredEmails: {
      count: 0
    },
    numBreaches: {
      count: 0,
      numResolved: 0,
      numUnresolved: 0
    }
  }

  if (!verifiedEmails) return breachSummary

  // combine the breaches for each account, breach duplicates are ok
  // since the user may have multiple accounts with different emails
  verifiedEmails.forEach(email => {
    email.breaches.forEach(breach => {
      if (breach.IsResolved) {
        breachSummary.numBreaches.numResolved++
      }
    })

    // update breaches count
    breachSummary.numBreaches.count += email.breaches.length
  })

  // total number of verified emails being monitored
  breachSummary.monitoredEmails.count = verifiedEmails.length

  // calculate unresolved breaches count
  breachSummary.numBreaches.numUnresolved = breachSummary.numBreaches.count - breachSummary.numBreaches.numResolved

  return breachSummary
}

function breachedDataTypes (verifiedEmails) {
  const breachedDataTypes = {}
  if (!verifiedEmails) return breachedDataTypes

  verifiedEmails.forEach(email => {
    breachedDataTypes[email.email] = {
      [BreachDataTypes.Passwords]: 0,
      [BreachDataTypes.Email]: 0,
      [BreachDataTypes.IP]: 0,
      other: 0
    }

    email.breaches.forEach(breach => {
      let isOther = true

      if (breach.DataClasses.includes(BreachDataTypes.Passwords)) {
        breachedDataTypes[email.email][BreachDataTypes.Passwords]++
        isOther = false
      }
      if (breach.DataClasses.includes(BreachDataTypes.Email)) {
        breachedDataTypes[email.email][BreachDataTypes.Email]++
        isOther = false
      }
      if (breach.DataClasses.includes(BreachDataTypes.IP)) {
        breachedDataTypes[email.email][BreachDataTypes.IP]++
        isOther = false
      }

      if (isOther) breachedDataTypes[email.email].other++
    })
  })

  return breachedDataTypes
}

export { breachSummary, breachedDataTypes }
