/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Note: this index was created on heroku, stage, and prod by hand
// Use this statement to "fake" the migration:
// INSERT INTO knex_migrations (name, batch, migration_time) values ('20190713193852_add_email_sha1_index.js', (SELECT max(batch) + 1 FROM knex_migrations), '2019-07-13 19:52:42.000-05');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table("email_addresses", (table) => {
    table.index("sha1", "email_addresses_sha1_idx");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table("email_addresses", (table) => {
    table.dropIndex("sha1", "email_addresses_sha1_idx");
  });
}
