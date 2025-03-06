/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.alterTable("onerep_profiles", (table) => {
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
    table.jsonb("addresses").notNullable().defaultTo("[]");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.alterTable("onerep_profiles", (table) => {
    table.dropColumns(
      "first_names",
      "last_names",
      "middle_names",
      "phone_numbers",
      "addresses",
    );
  });
}
