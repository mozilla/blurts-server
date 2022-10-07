'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.timestamp('monthly_email_at')
  })
}

exports.down = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.dropColumn('monthly_email_at')
  })
}
