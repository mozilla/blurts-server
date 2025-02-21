/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("notifications", (table) => {
    table.increments("id").primary();
    table.string("notification_id").nullable();
    table.string("label").notNullable();
    table.text("title").notNullable();
    table.text("description").notNullable();
    table.string("small_image_path").notNullable();
    table.string("big_image_path").notNullable();
    table.string("cta_label").nullable();
    table.string("cta_link").nullable();
    table.string("audience").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("notifications");
}
