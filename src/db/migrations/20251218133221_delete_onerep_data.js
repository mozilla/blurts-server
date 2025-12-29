/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.alterTable("onerep_profiles", (table) => {
    table.dropForeign("onerep_profile_id");
  });
  await knex.schema.alterTable("onerep_scans", (table) => {
    table.dropForeign("onerep_profile_id");
  });
  await knex.schema.alterTable("onerep_scan_results", (table) => {
    table.dropForeign("onerep_scan_id");
  });
  await knex.schema.alterTable("subscribers", (table) =>
    table.dropColumn("onerep_profile_id"),
  );
  await knex.schema.dropTableIfExists("onerep_data_brokers");
  await knex.schema.dropTableIfExists("onerep_scan_results");
  await knex.schema.dropTableIfExists("onerep_scans");
  await knex.schema.dropTableIfExists("onerep_profiles");
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  // Re-add the column to subscribers
  await knex.schema.alterTable("subscribers", (table) => {
    table.integer("onerep_profile_id").unique();
  });
  // Recreate onerep_profiles with fk reference to subscribers
  await knex.schema.createTable("onerep_profiles", function (table) {
    table.increments("id").primary();
    table
      .integer("onerep_profile_id")
      .references("onerep_profile_id")
      .inTable("subscribers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("first_name", 255);
    table.string("last_name", 255);
    table.string("city_name", 255);
    table.string("state_code", 255);
    table.date("date_of_birth");
    table.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp("updated_at", { useTz: true }).defaultTo(knex.fn.now());
    table.string("name_suffix", 255);
    table.string("middle_name", 255);
    table
      .specificType("first_names", "character varying(255)[]")
      .notNullable()
      .defaultTo(knex.raw("ARRAY[]::character varying(255)[]"));
    table
      .specificType("last_names", "character varying(255)[]")
      .notNullable()
      .defaultTo(knex.raw("ARRAY[]::character varying(255)[]"));
    table
      .specificType("middle_names", "character varying(255)[]")
      .notNullable()
      .defaultTo(knex.raw("ARRAY[]::character varying(255)[]"));
    table
      .specificType("phone_numbers", "character varying(255)[]")
      .notNullable()
      .defaultTo(knex.raw("ARRAY[]::character varying(255)[]"));
    table.jsonb("addresses").notNullable().defaultTo(knex.raw("'[]'::jsonb"));
    table.index("onerep_profile_id");
  });
  // Recreate onerep_data_brokers
  await knex.schema.createTable("onerep_data_brokers", function (table) {
    table.increments("id").primary();
    table.string("data_broker", 255).notNullable().unique();
    table.string("status", 255).notNullable();
    table.string("url", 255).notNullable();
    table.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp("updated_at", { useTz: true }).defaultTo(knex.fn.now());
  });
  // Recreate onerep_scans
  await knex.schema.createTable("onerep_scans", function (table) {
    table.increments("id").primary();
    table.integer("onerep_profile_id");
    table.integer("onerep_scan_id").unique();
    table.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp("updated_at", { useTz: true }).defaultTo(knex.fn.now());
    table.string("onerep_scan_reason", 255);
    table.string("onerep_scan_status", 255).notNullable();

    table.index("onerep_profile_id");
    table.index("onerep_scan_id");
    table
      .foreign("onerep_profile_id")
      .references("onerep_profile_id")
      .inTable("subscribers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
  // Recreate onerep_scan_results
  await knex.schema.createTable("onerep_scan_results", function (table) {
    table.increments("id").primary();

    table.integer("onerep_scan_result_id").notNullable().unique();
    table.integer("onerep_scan_id").notNullable();
    table.string("link", 255).notNullable();
    table.integer("age");
    table.string("data_broker", 255).notNullable();
    table.integer("data_broker_id").notNullable();
    table.jsonb("emails").notNullable();
    table.jsonb("phones").notNullable();
    table.jsonb("addresses").notNullable();
    table.jsonb("relatives").notNullable();
    table.string("first_name", 255).notNullable();
    table.string("middle_name", 255);
    table.string("last_name", 255).notNullable();
    table.string("status", 255).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.boolean("manually_resolved").notNullable().defaultTo(false);
    table.integer("optout_attempts");
    table.timestamp("last_optout_at");

    table.index("onerep_scan_id");
    table.index("onerep_scan_result_id");
    table
      .foreign("onerep_scan_id")
      .references("onerep_scan_id")
      .inTable("onerep_scans")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}
