/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export async function up(knex) {
  return knex.schema
    .createTable('onerep_stats', table => {
      table.string('name').primary().unique()
      table.string('current')
      table.string('max')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('modified_at').defaultTo(knex.fn.now())
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema
    .dropTableIfExists('onerep_scans')
}
