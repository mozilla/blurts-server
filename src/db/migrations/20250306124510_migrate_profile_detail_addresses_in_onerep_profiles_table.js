/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.raw(`
    UPDATE "onerep_profiles"
    SET "addresses" = jsonb_build_array(
      jsonb_build_object(
        'city', "city_name",
        'state', "state_code"
      )
    )
    WHERE "city_name" IS NOT NULL AND "state_code" IS NOT NULL;
  `);
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.raw(`
    UPDATE "onerep_profiles"
    SET "city_name" = COALESCE(("addresses"->0->>'city'), ''),
        "state_code" = COALESCE(("addresses"->0->>'state'), '')
    WHERE jsonb_array_length(COALESCE("addresses", '[]'::jsonb)) > 0;
  `);
}
