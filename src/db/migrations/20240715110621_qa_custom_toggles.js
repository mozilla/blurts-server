/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("qa_custom_toggles", function (table) {
    table.string("email_hash").primary();
    table.integer("onerep_profile_id").notNullable();
    table.boolean("show_real_breaches").notNullable();
    table.boolean("show_custom_breaches").notNullable();
    table.boolean("show_real_brokers").notNullable();
    table.boolean("show_custom_brokers").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("qa_custom_toggles");
}
