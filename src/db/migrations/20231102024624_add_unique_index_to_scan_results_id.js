/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  // Delete any duplicate rows, choosing the row that was inserted last.
  await knex.raw(`
    DELETE FROM onerep_scan_results R1
    USING onerep_scan_results R2
    WHERE R1.ctid > R2.ctid
    AND R1.onerep_scan_result_id = R2.onerep_scan_result_id`);
  return knex.schema.table("onerep_scan_results", (table) => {
    table.unique("onerep_scan_result_id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table("onerep_scan_results", (table) => {
    table.dropUnique(["onerep_scan_result_id"]);
  });
}
