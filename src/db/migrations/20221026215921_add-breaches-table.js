/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("breaches", (table) => {
    table.increments("id").primary();
    table.string("name").defaultTo("").unique();
    table.string("title").defaultTo("");
    table.string("domain").defaultTo("");
    table.date("breach_date").notNullable();
    table.timestamp("added_date");
    table.timestamp("modified_date").defaultTo(knex.fn.now());
    table.integer("pwn_count").defaultTo(0);
    table.text("description").defaultTo("");
    table.string("logo_path").defaultTo("");
    table.specificType("data_classes", "character varying(255)[]");
    table.boolean("is_verified").defaultTo(false);
    table.boolean("is_fabricated").defaultTo(false);
    table.boolean("is_sensitive").defaultTo(false);
    table.boolean("is_retired").defaultTo(false);
    table.boolean("is_spam_list").defaultTo(false);
    table.boolean("is_malware").defaultTo(false);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("breaches");
}
