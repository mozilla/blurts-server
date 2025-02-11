/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export async function up(knex) {
  return knex.schema.createTable("attributions", (table) => {
    table.increments("id").primary();
    table
      .integer("subscriber_id")
      .references("subscribers.id")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("type").notNullable();
    table.string("utm_source");
    table.string("utm_campaign");
    table.string("utm_medium");
    table.string("utm_term");
    table.string("entrypoint");
    table.jsonb("other_utm_parameters");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("modified_at").defaultTo(knex.fn.now());
    table.unique([
      "subscriber_id",
      "type",
      "utm_source",
      "utm_campaign",
      "utm_medium",
      "utm_term",
      "entrypoint",
    ]);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists("attributions");
}
