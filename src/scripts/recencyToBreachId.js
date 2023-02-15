/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Executes once
 * Execute after `deprecateBreachResolve.js`
 * The purpose of the script is to convert all recency indices to breach ids for `breach_resolution`
 * For backwards compatibility, all converted `breach_resolution` fields will have a boolean
 * `useBreachId: true/false`
 */

import Knex from 'knex'
import knexConfig from '../db/knexfile.js'
import { getAllBreachesFromDb } from '../utils/hibp.js'
import { getAllEmailsAndBreaches } from '../utils/breaches.js'
import { setBreachResolution } from '../db/tables/subscribers.js'
const knex = Knex(knexConfig)

const LIMIT = 50 // with millions of records, we have to load a few at a time
let offset = 0 // looping through all records with offset
let subscribersArr = []

// load all breaches for ref
const allBreaches = await getAllBreachesFromDb()
if (allBreaches && allBreaches.length > 0) console.log('breaches loaded successfully! ', allBreaches.length)
console.log(JSON.stringify(allBreaches[0]))

// find all subscribers who resolved any breaches in the past,
// replace recency index with breach id
do {
  console.log(`Converting breach_resolution to use breach Id - start: ${offset} limit: ${LIMIT}`)
  subscribersArr = await knex
    .select('id', 'primary_email', 'breach_resolution')
    .from('subscribers')
    .whereNotNull('breach_resolution')
    .limit(LIMIT)
    .offset(offset)

  console.log(`Loaded # of subscribers: ${subscribersArr.length}`)

  for (const subscriber of subscribersArr) {
    const { breach_resolution: v2 } = subscriber
    console.debug({ v2 })

    // if useBreachId is set, skip because this breach_resolution has already been worked on
    if (v2.useBreachId) {
      console.log('Skipping since `useBreachId` is set already, this breach resolution is already converted')
      continue
    }

    const newResolutions = {}

    // fetch subscriber all breaches / email
    const subscriberBreachesEmail = await getAllEmailsAndBreaches(subscriber, allBreaches)
    console.debug(JSON.stringify(subscriberBreachesEmail.verifiedEmails))

    for (const email in v2) {
      console.debug({ email })
      const resolutions = v2[email]
      console.debug({ resolutions })
      newResolutions[email] = {}

      for (const recencyIndex in resolutions) {
        console.debug({ recencyIndex })

        // find subscriber's relevant recency index breach information
        const ve = subscriberBreachesEmail.verifiedEmails?.filter(ve => ve.email === email)[0] || {}
        const subBreach = ve.breaches?.filter(b => Number(b.recencyIndex) === Number(recencyIndex))[0] || null
        const breachName = subBreach?.Name
        console.debug({ breachName })

        // find breach id for the breach
        const breachId = allBreaches.find(b => b.Name === breachName)?.Id
        console.log({ breachId })
        newResolutions[email][breachId] = v2[email][recencyIndex]
      }
    }

    // check if v2 is changed, if so, upsert the new v2
    newResolutions.useBreachId = true
    console.log(JSON.stringify(newResolutions))
    await setBreachResolution(subscriber, newResolutions)
  }
  offset += LIMIT
} while (subscribersArr.length === LIMIT)

// breaking out of do..while loop
console.log('Reaching the end of the table, offset ended at', offset)
process.exit()
