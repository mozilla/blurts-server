/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function up(knex) {
  return knex.schema.table("subscribers", (table) => {
    table.index("signup_language", "subscribers_signup_language_idx");
  });
}

export function down(knex) {
  return knex.schema.table("email_addresses", (table) => {
    table.dropIndex("signup_language", "subscribers_signup_language_idx");
  });
}
