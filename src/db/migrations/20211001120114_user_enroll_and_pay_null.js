'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.boolean('removal_would_pay')
    table.timestamp('removal_enrolled_time')
  })
}

exports.down = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.dropColumn('removal_would_pay')
    table.dropColumn('removal_enrolled_time')
  })
}
