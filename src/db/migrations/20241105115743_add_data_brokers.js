/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export async function up(knex) {
  return knex.schema.createTable("onerep_data_brokers", (table) => {
    table.increments("id").primary();
    table.string("data_broker").notNullable().unique();
    table.string("status").notNullable();
    table.string("url").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  return knex.schema.dropTable("onerep_data_brokers");
}
