/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("email_subscriptions", function (table) {
    table.bigIncrements("id", { primaryKey: true });
    table
      .integer("subscriber_id")
      .references("subscribers.id")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("token").unique().notNullable();
    // For now not introducing an association table, treat this
    // like a slug (e.g. breach-alerts)
    table.string("list_id").notNullable();
    table.boolean("subscribed").notNullable().defaultTo(true);
    table.timestamp("updated_at").notNullable();

    // Unique subscriber_id/list_id combination key
    table.unique(["subscriber_id", "list_id"], {
      indexName: "subscriber_list_unique_idx",
    });
  });
  await knex.schema.createTable("email_subscription_events", function (table) {
    table.bigIncrements("id", { primaryKey: true });
    table
      .bigInteger("email_subscriptions_id")
      .references("email_subscriptions.id")
      .notNullable()
      .onDelete("CASCADE");
    table.datetime("created_at").notNullable();
    // Not using enum or constraints here, but be mindful of adding new sources
    // (app code defines explicit values, e.g. one_click|footer|bounce|settings)
    table.string("source").notNullable();
    table.string("event_type").notNullable();

    table.index(
      ["email_subscriptions_id", knex.raw("created_at desc")],
      "email_subscriptions_id_created_at_idx",
    );
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("email_subscription_events");
  await knex.schema.dropTableIfExists("email_subscriptions");
}
