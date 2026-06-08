/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { type Knex } from "knex";
import { getSha1 } from "../utils/fxa";
import { logger } from "../app/functions/server/logging";

/**
 * Realigns the stored SHA1 hashes (`subscribers.primary_sha1` and
 * `email_addresses.sha1`) with the SHA1 of their current (lower-cased) email.
 * Before MNTOR-5219, changing an email did not update the corresponding hash,
 * leaving stale lookup keys (see MNTOR-5244). This helper scans each table in
 * keyset-paginated batches and rewrites only the rows whose stored hash no
 * longer matches `getSha1(lower(email))`.
 *
 * Hashes are recomputed in-process with the same `getSha1` the app uses, so the
 * result is guaranteed to match application logic and the routine does not
 * depend on the database having the `pgcrypto` extension.
 *
 * The write is an optimistic compare-and-set keyed on the email value read at
 * scan time, so a row whose email changes concurrently (between our read and
 * our write) is skipped rather than overwritten with a hash of a stale email.
 */

type BackfillTarget = {
  table: string;
  emailColumn: string;
  hashColumn: string;
  verifiedColumn: string;
};

/**
 * The two (and only two) places a stale email-derived SHA1 can hide. Both live
 * in the same database, keyed by an `id` column, and only verified hashes are
 * used for breach matching, so the scan is restricted to verified rows.
 *
 * Typed as plain strings (rather than `as const`) so the dynamic
 * `knex(table).update(...)` stays on knex's untyped query builder instead of
 * resolving to a specific typed table.
 */
const TARGETS = {
  subscribers: {
    table: "subscribers",
    emailColumn: "primary_email",
    hashColumn: "primary_sha1",
    verifiedColumn: "primary_verified",
  },
  emailAddresses: {
    table: "email_addresses",
    emailColumn: "email",
    hashColumn: "sha1",
    verifiedColumn: "verified",
  },
} satisfies Record<string, BackfillTarget>;

export type BackfillStaleSha1Options = {
  /** Knex connection for the database holding both tables. */
  knex: Knex;
  /** Rows fetched per batch. Defaults to 10,000. */
  batchSize?: number;
  /** When true, counts stale rows without writing any updates. */
  dryRun?: boolean;
};

export type BackfillCount = {
  /** Number of rows examined. */
  scanned: number;
  /** Number of rows whose stored hash did not match the current email. */
  stale: number;
  /**
   * Number of rows actually rewritten (0 when dryRun is true). May be less than
   * `stale` if a row's email changed concurrently and the compare-and-set
   * write was skipped.
   */
  updated: number;
};

export type BackfillStaleSha1Result = {
  subscribers: BackfillCount;
  emailAddresses: BackfillCount;
};

async function backfillTarget(
  knex: Knex,
  target: BackfillTarget,
  batchSize: number,
  dryRun: boolean,
): Promise<BackfillCount> {
  const { table, emailColumn, hashColumn, verifiedColumn } = target;
  let cursor: number | null = null;
  let scanned = 0;
  let stale = 0;
  let updated = 0;

  while (true) {
    const query = knex(table)
      .select("id", emailColumn, hashColumn)
      .where(verifiedColumn, true)
      .orderBy("id", "asc")
      .limit(batchSize);
    if (cursor !== null) {
      query.andWhere("id", ">", cursor);
    }

    const rows = (await query) as Array<Record<string, unknown>>;
    if (rows.length === 0) {
      break;
    }

    scanned += rows.length;
    cursor = rows[rows.length - 1].id as number;

    const staleRows = rows.filter((row) => {
      const email = row[emailColumn] as string | null;
      if (!email) {
        return false;
      }
      return row[hashColumn] !== getSha1(email.toLowerCase());
    });
    stale += staleRows.length;

    if (!dryRun && staleRows.length > 0) {
      // Tally writes inside the transaction and only fold the total into the
      // outer counter once it commits, so a rollback (e.g. the affected > 1
      // guard throwing) never reports rows that weren't actually persisted.
      // `committed` is assigned after the loop, so it stays unread unless the
      // transaction reaches commit; if the callback throws, the `await` rejects
      // and the `updated +=` below is skipped entirely.
      let committed = 0;
      await knex.transaction(async (trx) => {
        let pending = 0;
        for (const row of staleRows) {
          const id = row.id as number;
          const email = row[emailColumn] as string;
          // Compare-and-set: only rewrite the hash if the email still matches
          // the value we read and hashed. If the email changed concurrently
          // (e.g. updatePrimaryEmail ran between our read and this write), the
          // predicate fails, we skip the row, and we avoid clobbering the
          // freshly-written correct hash with a hash of the stale email.
          const affected = await trx(table)
            .where("id", id)
            .andWhere(emailColumn, email)
            .update({ [hashColumn]: getSha1(email.toLowerCase()) });
          // The predicate is keyed on the primary key, so this can only ever
          // match one row; anything else means our assumptions are wrong and we
          // should roll back rather than keep writing.
          if (affected > 1) {
            throw new Error(
              `backfillStaleSha1: expected to update at most 1 ${table} row ` +
                `(id=${id}), but updated ${affected}`,
            );
          }
          pending += affected;
        }
        committed = pending;
      });
      updated += committed;
    }

    logger.info("backfill_stale_sha1_batch", {
      table,
      dryRun,
      cursor,
      scanned,
      stale,
      updated,
    });
  }

  logger.info("backfill_stale_sha1_complete", {
    table,
    dryRun,
    scanned,
    stale,
    updated,
  });

  return { scanned, stale, updated };
}

export async function backfillStaleSha1({
  knex,
  batchSize = 10_000,
  dryRun = false,
}: BackfillStaleSha1Options): Promise<BackfillStaleSha1Result> {
  const subscribers = await backfillTarget(
    knex,
    TARGETS.subscribers,
    batchSize,
    dryRun,
  );
  const emailAddresses = await backfillTarget(
    knex,
    TARGETS.emailAddresses,
    batchSize,
    dryRun,
  );

  return { subscribers, emailAddresses };
}
