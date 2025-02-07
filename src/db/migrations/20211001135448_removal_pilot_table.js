/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function up(knex) {
  return knex.schema.createTable("removal_pilot", (table) => {
    table.increments("id").primary();
    table.string("name").unique();
    table.integer("enrolled_users").defaultTo(0);
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("removal_pilot");
}
