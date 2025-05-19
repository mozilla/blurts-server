/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  // Legacy feature flags that were assigned a fake feature flag user
  // in the feature_flag_events table, were associated with a subscriber
  // without an FxA UID. Now that we want to delete those subcribers,
  // the foreign key on this table is blocking it.
  // Thus, this changes the assciated fake feature flag user to one with
  // an FxA UID.

  const previousFakeFirstuser = await knex("feature_flag_events")
    .join(
      "subscribers",
      "feature_flag_events.created_by_subscriber_id",
      "subscribers.id",
    )
    .first("created_by_subscriber_id")
    .whereLike("primary_email", "%@mozilla.com")
    .andWhere("feature_flag_events.created_at", "<", "2025-03-06");
  if (!previousFakeFirstuser) {
    console.log(
      "No existing feature flag events with fake authors, so nothing to migrate.",
    );
    return;
  }

  const newFakeFirstuser = await knex("subscribers")
    .select("id")
    .whereLike("primary_email", "%@mozilla.com")
    .whereNotNull("fxa_uid")
    .first();
  if (!newFakeFirstuser) {
    throw new Error(
      "Couldn't find a subscriber with an @mozilla.com email address and an FxA UID to attribute pre-existing feature flags to.",
    );
  }

  console.log({ previousFakeFirstuser, newFakeFirstuser });
  await knex("feature_flag_events")
    .update("created_by_subscriber_id", newFakeFirstuser.id)
    .where(
      "created_by_subscriber_id",
      previousFakeFirstuser.created_by_subscriber_id,
    )
    // We ran the migration `20250225111207_add_feature_flag_events` on March 5th,
    // so no feature flags should have been assigned to `previousFakeFirstuser` after that date:
    .andWhere("created_at", "<", "2025-03-06");
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  const existingFeatureFlagEvents = await knex("feature_flag_events").select(
    "*",
  );

  if (existingFeatureFlagEvents.length === 0) {
    console.log(
      "No existing feature flag events with fake authors, so nothing to migrate.",
    );
    return;
  }

  const previousFakeFirstuser = await knex("subscribers")
    .select("id")
    .whereLike("primary_email", "%@mozilla.com")
    .first();
  if (!previousFakeFirstuser) {
    throw new Error(
      "Couldn't find a subscriber with an @mozilla.com email address that pre-existing feature flags were attributed to.",
    );
  }

  const newFakeFirstuser = await knex("subscribers")
    .select("id")
    .whereLike("primary_email", "%@mozilla.com")
    .whereNotNull("fxa_uid")
    .first();
  if (!newFakeFirstuser) {
    throw new Error(
      "Couldn't find a subscriber with an @mozilla.com email address and an FxA UID that pre-existing feature flags were attributed to.",
    );
  }

  await knex("feature_flag_events")
    .update("created_by_subscriber_id", previousFakeFirstuser.id)
    .where("created_by_subscriber_id", newFakeFirstuser.id)
    .andWhere("created_at", "<", "2025-03-06");
}
