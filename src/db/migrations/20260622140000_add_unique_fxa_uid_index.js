/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * MNTOR-4448: prevent recurrence of duplicate subscriber rows.
 *
 * A FxA account maps to exactly one subscriber, but nothing at the database
 * level enforced that, which allowed duplicate `fxa_uid` rows to accumulate.
 * This adds a UNIQUE index on `subscribers.fxa_uid`, partial on
 * `fxa_uid IS NOT NULL` so the many legitimately NULL rows (pre-FxA / unverified
 * signups) are unaffected.
 *
 * IMPORTANT: apply this only AFTER the duplicate-merge one-off
 * (src/scripts/one-offs/mergeDuplicateSubscribers.ts) has been run to
 * completion in the target environment. Index creation is intentionally left
 * transactional, so if any duplicate `fxa_uid` values remain it fails and rolls
 * back, acting as the final safety gate rather than corrupting data.
 *
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.raw(
    `CREATE UNIQUE INDEX subscribers_fxa_uid_unique_idx
       ON subscribers (fxa_uid)
       WHERE fxa_uid IS NOT NULL`,
  );
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.raw(`DROP INDEX IF EXISTS subscribers_fxa_uid_unique_idx`);
}
