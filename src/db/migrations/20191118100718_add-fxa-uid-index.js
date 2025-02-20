/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Note: this index was created on stage and prod by hand
// Use this statement to "fake" the migration:
// INSERT INTO knex_migrations (name, batch, migration_time) values ('20191118100718_add-fxa-uid-index.js', (SELECT max(batch) + 1 FROM knex_migrations), '2019-11-18 11:00:00.000-05');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table("subscribers", (table) => {
    table.index("fxa_uid", "subscribers_fxa_uid_idx");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table("subscribers", (table) => {
    table.dropIndex("fxa_uid", "subscribers_fxa_uid_idx");
  });
}
