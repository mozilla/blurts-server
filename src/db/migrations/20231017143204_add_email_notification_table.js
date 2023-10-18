/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema
    .createTable("email_notifications", table => {
      table.increments("id").primary();
      table.integer("subscriber_id").references("subscribers.id").notNullable();
      table.integer("breach_id").references("breaches.id").notNullable();
      table.boolean("appeared").notNullable().defaultTo(true);
      table.boolean("notified").notNullable().defaultTo(false);
      table.string("email"); //optional email
      table.string("notification_type").notNullable().defaultTo("incident"); // incident, monthly
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.index("subscriber_id");
      table.index("breach_id");
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("email_notifications");
}
