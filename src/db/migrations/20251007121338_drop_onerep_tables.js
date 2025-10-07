/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  // Drop OneRep-related tables in reverse dependency order
  await knex.schema.dropTableIfExists("onerep_scan_results_data_brokers");
  await knex.schema.dropTableIfExists("onerep_scan_results");
  await knex.schema.dropTableIfExists("onerep_scans");
  await knex.schema.dropTableIfExists("onerep_profiles");
  await knex.schema.dropTableIfExists("onerep_data_brokers");
  await knex.schema.dropTableIfExists("stats");

  // Remove OneRep-related columns from subscribers table
  await knex.schema.alterTable("subscribers", (table) => {
    table.dropColumn("onerep_profile_id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  // Re-add onerep_profile_id column to subscribers table
  await knex.schema.alterTable("subscribers", (table) => {
    table.integer("onerep_profile_id").nullable();
    table.index("onerep_profile_id");
  });

  // Recreate OneRep tables (simplified versions for rollback)
  await knex.schema.createTable("stats", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("current");
    table.string("max");
    table.string("type");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("modified_at").defaultTo(knex.fn.now());
  });

  await knex.schema.createTable("onerep_data_brokers", (table) => {
    table.increments("id").primary();
    table.string("data_broker").notNullable();
    table.string("status").notNullable();
    table.string("url").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  await knex.schema.createTable("onerep_profiles", (table) => {
    table.increments("id").primary();
    table.integer("onerep_profile_id").nullable();
    table.varchar("first_name");
    table.varchar("last_name");
    table.varchar("city_name");
    table.varchar("state_code");
    table.date("date_of_birth");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.index("onerep_profile_id");
  });

  await knex.schema.createTable("onerep_scans", (table) => {
    table.increments("id").primary();
    table.integer("onerep_profile_id").nullable();
    table.integer("onerep_scan_id");
    table.jsonb("onerep_scan_results");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.index("onerep_profile_id");
    table.index("onerep_scan_id");
  });

  await knex.schema.createTable("onerep_scan_results", (table) => {
    table.increments("id").primary();
    table.integer("onerep_scan_result_id").notNullable();
    table.integer("onerep_scan_id").notNullable();
    table.string("link").notNullable();
    table.integer("age").nullable();
    table.string("data_broker").notNullable();
    table.integer("data_broker_id").notNullable();
    table.jsonb("emails").notNullable();
    table.jsonb("phones").notNullable();
    table.jsonb("addresses").notNullable();
    table.jsonb("relatives").notNullable();
    table.string("first_name").notNullable();
    table.string("middle_name").nullable();
    table.string("last_name").notNullable();
    table.string("status").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.index("onerep_scan_id");
    table.index("onerep_scan_result_id");
  });

  await knex.schema.createTable("onerep_scan_results_data_brokers", (table) => {
    table.increments("id").primary();
    table.integer("onerep_scan_result_id").notNullable();
    table.integer("data_broker_id").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.index("onerep_scan_result_id");
    table.index("data_broker_id");
  });
}
