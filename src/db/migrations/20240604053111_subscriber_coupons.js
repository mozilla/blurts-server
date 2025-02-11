/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export async function up(knex) {
  return knex.schema.createTable("subscriber_coupons", (table) => {
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

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists("subscriber_coupons");
}
