'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.integer('kid')
  })
}

exports.down = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.dropColumn('kid')
  })
}
