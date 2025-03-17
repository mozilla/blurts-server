/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.alterTable("email_notifications", (table) => {
    table
      .dropForeign("subscriber_id")
      .foreign("subscriber_id")
      .references("subscribers.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .dropForeign("breach_id")
      .foreign("breach_id")
      .references("breaches.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
  await knex.schema.alterTable("onerep_scan_results", (table) => {
    table
      .dropForeign("onerep_scan_id")
      .foreign("onerep_scan_id")
      .references("onerep_scans.onerep_scan_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
  await knex.schema.alterTable("onerep_scans", (table) => {
    table
      .dropForeign("onerep_profile_id")
      .foreign("onerep_profile_id")
      .references("subscribers.onerep_profile_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
  await knex.schema.alterTable("onerep_profiles", (table) => {
    table
      .dropForeign("onerep_profile_id")
      .foreign("onerep_profile_id")
      .references("subscribers.onerep_profile_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.alterTable("email_notifications", (table) => {
    table
      .dropForeign("subscriber_id")
      .foreign("subscriber_id")
      .references("subscribers.id");
    table
      .dropForeign("breach_id")
      .foreign("breach_id")
      .references("breaches.id");
  });
  await knex.schema.alterTable("onerep_scan_results", (table) => {
    table
      .dropForeign("onerep_scan_id")
      .foreign("onerep_scan_id")
      .references("onerep_scans.onerep_scan_id");
  });
  await knex.schema.alterTable("onerep_scans", (table) => {
    table
      .dropForeign("onerep_profile_id")
      .foreign("onerep_profile_id")
      .references("subscribers.onerep_profile_id");
  });
  await knex.schema.alterTable("onerep_profiles", (table) => {
    table
      .dropForeign("onerep_profile_id")
      .foreign("onerep_profile_id")
      .references("subscribers.onerep_profile_id");
  });
}
