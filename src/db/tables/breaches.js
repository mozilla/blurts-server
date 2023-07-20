/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import initKnex from 'knex'
import knexConfig from '../knexfile.js'
import mozlog from '../../utils/log.js'
const knex = initKnex(knexConfig)
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
 * Get all count from "breaches" table
 *
 * @returns Count of all records from "breaches" table
 */
async function getAllBreachesCount() {
  const breachesCount = await knex('breaches')
    .count({ count: "id" })
    .first()
    .then(result => result?.count || "")
  // Make sure we are returning a number.
  return parseInt(breachesCount.toString(), 10)
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
          is_malware: breach.IsMalware,
          favicon_url: null,
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
 * @param {string} faviconUrl
 */
async function updateBreachFaviconUrl(name, faviconUrl) {
  await knex('breaches')
    .where("name", name)
    .update({
      favicon_url: faviconUrl
    })
}

export {
  getAllBreaches,
  getAllBreachesCount,
  upsertBreaches,
  updateBreachFaviconUrl
}
