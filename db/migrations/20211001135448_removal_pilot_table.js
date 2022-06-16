'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('removal_pilot', (table) => {
    table.increments('id').primary()
    table.string('name').unique()
    table.integer('enrolled_users').defaultTo(0)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('removal_pilot')
}
