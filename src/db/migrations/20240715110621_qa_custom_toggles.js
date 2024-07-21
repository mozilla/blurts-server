/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("qa_custom_toggles", function(table) {
    table.string("emailHash").primary();
    table.integer("onerep_profile_id").notNullable();
    table.boolean("showRealBreaches").notNullable();
    table.boolean("showCustomBreaches").notNullable();
    table.boolean("showRealBrokers").notNullable();
    table.boolean("showCustomBrokers").notNullable();
    table.jsonb("breach_resolution");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("qa_custom_toggles");
}