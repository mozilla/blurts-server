/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("feature_flag_events", (table) => {
    table.string("name").notNullable();
    table.boolean("is_enabled").notNullable().defaultTo(false);
    table.specificType("allow_list", "character varying(255)[]").nullable();
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.integer("created_by_subscriber_id").notNullable();
    table.index(["name", "created_at"]);

    table
      .foreign("created_by_subscriber_id")
      .references("id")
      .inTable("subscribers");
  });

  await knex.schema.createView("feature_flag_view", (view) => {
    view.columns([
      "name",
      "is_enabled",
      "allow_list",
      "updated_at",
      "last_updated_by_subscriber_id",
    ]);
    view.as(
      knex("feature_flag_events")
        .select(
          "name",
          "is_enabled",
          "allow_list",
          "created_at as updated_at",
          "created_by_subscriber_id as last_updated_by_subscriber_id",
        )
        .distinctOn("name")
        .orderBy([
          { column: "name", order: "asc" },
          { column: "created_at", order: "desc" },
        ]),
    );
  });

  const existingFeatureFlags = await knex("feature_flags").select(
    "name",
    "is_enabled",
    "allow_list",
    "modified_at as created_at",
  );

  if (existingFeatureFlags.length > 0) {
    const fakeFirstuser = await knex("subscribers")
      .select("id")
      .whereLike("primary_email", "%@mozilla.com")
      .first();
    if (!fakeFirstuser) {
      throw new Error(
        "Couldn't find a subscriber with an @mozilla.com email address to attribute pre-existing feature flags to.",
      );
    }
    await knex("feature_flag_events").insert(
      existingFeatureFlags.map((flag) => ({
        ...flag,
        created_by_subscriber_id: fakeFirstuser.id,
      })),
    );
  }
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  const existingFeatureFlags = await knex("feature_flag_view").select("*");
  await knex("feature_flags")
    .insert(
      existingFeatureFlags.map((flag) => ({
        name: flag.name,
        is_enabled: flag.is_enabled,
        allow_list: flag.allow_list,
        modified_at: flag.updated_at,
      })),
    )
    .onConflict("name")
    .merge();
  await knex.schema.dropViewIfExists("feature_flag_view");
  await knex.schema.dropTableIfExists("feature_flag_events");
}
