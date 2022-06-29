'use strict'

exports.up = function (knex) {
  return knex.schema.table('onerep_events', (table) => {
    table.string('event_status').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.table('onerep_events', (table) => {
    table.dropColumn('event_status')
  })
}
