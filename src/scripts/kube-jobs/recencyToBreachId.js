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
import knexConfig from '../../db/knexfile.js'
import { getAllBreachesFromDb } from '../../utils/hibp.js'
import { getAllEmailsAndBreaches } from '../../utils/breaches.js'
const knex = Knex(knexConfig)

const LIMIT = 2000 // with millions of records, we have to load a few at a time
let subscribersArr = []

const selectAndLockResolutions = async () => {
  const trx = await knex.transaction()
  let subscribers = []
  try {
    subscribers = await knex.select('id', 'primary_email', 'breach_resolution')
      .from('subscribers')
      .whereNotNull('breach_resolution')
      .whereNotNull('db_migration_1')
      .whereNull('db_migration_2')
      .limit(LIMIT)
      .orderBy('updated_at', 'desc')
      .transacting(trx)
      .forUpdate()

    // update the lock
    await Promise.all(subscribers.map(sub => {
      const { id } = sub
      return knex('subscribers')
        .where('id', id)
        .update({
          db_migration_2: true
        })
        .transacting(trx)
    }))

    await trx.commit()
  } catch (error) {
    await trx.rollback()
    console.error('select & mark rows failed!! first row:')
    console.log({ first: subscribers[0] })
    console.error(error)
  }

  return subscribers
}

/**
 * Batch update
 *
 * @param {*} updateCollection
 */
const batchUpdate = async (updateCollection) => {
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
    }))
    await trx.commit()
  } catch (error) {
    await trx.rollback()
    console.error('batch update failed!!')
    console.log({ updateCollection })
    console.error(error)
  }
}

// Script begins here
const startTime = Date.now()
console.log(`Start time is: ${startTime}`)

// load all breaches for ref
const allBreaches = await getAllBreachesFromDb()
if (allBreaches && allBreaches.length > 0) console.log('breaches loaded successfully! ', allBreaches.length)
// console.log(JSON.stringify(allBreaches[0]))

// find all subscribers who resolved any breaches in the past,
// replace recency index with breach id

let failedToSelect = true
while (failedToSelect) {
  try {
    subscribersArr = await selectAndLockResolutions()
    failedToSelect = false
  } catch (e) {
    console.error(e)
  }
}

console.log(`Loaded # of subscribers: ${subscribersArr.length}`)
const updateCollection = []

for (const subscriber of subscribersArr) {
  const { breach_resolution: v2 } = subscriber
  // console.debug({ v2 })

  // if useBreachId is set, skip because this breach_resolution has already been worked on
  if (v2.useBreachId) {
    console.log('Skipping since `useBreachId` is set already, this breach resolution is already converted')
    continue
  }

  const newResolutions = {}

  // fetch subscriber all breaches / email
  let subscriberBreachesEmail
  try {
    subscriberBreachesEmail = await getAllEmailsAndBreaches(subscriber, allBreaches)
  } catch (e) {
    console.error('Cannot fetch subscriber breaches at the moment: ', e)
    continue
  }
  // console.debug(JSON.stringify(subscriberBreachesEmail.verifiedEmails))

  for (const email in v2) {
    // console.debug({ email })
    const resolutions = v2[email]
    // console.debug({ resolutions })
    newResolutions[email] = {}

    for (const recencyIndex in resolutions) {
      // console.debug({ recencyIndex })

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
  // console.log(JSON.stringify(newResolutions))
  updateCollection.push({ user: subscriber, updatedBreachesResolution: newResolutions })
}

await batchUpdate(updateCollection)

console.log('Reaching the end of the table')
const endTime = Date.now()
console.log(`End time is: ${endTime}`)
console.log('Diff is: ', endTime - startTime)
process.exit()
