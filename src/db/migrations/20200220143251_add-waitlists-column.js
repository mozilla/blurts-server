'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', table => {
    table.jsonb('waitlists_joined')
  })
}

exports.down = function (knex) {
  return knex.schema.table('subscribers', table => {
    table.dropColumn('waitlists_joined')
  })
}
