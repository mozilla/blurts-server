'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.boolean('monthly_email_optout')
  })
}

exports.down = function (knex) {
  return knex.schema.table('subscribers', (table) => {
    table.dropColumn('monthly_email_optout')
  })
}
