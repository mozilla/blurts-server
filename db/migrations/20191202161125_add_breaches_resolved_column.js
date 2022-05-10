'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', table => {
    table.jsonb('breaches_resolved')
  })
}

exports.down = function (knex) {
  return knex.schema.table('subscribers', table => {
    table.dropColumn('breaches_resolved')
  })
}
