'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('subscribers', table => {
    table.timestamps(false, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('subscribers', table => {
    table.dropTimestamps()
  })
}
