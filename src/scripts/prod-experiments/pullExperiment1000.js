/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Executes once
 * The purpose of the script is to benchmark pure read with limit set as 1000
 */

import Knex from 'knex'
import knexConfig from '../../db/knexfile.js'
import { getAllBreachesFromDb } from '../../utils/hibp.js'
const knex = Knex(knexConfig)

const LIMIT = 1000 // with millions of records, we have to load a few at a time
let offset = 0 // looping through all records with offset
let subscribersArr = []

// load all breaches for ref
const allBreaches = await getAllBreachesFromDb()
if (allBreaches && allBreaches.length > 0) console.log('breaches loaded successfully! ', allBreaches.length)

const startTime = Date.now()
console.log(`Start time is: ${startTime}`)
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

  offset += LIMIT
} while (subscribersArr.length === LIMIT)

// breaking out of do..while loop
console.log('Reaching the end of the table, offset ended at', offset)
const endTime = Date.now()
console.log(`End time is: ${endTime}`)
console.log('Diff is: ', endTime - startTime)
process.exit()
