/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table("onerep_profiles", (table) => {
    // @ts-ignore TODO: Determine if the following line should be changed
    // or remain unchanged as initially deployed.
    table.varchar("name_suffix").after("onerep_profile_id");
    // @ts-ignore TODO: Determine if the following line should be changed
    // or remain unchanged as initially deployed.
    table.varchar("middle_name").after("first_name");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table("onerep_profiles", (table) => {
    table.dropColumn("name_suffix");
    table.dropColumn("middle_name");
  });
}
