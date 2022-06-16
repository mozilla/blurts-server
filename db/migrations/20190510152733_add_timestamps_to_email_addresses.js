'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('email_addresses', table => {
    table.timestamps(false)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('email_addresses', table => {
    table.dropTimestamps()
  })
}
