/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Executes once
 * The purpose of the script is to clean up some of the failed records during db migration on 3/28/23
 */

import Knex from 'knex'
import knexConfig from '../db/knexfile.js'
import { getAllBreachesFromDb } from '../utils/hibp.js'
import { getAllEmailsAndBreaches } from '../utils/breaches.js'
import { setBreachResolution } from '../db/tables/subscribers.js'
import mozlog from '../utils/log.js'
const log = mozlog('script.migrationCleanup')
const knex = Knex(knexConfig)

const LIMIT = 3000
let subscribersArr = []
// load all breaches for ref
const allBreaches = await getAllBreachesFromDb()
if (allBreaches && allBreaches.length > 0) log.info('breach_count', 'breaches loaded successfully! ', allBreaches.length)

const count = await knex
  .from('subscribers')
  .whereRaw('NOT ((breach_resolution)::jsonb \\? \'useBreachId\')')
  .count('*')

log.info('total_to_be_executed', count[0])

// find all subscribers who resolved any breaches in the past,
// replace recency index with breach id

for (let i = 0; i < 10; i++) {
  subscribersArr = await knex
    .select('id', 'primary_email', 'breach_resolution')
    .from('subscribers')
    .orderBy('updated_at', 'desc')
    .whereRaw('NOT ((breach_resolution)::jsonb \\? \'useBreachId\')')
    .limit(LIMIT)

  log.info('job', `Loaded # of subscribers: ${subscribersArr.length}`)

  for (const subscriber of subscribersArr) {
    const { breach_resolution: v2 } = subscriber
    // console.debug({ v2 })

    // if useBreachId is set, skip because this breach_resolution has already been worked on
    if (v2.useBreachId) {
      log.warn('job', 'Skipping since `useBreachId` is set already, this breach resolution is already converted')
      continue
    }

    const newResolutions = {}

    // fetch subscriber all breaches / email
    const subscriberBreachesEmail = await getAllEmailsAndBreaches(subscriber, allBreaches)
    // console.debug(JSON.stringify(subscriberBreachesEmail.verifiedEmails))

    for (const email in v2) {
    // console.debug({ email })
      const resolutions = v2[email]
      // console.debug({ resolutions })
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
        log.info('job', { breachId })
        newResolutions[email][breachId] = v2[email][recencyIndex]
      }
    }

    // check if v2 is changed, if so, upsert the new v2
    newResolutions.useBreachId = true
    await setBreachResolution(subscriber, newResolutions)
  }
}

// breaking out of do..while loop
log.info('job', 'Reaching the end of the table')
process.exit()
