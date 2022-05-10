'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('subscribers', table => {
    table.index('created_at')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('subscribers', table => {
    table.dropIndex('created_at')
  })
}
