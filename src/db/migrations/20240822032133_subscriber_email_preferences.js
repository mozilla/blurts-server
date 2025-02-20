/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable(
    "subscriber_email_preferences",
    function (table) {
      table.increments("id").primary();
      table
        .integer("subscriber_id")
        .references("subscribers.id")
        .unique()
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("unsubscribe_token").unique();
      table.boolean("monthly_monitor_report_free").defaultTo(true);
      table.timestamp("monthly_monitor_report_free_at");
    },
  );
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists("subscriber_email_preferences");
}
