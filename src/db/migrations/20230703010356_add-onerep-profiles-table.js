/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("onerep_profiles", (table) => {
    table.increments("id").primary();
    table
      .integer("onerep_profile_id")
      .references("subscribers.onerep_profile_id")
      .nullable();
    // @ts-ignore TODO: The type Knex.CreateTableBuilder is missing `varchar`:
    // https://github.com/knex/knex/blob/master/types/index.d.ts#L2420
    // The method is implemented, but the method `string` is recommended.
    table.varchar("first_name");
    // @ts-ignore TODO: The type Knex.CreateTableBuilder is missing `varchar`:
    // https://github.com/knex/knex/blob/master/types/index.d.ts#L2420
    // The method is implemented, but the method `string` is recommended.
    table.varchar("last_name");
    // @ts-ignore TODO: The type Knex.CreateTableBuilder is missing `varchar`:
    // https://github.com/knex/knex/blob/master/types/index.d.ts#L2420
    // The method is implemented, but the method `string` is recommended.
    table.varchar("city_name");
    // @ts-ignore TODO: The type Knex.CreateTableBuilder is missing `varchar`:
    // https://github.com/knex/knex/blob/master/types/index.d.ts#L2420
    // The method is implemented, but the method `string` is recommended.
    table.varchar("state_code");
    table.date("date_of_birth");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.index("onerep_profile_id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("onerep_profiles");
}
