/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.dropTableIfExists("subscriber_churns");
  await knex.schema.dropTableIfExists("subscriber_coupons");
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.createTable("subscriber_churns", function (table) {
    table.increments("id").primary();
    table.string("userid").unique();
    table.string("customer").unique();
    table.string("plan_id");
    table.string("product_id");
    table.string("intervl");
    table.string("nickname");
    table.timestamp("created");
    table.timestamp("current_period_end");
  });
  await knex.schema.createTable("subscriber_coupons", (table) => {
    table.increments("id").primary();
    table
      .integer("subscriber_id")
      .references("subscribers.id")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("coupon_code").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.unique(["subscriber_id", "coupon_code"]);
  });
}
