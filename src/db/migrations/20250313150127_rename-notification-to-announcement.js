/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.renameTable("notifications", "announcements").then(() => {
    return knex.schema.alterTable("announcements", (table) => {
      table.renameColumn("notification_id", "announcement_id");
    });
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.renameTable("announcements", "notifications").then(() => {
    return knex.schema.alterTable("notifications", (table) => {
      table.renameColumn("announcement_id", "notification_id");
    });
  });
}
