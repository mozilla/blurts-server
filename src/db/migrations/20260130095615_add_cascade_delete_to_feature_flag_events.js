/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  // Have to drop the existing foreign key constraint
  // and recreate with ON DELETE CASCADE -- can't just update action
  await knex.schema.alterTable("feature_flag_events", (table) => {
    table.dropForeign(["created_by_subscriber_id"]);
    table
      .foreign("created_by_subscriber_id")
      .references("id")
      .inTable("subscribers")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  // Revert to the original foreign key without CASCADE
  await knex.schema.alterTable("feature_flag_events", (table) => {
    table.dropForeign(["created_by_subscriber_id"]);
    table
      .foreign("created_by_subscriber_id")
      .references("id")
      .inTable("subscribers");
  });
}
