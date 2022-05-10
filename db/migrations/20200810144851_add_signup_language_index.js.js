'use strict'

exports.up = function (knex) {
  return knex.schema.table('subscribers', table => {
    table.index('signup_language', 'subscribers_signup_language_idx')
  })
}

exports.down = function (knex) {
  return knex.schema.table('email_addresses', table => {
    table.dropIndex('signup_language', 'subscribers_signup_language_idx')
  })
}
