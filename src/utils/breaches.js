import { getUserEmails } from '../db/tables/email_addresses.js'
import { getBreachesForEmail, filterBreaches } from './hibp.js'
import { getSha1 } from './fxa.js'
import { filterBreachDataTypes } from './breach-resolution.js'

/**
 * TODO: deprecate
 * Get all emails and breaches for a user via app.locals
 * This function will be replaced after 'breaches" table is created
 * and all records can be retrieved from the one table
 * @param {*} user
 * @param {*} allBreaches
 * @returns
 */
async function getAllEmailsAndBreaches (user, allBreaches) {
  const monitoredEmails = await getUserEmails(user.id)
  const verifiedEmails = []
  const unverifiedEmails = []
  verifiedEmails.push(await bundleVerifiedEmails({ user, email: user.primary_email, recordId: user.id, recordVerified: user.primary_verified, allBreaches }))
  for (const email of monitoredEmails) {
    if (email.verified) {
      verifiedEmails.push(await bundleVerifiedEmails({ user, email: email.email, recordId: email.id, recordVerified: email.verified, allBreaches }))
    } else {
      unverifiedEmails.push(email)
    }
  }

  // get new breaches since last shown
  for (const emailEntry of verifiedEmails) {
    const newBreachesForEmail = emailEntry.breaches.filter(breach => breach.AddedDate >= user.breaches_last_shown)

    for (const newBreachForEmail of newBreachesForEmail) {
      newBreachForEmail.NewBreach = true // add "NewBreach" property to the new breach.
      emailEntry.hasNewBreaches = newBreachesForEmail.length // add the number of new breaches to the email
    }
  }

  return { verifiedEmails, unverifiedEmails }
}

function addRecencyIndex (foundBreaches) {
  const annotatedBreaches = []
  // slice() the array to make a copy so before reversing so we don't
  // reverse foundBreaches in-place
  const oldestToNewestFoundBreaches = foundBreaches.slice().reverse()
  oldestToNewestFoundBreaches.forEach((annotatingBreach, index) => {
    const foundBreach = foundBreaches.find(foundBreach => foundBreach.Name === annotatingBreach.Name)
    annotatedBreaches.push(Object.assign({ recencyIndex: index }, foundBreach))
  })
  return annotatedBreaches.reverse()
}

async function bundleVerifiedEmails (options) {
  const { user, email, recordId, recordVerified, allBreaches } = options
  const lowerCaseEmailSha = getSha1(email.toLowerCase())

  // find all breaches relevant to the current email
  const foundBreaches = await getBreachesForEmail(lowerCaseEmailSha, allBreaches, true, false)

  // TODO: remove after migration MNTOR-978
  // adding index to breaches based on recency
  const foundBreachesWithRecency = addRecencyIndex(foundBreaches)

  // get v2 "breach_resolution" object
  const breachResolutionV2 = user.breach_resolution
    ? user.breach_resolution[email] ? user.breach_resolution[email] : {}
    : []

  const useBreachId = user.breach_resolution?.useBreachId

  for (const breach of foundBreachesWithRecency) {
    // if breach resolution json has `useBreachId` boolean, that means the migration has taken place
    // we will use breach id as the key. Otherwise, we fallback to using recency index for backwards compatibility
    if (useBreachId) {
      breach.IsResolved = breachResolutionV2[breach.Id]?.isResolved
      breach.ResolutionsChecked = breachResolutionV2[breach.Id]?.resolutionsChecked || []
    } else {
      // TODO: remove after MNTOR-978
      breach.IsResolved = breachResolutionV2[breach.recencyIndex]?.isResolved
      breach.ResolutionsChecked = breachResolutionV2[breach.recencyIndex]?.resolutionsChecked || []
    }

    // filter breach types based on the 13 types we care about
    breach.DataClasses = filterBreachDataTypes(breach.DataClasses)
  }

  // filter out irrelevant breaches based on HIBP
  const filteredAnnotatedFoundBreaches = filterBreaches(foundBreachesWithRecency)

  const emailEntry = {
    email,
    breaches: filteredAnnotatedFoundBreaches,
    primary: email === user.primary_email,
    id: recordId,
    verified: recordVerified
  }

  return emailEntry
}

export { getAllEmailsAndBreaches }
