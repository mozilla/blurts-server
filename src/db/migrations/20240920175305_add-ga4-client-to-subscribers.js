/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("google_analytics_clients", (table) => {
    table.increments("id").primary();
    table
      .integer("subscriber_id")
      .references("subscribers.id")
      .unique()
      .notNullable()
      .onDelete("CASCADE");
    table.string("cookie_version");
    table.integer("cookie_path");
    table.string("client_id").unique();
    table.timestamp("cookie_timestamp");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("google_analytics_clients");
}
