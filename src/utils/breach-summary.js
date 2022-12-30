import { BreachDataTypes } from './breach-resolution'

/**
 * Returns a breach summary JSON that contains the following attributes
 *  - monitoredEmails: the number of emails monitored
 *  - numBreaches: resolved, unresolved, total number of breaches
 *  - breachedDataTypes: total number of breaches for passwords, emails, ips, or others
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
    },
    breachedDataTypes: {
      [BreachDataTypes.Passwords]: 0,
      [BreachDataTypes.Email]: 0,
      [BreachDataTypes.IP]: 0,
      other: 0
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

      if (breach.DataClasses.includes(BreachDataTypes.Passwords)) {
        breachSummary.breachedDataTypes[BreachDataTypes.Passwords]++
      } else if (breach.DataClasses.includes(BreachDataTypes.Email)) {
        breachSummary.breachedDataTypes[BreachDataTypes.Email]++
      } else if (breach.DataClasses.includes(BreachDataTypes.IP)) {
        breachSummary.breachedDataTypes[BreachDataTypes.IP]++
      } else {
        breachSummary.breachedDataTypes.other++
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

export { breachSummary }
