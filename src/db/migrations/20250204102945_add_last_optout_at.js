/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.table("onerep_scan_results", (table) => {
    table.timestamp("last_optout_at").after("optout_attempts").nullable();
  });
  await knex.schema.table("qa_custom_brokers", (table) => {
    table.timestamp("last_optout_at").after("optout_attempts").nullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.table("onerep_scan_results", (table) => {
    table.dropColumn("last_optout_at");
  });
  await knex.schema.table("qa_custom_brokers", (table) => {
    table.dropColumn("last_optout_at");
  });
}
