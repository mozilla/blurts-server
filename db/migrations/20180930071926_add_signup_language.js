'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('subscribers', table => {
    table.string('signup_language')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('subscribers', table => {
    table.dropColumn('signup_language')
  })
}
