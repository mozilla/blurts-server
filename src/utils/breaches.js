/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getUserEmails } from '../db/tables/emailAddresses.js'
import { getBreachesForEmail, getFilteredBreaches } from './hibp'
import { getSha1 } from './fxa'
import { filterBreachDataTypes } from './breachResolution.js'
import { captureMessage } from "@sentry/node";

/**
 * @typedef {{
 *   unverifiedEmails: import('knex/types/tables').EmailAddressRow[],
 *   verifiedEmails: BundledVerifiedEmails[],
 * }} AllEmailsAndBreaches
 */

/**
 * TODO: deprecate with MNTOR-2021
 * Get all emails and breaches for a user via app.locals
 * This function will be replaced after 'breaches" table is created
 * and all records can be retrieved from the one table
 *
 * @param {*} user
 * @param {*} allBreaches
 * @returns {Promise<AllEmailsAndBreaches>}
 */
async function getAllEmailsAndBreaches(user, allBreaches) {

  // @ts-ignore: function will be deprecated
  const verifiedEmails = []
  // @ts-ignore: function will be deprecated
  const unverifiedEmails = []

  if (!user) {
    const errMsg = "getAllEmailsAndBreaches: subscriber cannot be undefined"
    console.error(errMsg);
    captureMessage(errMsg);

    // @ts-ignore: function will be deprecated
    return { verifiedEmails, unverifiedEmails };
  }
  if (!allBreaches || allBreaches.length === 0) {
    const errMsg = "getAllEmailsAndBreaches: allBreaches object cannot be empty"
    console.error(errMsg);
    captureMessage(errMsg)
    // @ts-ignore: function will be deprecated
    return { verifiedEmails, unverifiedEmails };
  }

  const monitoredEmails = await getUserEmails(user.id)
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
    /** @type {any[]} */
    const newBreachesForEmail = emailEntry.breaches.filter(breach => breach.AddedDate >= user.breaches_last_shown)

    for (const newBreachForEmail of newBreachesForEmail) {
      newBreachForEmail.NewBreach = true // add "NewBreach" property to the new breach.
      emailEntry.hasNewBreaches = newBreachesForEmail.length // add the number of new breaches to the email
    }
  }

  return { verifiedEmails, unverifiedEmails }
}

/**
 * TODO: deprecate with MNTOR-2021
 *
 * @param {any[]} foundBreaches
 */
function addRecencyIndex(foundBreaches) {
  /**
   * @type {any[]}
   */
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

/**
 * @typedef {{
 *   email: string;
 *   breaches: import('./hibp').HibpLikeDbBreach[];
 *   id: number;
 *   primary: boolean;
 *   verified: boolean;
 *   hasNewBreaches?: number;
 * }} BundledVerifiedEmails
 */

/**
 * TODO: deprecate with MNTOR-2021
 *
 * @param {{ user: any; email: any; recordId: any; recordVerified: any; allBreaches: import('./hibp').HibpLikeDbBreach[]; }} options
 * @returns {Promise<BundledVerifiedEmails>}
 */
async function bundleVerifiedEmails(options) {
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
  const filteredAnnotatedFoundBreaches = getFilteredBreaches(foundBreachesWithRecency)

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
