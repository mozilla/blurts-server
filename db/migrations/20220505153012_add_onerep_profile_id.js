'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', table => {
    table.integer('onerep_profile_id')
  })
}

exports.down = function (knex) {
  return knex.schema.table('subscribers', table => {
    table.dropColumn('onerep_profile_id')
  })
}
