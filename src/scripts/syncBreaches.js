/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* Cron: Daily
 * Fetches the list of breaches from HIBP, sync database with the latest breaches list
 *
 * Usage:
 * node scripts/syncBreaches.js
 */

import { req, formatDataClassesArray } from '../utils/hibp.js'
import { getAllBreaches, upsertBreaches } from '../db/tables/breaches.js'

const breachesResponse = await req('/breaches')
const breaches = []
const seen = new Set()
for (const breach of breachesResponse) {
  breach.DataClasses = formatDataClassesArray(breach.DataClasses)
  breach.LogoPath = /[^/]*$/.exec(breach.LogoPath)[0]
  breaches.push(breach)
  seen.add(breach.Name + breach.BreachDate)

  // sanity check: corrupt data structure
  if (!isValidBreach(breach)) throw new Error('Breach data structure is not valid', JSON.stringify(breach))
}

console.log('Breaches found: ', breaches.length)
console.log('Unique breaches based on Name + BreachDate', seen.size)

// sanity check: no duplicate breaches with Name + BreachDate
if (seen.size !== breaches.length) {
  throw new Error('Breaches contain duplicates. Stopping script...')
} else {
  await upsertBreaches(breaches)

  // get
  const result = await getAllBreaches()
  console.log(result.length)
  process.exit()
}

/**
 * Null check for some required field
 * @param {Object} breach breach object from HIBP
 * @returns Boolean is it a valid breach
 */
function isValidBreach (breach) {
  return breach.Name !== undefined &&
    breach.BreachDate !== undefined &&
    breach.Title !== undefined &&
    breach.Domain !== undefined &&
    breach.DataClasses !== undefined
}
