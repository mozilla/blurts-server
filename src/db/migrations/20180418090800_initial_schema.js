/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function up(knex) {
  return knex.schema.createTable("subscribers", (table) => {
    table.increments("id").primary();
    table.string("sha1");
    table.string("email");
    table.string("verification_token").unique();
    table.boolean("verified").defaultTo(false);
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("subscribers");
}
