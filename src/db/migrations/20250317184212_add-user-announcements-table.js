/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
    .alterTable("announcements", (table) => {
      table.unique(["announcement_id"]);
    })
    .then(() => {
      return knex.schema.createTable("user_announcements", (table) => {
        table.increments("id").primary();
        table.integer("user_id").notNullable();
        table
          .string("announcement_id")
          .references("announcements.announcement_id")
          .notNullable()
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table.string("status").notNullable(); // seen, cleared, clicked, new
        table.timestamp("seen_at").nullable();
        table.timestamp("cleared_at").nullable();
        table.boolean("is_history").defaultTo(false);
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        table.unique(["user_id", "announcement_id"]); // ensure uniqueness of the user_announcement pair (user_id, announcement_id)
      });
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists("user_announcements").then(() => {
    return knex.schema.alterTable("announcements", (table) => {
      table.dropUnique(["announcement_id"]);
    });
  });
}
