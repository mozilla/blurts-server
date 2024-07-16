/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function up(knex) {
  return knex.schema.createTable("qa_custom_breaches", table => {
    table.string("emailHashPrefix").primary();
    table.string("Name").notNullable();
    table.string("Title").notNullable();
    table.string("Domain").notNullable();
    table.timestamp("BreachDate").defaultTo(knex.fn.now());
    table.timestamp("AddedDate").defaultTo(knex.fn.now());
    table.timestamp("ModifiedDate").defaultTo(knex.fn.now());
    table.bigInteger("PwnCount").notNullable();
    table.text("Description").notNullable();
    table.string("LogoPath").notNullable();
    table.jsonb("DataClasses").notNullable(); // Storing as JSONB
    table.boolean("IsVerified").notNullable();
    table.boolean("IsFabricated").notNullable();
    table.boolean("IsSensitive").notNullable();
    table.boolean("IsRetired").notNullable();
    table.boolean("IsSpamList").notNullable();
    table.boolean("IsMalware").notNullable();
    table.string("FaviconUrl").defaultTo(null);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("qa_custom_breaches");
}