/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("qa_custom_brokers", (table) => {
    table.increments("onerep_scan_result_id").primary();
    table.integer("onerep_profile_id").notNullable();
    table.string("link").notNullable();
    table.integer("age").nullable();
    table.string("data_broker").notNullable();
    table.jsonb("emails").notNullable();
    table.jsonb("phones").notNullable();
    table.jsonb("addresses").notNullable();
    table.jsonb("relatives").notNullable();
    table.string("first_name").notNullable();
    table.string("middle_name").nullable();
    table.string("last_name").notNullable();
    table.string("status").notNullable();
    table.boolean("manually_resolved").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.integer("optout_attempts");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("qa_custom_brokers");
}
