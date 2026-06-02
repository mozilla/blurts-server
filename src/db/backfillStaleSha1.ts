/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { type Knex } from "knex";
import { getSha1 } from "../utils/fxa";
import { logger } from "../app/functions/server/logging";

/**
 * Realigns a stored SHA1 hash column with the SHA1 of its current (lower-cased)
 * email column. Before MNTOR-5219, changing an email did not update the
 * corresponding hash, leaving stale lookup keys (see MNTOR-5244). This helper
 * scans the table in keyset-paginated batches and rewrites only the rows whose
 * stored hash no longer matches `getSha1(lower(email))`.
 *
 * Hashes are recomputed in-process with the same `getSha1` the app uses, so the
 * result is guaranteed to match application logic and the routine does not
 * depend on the database having the `pgcrypto` extension.
 */
export type BackfillStaleSha1Options = {
  /** Knex connection scoped to the database containing the table. */
  knex: Knex;
  /** Table to scan, e.g. "subscribers" or "email_addresses". */
  table: string;
  /** Email column to hash, e.g. "primary_email" or "email". */
  emailColumn: string;
  /** Stored hash column to realign, e.g. "primary_sha1" or "sha1". */
  hashColumn: string;
  /** Primary key column used for keyset pagination. Defaults to "id". */
  idColumn?: string;
  /**
   * Optional boolean column to restrict the scan to verified rows (only
   * verified hashes are used for breach matching), e.g. "primary_verified".
   */
  verifiedColumn?: string;
  /** Rows fetched per batch. Defaults to 10,000. */
  batchSize?: number;
  /** When true, counts stale rows without writing any updates. */
  dryRun?: boolean;
};

export type BackfillStaleSha1Result = {
  /** Number of rows examined. */
  scanned: number;
  /** Number of rows whose stored hash did not match the current email. */
  stale: number;
  /** Number of rows actually rewritten (0 when dryRun is true). */
  updated: number;
};

export async function backfillStaleSha1({
  knex,
  table,
  emailColumn,
  hashColumn,
  idColumn = "id",
  verifiedColumn,
  batchSize = 10_000,
  dryRun = false,
}: BackfillStaleSha1Options): Promise<BackfillStaleSha1Result> {
  let cursor: number | null = null;
  let scanned = 0;
  let stale = 0;
  let updated = 0;

  for (;;) {
    const query = knex(table)
      .select(idColumn, emailColumn, hashColumn)
      .orderBy(idColumn, "asc")
      .limit(batchSize);
    if (cursor !== null) {
      query.where(idColumn, ">", cursor);
    }
    if (verifiedColumn) {
      query.andWhere(verifiedColumn, true);
    }

    const rows = (await query) as Array<Record<string, unknown>>;
    if (rows.length === 0) {
      break;
    }

    scanned += rows.length;
    cursor = rows[rows.length - 1][idColumn] as number;

    const staleRows = rows.filter((row) => {
      const email = row[emailColumn] as string | null;
      if (!email) {
        return false;
      }
      return row[hashColumn] !== getSha1(email.toLowerCase());
    });
    stale += staleRows.length;

    if (!dryRun && staleRows.length > 0) {
      await knex.transaction(async (trx) => {
        for (const row of staleRows) {
          const email = row[emailColumn] as string;
          await trx(table)
            .where(idColumn, row[idColumn] as number)
            .update({ [hashColumn]: getSha1(email.toLowerCase()) });
        }
      });
      updated += staleRows.length;
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
