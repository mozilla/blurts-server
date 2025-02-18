/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table("onerep_profiles", (table) => {
    table
      .specificType("first_names", "character varying(255)[]")
      .notNullable()
      .defaultTo(knex.raw(`ARRAY[]::character varying(255)[]`));
    table
      .specificType("last_names", "character varying(255)[]")
      .notNullable()
      .defaultTo(knex.raw(`ARRAY[]::character varying(255)[]`));
    table
      .specificType("middle_names", "character varying(255)[]")
      .notNullable()
      .defaultTo(knex.raw(`ARRAY[]::character varying(255)[]`));
    table
      .specificType("phone_numbers", "character varying(255)[]")
      .notNullable()
      .defaultTo(knex.raw(`ARRAY[]::character varying(255)[]`));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table("onerep_profiles", (table) => {
    table.dropColumn("first_names");
    table.dropColumn("last_names");
    table.dropColumn("middle_names");
    table.dropColumn("phone_numbers");
  });
}
