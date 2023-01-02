// Issue 2744: Delete email_addresses when the subscriber is deleted
// email_addresses.subscriber_id added in 20190328111900_add_email_addresses_table.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('email_addresses', (table) => {
    // Drop existing constraint
    table.dropForeign(['subscriber_id'])
    // Re-create with ON UPDATE / ON DELETE clauses
    table.foreign('subscriber_id')
      .references('subscribers.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('email_addresses', (table) => {
    // Drop existing constraint
    table.dropForeign(['subscriber_id'])
    // Re-create without ON UPDATE / ON DELETE clauses
    table.foreign('subscriber_id')
      .references('subscribers.id')
  })
}
