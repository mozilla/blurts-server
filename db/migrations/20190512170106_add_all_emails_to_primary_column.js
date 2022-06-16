'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('subscribers', table => {
    table.boolean('all_emails_to_primary').defaultTo(false)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('subscribers', table => {
    table.dropColumn('all_emails_to_primary')
  })
}
