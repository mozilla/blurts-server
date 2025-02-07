/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("onerep_scans", (table) => {
    table.increments("id").primary();
    table
      .integer("onerep_profile_id")
      .references("subscribers.onerep_profile_id")
      .nullable();
    table.integer("onerep_scan_id");
    table.jsonb("onerep_scan_results");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.index("onerep_profile_id");
    table.index("onerep_scan_id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("onerep_scans");
}
