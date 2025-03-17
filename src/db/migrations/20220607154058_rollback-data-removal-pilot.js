/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.table("subscribers", (table) => {
    table.dropColumns(
      "kid",
      "removal_would_pay",
      "removal_enrolled_time",
      "removal_optout",
    );
  });

  await knex.schema.dropTableIfExists("removal_pilot");
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  const hasTable = await knex.schema.hasTable("removal_pilot");

  if (!hasTable) {
    await knex.schema.createTable("removal_pilot", (table) => {
      table.increments("id").primary();
      table.string("name").unique();
      table.integer("enrolled_users").defaultTo(0);
    });
  }

  await knex.schema.table("subscribers", (table) => {
    table.integer("kid");
    table.boolean("removal_would_pay");
    table.timestamp("removal_enrolled_time");
    table.boolean("removal_optout").defaultTo(false);
  });
}
