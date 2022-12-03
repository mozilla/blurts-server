'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.jsonb('breach_resolution').defaultTo(null)
  })
}

exports.down = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.dropColumn('breach_resolution')
  })
}
