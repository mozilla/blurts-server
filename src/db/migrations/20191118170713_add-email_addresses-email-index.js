/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function up(knex) {
  return knex.schema.table("email_addresses", (table) => {
    table.index("email", "email_addresses_email_idx");
  });
}

export function down(knex) {
  return knex.schema.table("email_addresses", (table) => {
    table.dropIndex("email", "email_addresses_email_idx");
  });
}
