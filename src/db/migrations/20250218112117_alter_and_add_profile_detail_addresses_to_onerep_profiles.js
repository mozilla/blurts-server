/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.alterTable("onerep_profiles", (table) => {
    table.jsonb("addresses").notNullable().defaultTo("[]");
  });

  await knex.raw(`
    UPDATE "onerep_profiles"
    SET "addresses" = jsonb_build_array(
      jsonb_build_object(
        'city_name', "city_name",
        'state_code', "state_code"
      )
    )
    WHERE "city_name" IS NOT NULL AND "state_code" IS NOT NULL;
  `);

  await knex.schema.alterTable("onerep_profiles", (table) => {
    table.dropColumn("city_name");
    table.dropColumn("state_code");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.alterTable("onerep_profiles", (table) => {
    table.varchar("city_name");
    table.varchar("state_code");
  });

  await knex.raw(`
    UPDATE "onerep_profiles"
    SET "city_name" = COALESCE(("addresses"->0->>'city_name'), ''),
        "state_code" = COALESCE(("addresses"->0->>'state_code'), '')
    WHERE jsonb_array_length(COALESCE("addresses", '[]'::jsonb)) > 0;
  `);

  await knex.schema.alterTable("onerep_profiles", (table) => {
    table.dropColumn("addresses");
  });
}
