import Knex from 'knex'
import knexConfig from '../knexfile.js'
import mozlog from '../../utils/log.js'
const knex = Knex(knexConfig)
const log = mozlog('DB.breaches')

/**
 * Get all records from "breaches" table
 * @returns Array of all records from "breaches" table
 */
async function getAllBreaches () {
  log.debug('getAllBreaches')
  return knex('breaches')
    .returning()
}

/**
 * Upsert breaches into "breaches" table
 * @param {Array} hibpBreaches breaches array from HIBP API
 * @returns
 */
async function upsertBreaches (hibpBreaches) {
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

export {
  getAllBreaches,
  upsertBreaches
}
