/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'
import { mainLayout } from '../views/mainLayout.js'
import { breaches } from '../views/partials/breaches.js'
import { setBreachResolution, updateBreachStats } from '../db/tables/subscribers.js'
import { appendBreachResolutionChecklist } from '../utils/breach-resolution.js'
import { generateToken } from '../utils/csrf.js'
import { getAllEmailsAndBreaches } from '../utils/breaches.js'
import { getCountryCode } from '../utils/country-code.js'

import { v5 as uuidv5 } from 'uuid'

import * as monitorPings from '../generated/pings.js'
import * as monitorManagementMetrics from '../generated/monitor.js'
import * as userJourneyMetrics from '../generated/userJourney.js'
import * as breachMetrics from '../generated/breaches.js'

async function breachesPage (req, res) {
  // TODO: remove: to test out getBreaches call with JSON returns
  const breachesData = await getAllEmailsAndBreaches(req.user, req.app.locals.breaches)
  const emailVerifiedCount = breachesData.verifiedEmails?.length ?? 0
  const emailTotalCount = emailVerifiedCount + (breachesData.unverifiedEmails?.length ?? 0)
  appendBreachResolutionChecklist(breachesData, { countryCode: getCountryCode(req) })
  const cookies = req.cookies
  const selectedEmailIndex = typeof cookies['monitor.selected-email-index'] !== 'undefined'
    ? Number.parseInt(cookies['monitor.selected-email-index'], 10)
    : 0

  const data = {
    breachesData,
    breachLogos: req.app.locals.breachLogoMap,
    emailVerifiedCount,
    emailTotalCount,
    selectedEmailIndex,
    partial: breaches,
    csrfToken: generateToken(res),
    fxaProfile: req.user.fxa_profile_json,
    nonce: res.locals.nonce
  }

  // TODO could probably set this in a central place?
  userJourneyMetrics.pathname.set('/user/breaches')
  userJourneyMetrics.visit.set(new Date())

  // TODO could probably do this once on login, and put in req.locals?
  const monitorId = uuidv5(req.user.fxa_uid, AppConstants.GLEAN_UUID_NAMESPACE)
  monitorManagementMetrics.id.set(monitorId)

  monitorPings.userJourney.submit()

  res.send(mainLayout(data))
}

/**
 * Get breaches from the database and return a JSON object
 * TODO: Takes in additional query parameters:
 *
 * status: enum (resolved, unresolved)
 * email: string
 *
 * @param {object} req
 * @param {object} res
 */
async function getBreaches (req, res) {
  const allBreaches = req.app.locals.breaches
  const sessionUser = req.user
  const resp = await getAllEmailsAndBreaches(sessionUser, allBreaches)
  return res.json(resp)
}

/**
 * Modify breach resolution for a user
 *
 * @param {object} req containing {user, body: {affectedEmail, breachId, resolutionsChecked}}
 *
 * breachId: id of the breach in the `breaches` table
 *
 * resolutionsChecked: has the following structure [DataTypes]
 * @param {object} res JSON object containing the updated breach resolution
 */
