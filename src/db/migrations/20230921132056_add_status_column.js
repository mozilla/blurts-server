/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.alterTable("onerep_scans", (table) => {
    table.string("onerep_scan_status");
  });
  await knex("onerep_scans").update({ onerep_scan_status: "finished" });
  await knex.schema.alterTable("onerep_scans", (table) => {
    table.dropNullable("onerep_scan_status");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.alterTable("onerep_scans", (table) => {
    table.dropColumn("onerep_scan_status");
  });
}
