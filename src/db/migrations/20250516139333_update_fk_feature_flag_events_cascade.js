/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.alterTable("feature_flag_events", (table) => {
    // Drop the existing foreign key constraint
    table.dropForeign(
      ["created_by_subscriber_id"],
      "feature_flag_events_created_by_subscriber_id_foreign",
    );

    // Add the new foreign key constraint with ON UPDATE CASCADE and ON DELETE CASCADE
    // Explicitly naming the new constraint is good practice.
    table
      .foreign(
        "created_by_subscriber_id",
        "feature_flag_events_created_by_subscriber_id_fk_cascade",
      )
      .references("id")
      .inTable("subscribers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.alterTable("feature_flag_events", (table) => {
    // Drop the CASCADE foreign key constraint
    table.dropForeign(
      ["created_by_subscriber_id"],
      "feature_flag_events_created_by_subscriber_id_fk_cascade",
    );

    // Re-add the original foreign key constraint (defaulting to RESTRICT/NO ACTION)
    // Ensuring the original constraint name is used.
    table
      .foreign(
        "created_by_subscriber_id",
        "feature_flag_events_created_by_subscriber_id_foreign",
      )
      .references("id")
      .inTable("subscribers");
  });
}
