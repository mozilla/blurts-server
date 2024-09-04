/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export async function up(knex) {
  await knex.schema
    .table('subscriber_email_preferences', function(table) {
      table.index("unsubscribe_token");
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.table('subscriber_email_preferences', function(table) {
    table.dropIndex("unsubscribe_token");
  })
}
