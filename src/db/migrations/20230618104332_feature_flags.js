/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("feature_flags", (table) => {
    table.string("name").primary().unique();
    table.boolean("is_enabled").defaultTo(false);
    // @ts-ignore TODO: Determine if the following line should be changed to
    // `defaultTo` or remain unchanged as initially deployed.
    table.text("description").default("");
    table.specificType("dependencies", "character varying(255)[]");
    table.specificType("allow_list", "character varying(255)[]");
    table.specificType("wait_list", "character varying(255)[]");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("modified_at").defaultTo(knex.fn.now());
    table.timestamp("expired_at");
    table.timestamp("deleted_at");
    table.string("owner");
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("feature_flags");
}
