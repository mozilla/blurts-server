/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Executes once
 * The purpose of the script is to convert all `subscriber.breaches_resolved` to `subscriber.breaches_resolution`
 * with the goal of deprecating the column
 */

import Knex from 'knex'
import knexConfig from '../../db/knexfile.js'
import { getAllBreachesFromDb } from '../../utils/hibp.js'
import { getAllEmailsAndBreaches } from '../../utils/breaches.js'
import { BreachDataTypes } from '../../utils/breach-resolution.js'
const knex = Knex(knexConfig)

const LIMIT = 1000 // with millions of records, we have to load a few at a time
let CAP = 5000 // cap the experiment
if (process.argv.length === 2) {
  CAP = process.argv[1]
}
let offset = 0 // looping through all records with offset
let subscribersArr = []

/**
 * Batch update
 *
 * @param {*} updateCollection
 */
const batchUpdate = async (updateCollection) => {
  console.log({ updateCollection })
  const trx = await knex.transaction()
  try {
    await Promise.all(updateCollection.map(tuple => {
      const { user, updatedBreachesResolution } = tuple
      return knex('subscribers')
        .where('id', user.id)
        .update({
          breach_resolution: updatedBreachesResolution
        })
        .transacting(trx)
    })
    )
    await trx.commit()
  } catch (error) {
    await trx.rollback()
  }
}

const startTime = Date.now()
console.log(`Start time is: ${startTime}`)

// load all breaches for ref
const allBreaches = await getAllBreachesFromDb()
if (allBreaches && allBreaches.length > 0) console.log('breaches loaded successfully! ', allBreaches.length)

// find all subscribers who resolved any breaches in the past, convert those
// records into the new v2 format
do {
  console.log(`Converting breaches_resolved to breach_resolution - start: ${offset} limit: ${LIMIT}`)
  subscribersArr = await knex
    .select('id', 'primary_email', 'breaches_resolved', 'breach_resolution')
    .from('subscribers')
    .whereNotNull('breaches_resolved')
    .limit(LIMIT)
    .offset(offset)
    .orderBy('updated_at', 'desc')

  console.log(`Loaded # of subscribers: ${subscribersArr.length}`)
  const updateCollection = []

  for (const subscriber of subscribersArr) {
    let { breaches_resolved: v1, breach_resolution: v2 } = subscriber
    let isV2Changed = false // use a boolean to track if v2 has been changed, only upsert if so

    // fetch subscriber all breaches / email
    const subscriberBreachesEmail = await getAllEmailsAndBreaches(subscriber, allBreaches)
    // console.debug(JSON.stringify(subscriberBreachesEmail.verifiedEmails))

    for (const [email, resolvedRecencyIndices] of Object.entries(v1)) {
      // console.debug({ email })
      // console.debug({ resolvedRecencyIndices })
      for (const recencyIndex of resolvedRecencyIndices) {
        // console.debug({ recencyIndex })
        // find subscriber's relevant recency index breach information
        const ve = subscriberBreachesEmail.verifiedEmails?.filter(e => e.email === email)[0] || {}
        // console.debug({ ve })
        const subBreach = ve.breaches?.filter(b => Number(b.recencyIndex) === Number(recencyIndex))[0] || null
        // console.debug({ subBreach })

        if (!subBreach || !subBreach.DataClasses) {
          console.warn(`SKIP: Cannot find subscribers breach and data types - recency: ${recencyIndex} email: ${email}`)
          continue
        }

        // if email does not exist in v2, we need to add it to the object
        // format: {email: { recencyIndex: { isResolved: true, resolutionsChecked: [DataTypes]}}}
        if (!v2) v2 = {}
        if (!v2[email]) {
          v2[email] = {
            [recencyIndex]: {
              isResolved: true,
              resolutionsChecked: subBreach?.DataClasses || [BreachDataTypes.General]
            }
          }

          isV2Changed = true
        }
        if (v2[email][recencyIndex]?.isResolved) {
          console.log(`recencyIndex ${recencyIndex} exists in v2 and is resolved, no changes`)
        } else {
          console.log(`recencyIndex ${recencyIndex} either does not exist or is not resolved, overwriting`)
          v2[email][recencyIndex] = {
            isResolved: true,
            resolutionsChecked: subBreach?.DataClasses
          }
          isV2Changed = true
        }
      }
    }

    // check if v2 is changed, if so, upsert the new v2
    if (isV2Changed) {
      console.log('upsert for subscriber: ', subscriber.primary_email)
      updateCollection.push({ user: subscriber, updatedBreachesResolution: v2 })
    }
  }
  await batchUpdate(updateCollection)
  offset += LIMIT
} while (subscribersArr.length === LIMIT && offset <= CAP)

// breaking out of do..while loop
console.log('Reaching the end of the table, offset ended at', offset)
const endTime = Date.now()
console.log(`End time is: ${endTime}`)
console.log('Diff is: ', endTime - startTime)
process.exit()
