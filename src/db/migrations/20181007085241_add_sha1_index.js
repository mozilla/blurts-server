/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Note: this index was created on heroku, stage, and prod by hand
// Use this statement to "fake" the migration:
// INSERT INTO knex_migrations (name, batch, migration_time) values ('20181007085241_add_sha1_index.js', 4, '2018-10-07 08:52:42.000-05');
export function up(knex) {
  return knex.schema.table("subscribers", (table) => {
    table.index("sha1", "subscribers_sha1_idx");
  });
}

export function down(knex) {
  return knex.schema.table("subscribers", (table) => {
    table.dropIndex("sha1", "subscribers_sha1_idx");
  });
}
