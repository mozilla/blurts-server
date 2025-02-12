/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table("subscribers", (table) => {
    table.unique("onerep_profile_id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table("subscribers", (table) => {
    // @ts-ignore TODO: Determine if the following line should be changed to
    // `defaultTo` or remain unchanged as initially deployed.
    table.dropUnique("onerep_profile_id");
  });
}