async function putBreachResolution (req, res) {
  const sessionUser = req.user
  const { affectedEmail, breachId, resolutionsChecked } = req.body
  const breachIdNumber = Number(breachId)
  const affectedEmailAsSubscriber = sessionUser.primary_email === affectedEmail ? sessionUser.primary_email : false
  const affectedEmailInEmailAddresses = sessionUser.email_addresses.find(ea => ea.email === affectedEmail)?.email || false

  // check if current user's emails array contain affectedEmail
  if (!affectedEmailAsSubscriber && !affectedEmailInEmailAddresses) {
    return res.json('Error: affectedEmail is not valid for this subscriber')
  }

  // check if breach id is a part of affectEmail's breaches
  const allBreaches = req.app.locals.breaches
  const { verifiedEmails } = await getAllEmailsAndBreaches(req.session.user, allBreaches)
  let currentEmail
  if (affectedEmailAsSubscriber) {
    currentEmail = verifiedEmails.find(ve => ve.email === affectedEmailAsSubscriber)
  } else {
    currentEmail = verifiedEmails.find(ve => ve.email === affectedEmailInEmailAddresses)
  }
  const currentBreaches = currentEmail?.breaches?.filter(b => b.Id === breachIdNumber)
  if (!currentBreaches) {
    return res.json('Error: breachId provided does not exist')
  }

  // check if resolutionsChecked array is a subset of the breaches' datatypes
  const isSubset = resolutionsChecked.every(val => currentBreaches[0].DataClasses.includes(val))
  if (!isSubset) {
    return res.json(`Error: the resolutionChecked param contains more than allowed data types: ${resolutionsChecked}`)
  }

  /* new JsonB:
  {
    email_id: {
      recency_index: {
        resolutions: ['email', ...],
        isResolved: true
      }
    }
  }
  */

  const currentBreachDataTypes = currentBreaches[0].DataClasses // get this from existing breaches
  const currentBreachResolution = req.user.breach_resolution || {} // get this from existing breach resolution if available
  const isResolved = resolutionsChecked.length === currentBreachDataTypes.length
  currentBreachResolution[affectedEmail] = {
    ...(currentBreachResolution[affectedEmail] || {}),
    ...{
      [breachIdNumber]: {
        resolutionsChecked,
        isResolved
      }
    }
  }

  // set useBreachId to mark latest version of breach resolution
  // without this line, the get call might assume recency index
  currentBreachResolution.useBreachId = true

  const updatedSubscriber = await setBreachResolution(sessionUser, currentBreachResolution)

  req.session.user = updatedSubscriber

  const userBreachStats = breachStatsV1(verifiedEmails)

  monitorPings.breachResolution.submit()

  await updateBreachStats(sessionUser.id, userBreachStats)

  res.json(updatedSubscriber.breach_resolution)
}

// PRIVATE

/**
 * TODO: DEPRECATE
 * This utiliy function is maintained to keep backwards compatibility with V1.
 * After v2 is launched, we will deprecate this function
 *
 * @param {object} verifiedEmails [{breaches: [isResolved: true/false, dataClasses: []]}]
 * @returns {object} breachStats
 * {
 *    monitoredEmails: {
      count: 0
    },
    numBreaches: {
      count: 0,
      numResolved: 0
      numUnresolved: 0
    },
    passwords: {
      count: 0,
      numResolved: 0
    }
  }
 */
function breachStatsV1 (verifiedEmails) {
  const breachStats = {
    monitoredEmails: {
      count: 0
    },
    numBreaches: {
      count: 0,
      numResolved: 0
    },
    passwords: {
      count: 0,
      numResolved: 0
    }
  }
  let foundBreaches = []

  // combine the breaches for each account, breach duplicates are ok
  // since the user may have multiple accounts with different emails
  verifiedEmails.forEach(email => {
    email.breaches.forEach(breach => {
      if (breach.IsResolved) {
        breachStats.numBreaches.numResolved++
        breachMetrics.resolve.set(new Date())
      }

      const dataClasses = breach.DataClasses
      if (dataClasses.includes('passwords')) {
        breachStats.passwords.count++
        if (breach.IsResolved) {
          breachStats.passwords.numResolved++
          breachMetrics.resolvePassword.set(new Date())
        }
      }
    })
    foundBreaches = [...foundBreaches, ...email.breaches]
  })

  // total number of verified emails being monitored
  breachStats.monitoredEmails.count = verifiedEmails.length

  // total number of breaches across all emails
  breachStats.numBreaches.count = foundBreaches.length

  breachStats.numBreaches.numUnresolved = breachStats.numBreaches.count - breachStats.numBreaches.numResolved

  return breachStats
}

export { breachesPage, putBreachResolution, getBreaches }
