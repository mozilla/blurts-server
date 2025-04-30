/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.alterTable("feature_flag_events", (table) => {
    table.primary(["name", "created_at"], {
      constraintName: "feature_flag_events_pkey",
    });
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.alterTable("feature_flag_events", (table) => {
    table.dropPrimary("feature_flag_events_pkey");
  });
}
