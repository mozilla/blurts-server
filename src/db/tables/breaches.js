/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Knex from 'knex'
import knexConfig from '../knexfile.js'
import mozlog from '../../utils/log.js'
const knex = Knex(knexConfig)
const log = mozlog('DB.breaches')

/**
 * Get all records from "breaches" table
 *
 * @returns Array of all records from "breaches" table
 */
async function getAllBreaches() {
  return knex('breaches')
    .returning("*")
}

/**
 * Upsert breaches into "breaches" table
 * Skip inserting when 'name' field (unique) has a conflict
 *
 * @param {any[]} hibpBreaches breaches array from HIBP API
 * @returns
 */
async function upsertBreaches(hibpBreaches) {
  log.debug('upsertBreaches', hibpBreaches[0])

  return knex.transaction(async trx => {
    const queries = hibpBreaches.map(breach =>
      knex('breaches')
        .insert({
          name: breach.Name,
          title: breach.Title,
          domain: breach.Domain,
          breach_date: breach.BreachDate,
          added_date: breach.AddedDate,
          modified_date: breach.ModifiedDate,
          pwn_count: breach.PwnCount,
          description: breach.Description,
          logo_path: breach.LogoPath,
          data_classes: breach.DataClasses,
          is_verified: breach.IsVerified,
          is_fabricated: breach.IsFabricated,
          is_sensitive: breach.IsSensitive,
          is_retired: breach.IsRetired,
          is_spam_list: breach.IsSpamList,
          is_malware: breach.IsMalware
        })
        .onConflict('name')
        .merge()
        .transacting(trx)
    )

    try {
      const value = await Promise.all(queries)
      return trx.commit(value)
    } catch (error) {
      return trx.rollback(error)
    }
  })
}

/**
 * Update logo path of a breach by name
 *
 * @param {string} name 
 * @param {string} logoPath 
 */
async function updateBreachLogoPath(name, logoPath) {
  await knex('breaches')
    .where("name", name)
    .update({
      logo_path: logoPath,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_date: knex.fn.now()
    })
}

export {
  getAllBreaches,
  upsertBreaches,
  updateBreachLogoPath
}
