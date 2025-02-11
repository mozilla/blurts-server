/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function up(knex) {
  return knex.schema.createTable("onerep_profiles", (table) => {
    table.increments("id").primary();
    table
      .integer("onerep_profile_id")
      .references("subscribers.onerep_profile_id")
      .nullable();
    table.varchar("first_name");
    table.varchar("last_name");
    table.varchar("city_name");
    table.varchar("state_code");
    table.date("date_of_birth");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.index("onerep_profile_id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("onerep_profiles");
}
