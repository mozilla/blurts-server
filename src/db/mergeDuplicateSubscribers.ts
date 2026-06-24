/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { type Knex } from "knex";
import { v4 as uuidv4 } from "uuid";
import { getSha1 } from "../utils/fxa";
import { logger } from "../app/functions/server/logging";

/**
 * One-off merge of duplicate `subscribers` rows that share an `fxa_uid`
 * (MNTOR-4448). A FxA account is meant to map to exactly one subscriber row,
 * but an incident left ~45k accounts with 2-12 rows each. This routine folds
 * every duplicate set down to a single surviving ("winner") row, preserving
 * user-meaningful data, re-parenting all child rows, then deleting the losers.
 *
 * Change since incident: Monitor no longer has no paid tier, there is a single (free) population, so we
 * use one unified strategy for every duplicate set rather than per-cohort
 * logic:
 *   - Winner: most recent `updated_at`, then newest `created_at`, then highest
 *     `id`.
 *   - Aggregate onto the winner so nothing is silently lost: SUM
 *     `sign_in_count`, MAX the activity timestamps, OR the boolean flags, and
 *     carry each loser's distinct primary email over as a secondary
 *     `email_addresses` row.
 *
 * Child rows are re-parented to the winner. Where a table has a UNIQUE
 * constraint that the winner already satisfies, the colliding loser row is
 * dropped instead of re-parented (matching the constraint's NULL semantics).
 * Every child table is handled explicitly - including the two whose FK does
 * NOT cascade (`email_notifications`, `feature_flag_events`), so the final
 * `subscribers` delete never trips a FK constraint.
 *
 * Each duplicate set is processed in its own transaction, so a failure rolls
 * back only that set. The routine is idempotent: once a set is merged its
 * `fxa_uid` has a single row and is no longer selected, so re-running (or
 * resuming after an interruption) is safe.
 *
 * Run via src/scripts/one-offs/mergeDuplicateSubscribers.ts. To inspect the
 * scope before/after a run, the same query this routine iterates is:
 *
 *   SELECT count(*) FROM (
 *     SELECT fxa_uid FROM subscribers
 *     WHERE fxa_uid IS NOT NULL
 *     GROUP BY fxa_uid HAVING count(*) > 1
 *   ) d;
 *
 * A successful run must leave that count at 0 before the partial unique
 * index on `subscribers.fxa_uid` is applied.
 */

/**
 * Describes how to fold a child table's loser rows into the winner.
 *
 * `table` and the column names are typed as plain `string` (not literals) so
 * `knex(table)` stays on knex's untyped query builder. Several of these tables
 * are either absent from the typed `Tables` interface
 * (`subscriber_email_preferences`, `user_announcements`) or declared
 * append-only (`feature_flag_events`), and a literal would make the dynamic
 * `.update()` / `.del()` a type error.
 */
type ChildTable = {
  /** Child table name. */
  table: string;
  /** Column holding the FK to `subscribers.id`. */
  fkColumn: string;
  /**
   * Columns *besides* the FK that participate in the table's UNIQUE
   * constraint. A loser row collides (and is dropped rather than re-parented)
   * when its (FK, ...conflictColumns) key already exists on the winner *or* on
   * an earlier-kept loser in the same group.
   *
   *   - `null`  -> table has no UNIQUE constraint on the FK; always re-parent.
   *   - `[]`    -> UNIQUE is on the FK alone (one row per subscriber); at most
   *               one row across the winner and losers survives.
   *   - [cols]  -> UNIQUE is on (FK, ...cols).
   *
   * A NULL in any conflict column makes a row distinct, exactly as a default
   * (NULLS DISTINCT) UNIQUE index treats it, so such rows never collide.
   */
  conflictColumns: string[] | null;
  /**
   * Whether the FK cascades on delete. Informational only - we re-parent or
   * delete every child row explicitly regardless - but it documents which
   * tables would otherwise block the subscriber delete.
   */
  cascades: boolean;
};

/**
 * Every table with a foreign key to `subscribers`, verified against the
 * migrations. `email_addresses` is handled separately (see mergeEmailAddresses)
 * because it has no UNIQUE constraint and additionally absorbs loser primary
 * emails.
 */
const CHILD_TABLES: ChildTable[] = [
  {
    table: "subscriber_email_preferences",
    fkColumn: "subscriber_id",
    conflictColumns: [], // UNIQUE(subscriber_id): one row per subscriber
    cascades: true,
  },
  {
    table: "attributions",
    fkColumn: "subscriber_id",
    conflictColumns: [
      "type",
      "utm_source",
      "utm_campaign",
      "utm_medium",
      "utm_term",
      "entrypoint",
    ],
    cascades: true,
  },
  {
    table: "user_announcements",
    fkColumn: "user_id", // NOTE: this is not subscriber_id
    conflictColumns: ["announcement_id"],
    cascades: true,
  },
  {
    table: "email_subscriptions",
    fkColumn: "subscriber_id",
    conflictColumns: ["list_id"],
    cascades: true,
  },
  {
    table: "email_notifications",
    fkColumn: "subscriber_id",
    conflictColumns: ["breach_id", "email"],
    cascades: false, // FK does not cascade - must be cleared before delete
  },
  {
    table: "feature_flag_events",
    fkColumn: "created_by_subscriber_id",
    conflictColumns: null, // no UNIQUE constraint; admin/@mozilla.com only
    cascades: false, // FK does not cascade - must be repointed before delete
  },
];

/**
 * Plain-string table handles so the dynamic re-parent writes stay on knex's
 * untyped query builder. The typed `subscribers`/`email_addresses` update
 * signatures require `updated_at` and forbid changing the FK column, which the
 * merge intentionally does.
 */
const SUBSCRIBERS_TABLE: string = "subscribers";
const EMAIL_ADDRESSES_TABLE: string = "email_addresses";

export type MergeDuplicateSubscribersOptions = {
  /** Knex connection for the database holding `subscribers` and its children. */
  knex: Knex;
  /** Duplicate `fxa_uid` groups fetched per keyset page. Defaults to 1,000. */
  batchSize?: number;
  /** When true, performs the full merge in a transaction then rolls it back. */
  dryRun?: boolean;
};

/** Re-parent/delete tallies for a single child table. */
export type ChildTableCount = {
  /** Loser rows whose FK was repointed to the winner. */
  reparented: number;
  /** Loser rows dropped because they collided with an existing winner row. */
  deleted: number;
};

export type MergeDuplicateSubscribersResult = {
  /** Number of `fxa_uid` values that had more than one row. */
  duplicateGroups: number;
  /** Number of loser `subscribers` rows deleted. */
  subscribersDeleted: number;
  /** Loser primary emails carried over as new secondary `email_addresses`. */
  emailsAddedAsSecondary: number;
  /** Loser `email_addresses` rows repointed to the winner. */
  emailAddressesReparented: number;
  /** Loser `email_addresses` rows dropped as case-insensitive duplicates. */
  emailAddressesDropped: number;
  /** Per child-table re-parent/delete tallies. */
  perTable: Record<string, ChildTableCount>;
};

/** Sentinel used to roll back the per-group transaction in dry-run mode. */
class DryRunRollback extends Error {}

function toTime(value: unknown): number {
  if (!value) {
    return 0;
  }
  const time = new Date(value as string | Date).getTime();
  return Number.isNaN(time) ? 0 : time;
}

/**
 * Most recent `updated_at`, then newest `created_at`, then highest `id`.
 */
function pickWinner(
  rows: Array<Record<string, unknown>>,
): Record<string, unknown> {
  return [...rows].sort((a, b) => {
    const byUpdated = toTime(b.updated_at) - toTime(a.updated_at);
    if (byUpdated !== 0) {
      return byUpdated;
    }
    const byCreated = toTime(b.created_at) - toTime(a.created_at);
    if (byCreated !== 0) {
      return byCreated;
    }
    return (b.id as number) - (a.id as number);
  })[0];
}

/**
 * Build the winner-row update that absorbs the losers' data without ever
 * lowering a value: SUM sign-in counts, MAX activity timestamps, OR boolean
 * flags. `updated_at` is held at the winner's existing value (already the group
 * max) so the merge does not fabricate fresh activity.
 */
function buildWinnerUpdate(
  winner: Record<string, unknown>,
  all: Array<Record<string, unknown>>,
): Record<string, unknown> {
  const maxDate = (column: string): Date | null => {
    const times = all
      .map((row) => toTime(row[column]))
      .filter((time) => time > 0);
    return times.length > 0 ? new Date(Math.max(...times)) : null;
  };
  // true if any row is true, otherwise preserve the winner's own value (which
  // may be `null` for the legacy `all_emails_to_primary` flag).
  const orFlag = (column: string): unknown =>
    all.some((row) => row[column] === true) ? true : winner[column];

  return {
    sign_in_count: all.reduce(
      (sum, row) => sum + ((row.sign_in_count as number | null) ?? 0),
      0,
    ),
    monthly_monitor_report_at: maxDate("monthly_monitor_report_at"),
    churn_prevention_email_sent_at: maxDate("churn_prevention_email_sent_at"),
    fx_newsletter: orFlag("fx_newsletter"),
    monthly_monitor_report: orFlag("monthly_monitor_report"),
    first_broker_removal_email_sent: orFlag("first_broker_removal_email_sent"),
    all_emails_to_primary: orFlag("all_emails_to_primary"),
    // Required by the typed update; held at the existing (max) value.
    updated_at: winner.updated_at as Date,
  };
}

/**
 * Build the UNIQUE-constraint key for a row from its conflict columns. A NULL
 * (or missing) value in any column makes the row distinct under default
 * NULLS DISTINCT semantics, so it can never collide and is signalled with a
 * `null` key (always kept). With no conflict columns the key is constant, i.e.
 * the constraint is on the FK alone (one row per subscriber).
 */
function conflictKey(
  row: Record<string, unknown>,
  conflictColumns: string[],
): string | null {
  const parts: string[] = [];
  for (const column of conflictColumns) {
    const value = row[column];
    if (value === null || value === undefined) {
      return null;
    }
    parts.push(JSON.stringify(value));
  }
  return parts.join("\u0000");
}

/**
 * Re-parent a child table's loser rows to the winner, first dropping any that
 * would violate the table's UNIQUE constraint. A loser row is dropped when its
 * (FK, ...conflictColumns) key already exists on the winner *or* on an
 * earlier-kept loser in the same group - groups can hold up to a dozen rows, so
 * two losers can collide with each other even when the winner has no matching
 * row. Returns per-table tallies.
 */
async function mergeChildTable(
  trx: Knex.Transaction,
  child: ChildTable,
  winnerId: number,
  loserIds: number[],
): Promise<ChildTableCount> {
  // No UNIQUE constraint on the FK: every loser row re-parents unconditionally.
  if (child.conflictColumns === null) {
    const reparented = await trx(child.table)
      .whereIn(child.fkColumn, loserIds)
      .update({ [child.fkColumn]: winnerId });
    return { reparented, deleted: 0 };
  }

  const conflictColumns = child.conflictColumns;

  // Keys the winner already owns; a loser row matching one of these collides.
  const owned = new Set<string>();
  const winnerRows = await trx(child.table)
    .where(child.fkColumn, winnerId)
    .select("id", ...conflictColumns);
  for (const row of winnerRows) {
    const key = conflictKey(row as Record<string, unknown>, conflictColumns);
    if (key !== null) {
      owned.add(key);
    }
  }

  // Walk loser rows in a deterministic order, keeping the first row for each
  // key (against the winner and earlier losers) and dropping the rest so the
  // bulk re-parent below can never create a duplicate on the winner.
  const loserRows = await trx(child.table)
    .whereIn(child.fkColumn, loserIds)
    .orderBy("id", "asc")
    .select("id", ...conflictColumns);
  const collidingIds: number[] = [];
  for (const row of loserRows) {
    const key = conflictKey(row as Record<string, unknown>, conflictColumns);
    if (key === null) {
      continue;
    }
    if (owned.has(key)) {
      collidingIds.push(row.id as number);
    } else {
      owned.add(key);
    }
  }

  let deleted = 0;
  if (collidingIds.length > 0) {
    deleted = await trx(child.table).whereIn("id", collidingIds).del();
  }

  const reparented = await trx(child.table)
    .whereIn(child.fkColumn, loserIds)
    .update({ [child.fkColumn]: winnerId });

  return { reparented, deleted };
}

/**
 * Re-parent the losers' `email_addresses` to the winner (dropping
 * case-insensitive duplicates against what the winner already owns), then carry
 * each loser's distinct primary email over as a new secondary row.
 */
async function mergeEmailAddresses(
  trx: Knex.Transaction,
  winner: Record<string, unknown>,
  losers: Array<Record<string, unknown>>,
): Promise<{ reparented: number; dropped: number; addedAsSecondary: number }> {
  const winnerId = winner.id as number;
  const loserIds = losers.map((row) => row.id as number);

  // Emails the winner already owns: its primary plus any existing secondaries.
  const owned = new Set<string>();
  const winnerPrimary = (winner.primary_email as string | null) ?? "";
  if (winnerPrimary) {
    owned.add(winnerPrimary.toLowerCase());
  }
  const winnerEmailRows = await trx("email_addresses")
    .where("subscriber_id", winnerId)
    .select("email");
  for (const row of winnerEmailRows) {
    const email = (row.email as string | null) ?? "";
    if (email) {
      owned.add(email.toLowerCase());
    }
  }

  let reparented = 0;
  let dropped = 0;

  const loserEmailRows = await trx("email_addresses")
    .whereIn("subscriber_id", loserIds)
    .orderBy("id", "asc")
    .select("id", "email");
  for (const row of loserEmailRows) {
    const key = ((row.email as string | null) ?? "").toLowerCase();
    if (key && owned.has(key)) {
      await trx("email_addresses")
        .where("id", row.id as number)
        .del();
      dropped += 1;
    } else {
      await trx(EMAIL_ADDRESSES_TABLE)
        .where("id", row.id as number)
        .update({ subscriber_id: winnerId });
      if (key) {
        owned.add(key);
      }
      reparented += 1;
    }
  }

  let addedAsSecondary = 0;
  for (const loser of losers) {
    const email = (loser.primary_email as string | null) ?? "";
    const key = email.toLowerCase();
    if (!email || owned.has(key)) {
      continue;
    }
    await trx("email_addresses").insert({
      subscriber_id: winnerId,
      email,
      sha1: getSha1(key),
      verification_token: uuidv4(),
      verified: (loser.primary_verified as boolean | null) ?? false,
    });
    owned.add(key);
    addedAsSecondary += 1;
  }

  return { reparented, dropped, addedAsSecondary };
}

/**
 * Merge a single `fxa_uid` group: aggregate onto the winner, re-parent all
 * children, then delete the losers. Returns the tallies for the group.
 */
async function mergeGroup(
  trx: Knex.Transaction,
  winner: Record<string, unknown>,
  losers: Array<Record<string, unknown>>,
): Promise<Omit<MergeDuplicateSubscribersResult, "duplicateGroups">> {
  const winnerId = winner.id as number;
  const loserIds = losers.map((row) => row.id as number);

  await trx(SUBSCRIBERS_TABLE)
    .where("id", winnerId)
    .update(buildWinnerUpdate(winner, [winner, ...losers]));

  const emails = await mergeEmailAddresses(trx, winner, losers);

  const perTable: Record<string, ChildTableCount> = {};
  for (const child of CHILD_TABLES) {
    perTable[child.table] = await mergeChildTable(
      trx,
      child,
      winnerId,
      loserIds,
    );
  }

  const subscribersDeleted = await trx("subscribers")
    .whereIn("id", loserIds)
    .del();

  return {
    subscribersDeleted,
    emailsAddedAsSecondary: emails.addedAsSecondary,
    emailAddressesReparented: emails.reparented,
    emailAddressesDropped: emails.dropped,
    perTable,
  };
}

/**
 * Yields each `fxa_uid` that currently has more than one `subscribers` row,
 * paginated by keyset on `fxa_uid` so an interrupted run can resume and a large
 * result set is never loaded all at once.
 */
async function* iterateDuplicateFxaUids(
  knex: Knex,
  batchSize: number,
): AsyncGenerator<string> {
  let cursor: string | null = null;
  while (true) {
    const query = knex("subscribers")
      .whereNotNull("fxa_uid")
      .groupBy("fxa_uid")
      .havingRaw("count(*) > 1")
      .orderBy("fxa_uid", "asc")
      .limit(batchSize)
      .select("fxa_uid");
    if (cursor !== null) {
      query.andWhere("fxa_uid", ">", cursor);
    }

    const rows = (await query) as Array<{ fxa_uid: string }>;
    if (rows.length === 0) {
      break;
    }
    for (const row of rows) {
      yield row.fxa_uid;
    }
    cursor = rows[rows.length - 1].fxa_uid;
    if (rows.length < batchSize) {
      break;
    }
  }
}

/**
 * Counts `fxa_uid` values that currently have more than one `subscribers` row.
 * Used for the pre-flight scope check and the post-run audit (must be 0 before
 * the unique index is applied).
 */
export async function countDuplicateFxaUids(knex: Knex): Promise<number> {
  const duplicates = knex("subscribers")
    .whereNotNull("fxa_uid")
    .groupBy("fxa_uid")
    .havingRaw("count(*) > 1")
    .select("fxa_uid")
    .as("d");
  const [{ count }] = await knex
    .count<Array<{ count: string }>>("* as count")
    .from(duplicates);
  return Number(count);
}

function emptyChildTotals(): Record<string, ChildTableCount> {
  return Object.fromEntries(
    CHILD_TABLES.map((child) => [child.table, { reparented: 0, deleted: 0 }]),
  );
}

export async function mergeDuplicateSubscribers({
  knex,
  batchSize = 1_000,
  dryRun = false,
}: MergeDuplicateSubscribersOptions): Promise<MergeDuplicateSubscribersResult> {
  const total: MergeDuplicateSubscribersResult = {
    duplicateGroups: 0,
    subscribersDeleted: 0,
    emailsAddedAsSecondary: 0,
    emailAddressesReparented: 0,
    emailAddressesDropped: 0,
    perTable: emptyChildTotals(),
  };

  for await (const fxaUid of iterateDuplicateFxaUids(knex, batchSize)) {
    const rows = (await knex("subscribers")
      .where("fxa_uid", fxaUid)
      .orderBy("id", "asc")) as unknown as Array<Record<string, unknown>>;
    if (rows.length < 2) {
      // Already merged (e.g. by a previous interrupted run); nothing to do.
      continue;
    }

    const winner = pickWinner(rows);
    const losers = rows.filter((row) => row.id !== winner.id);

    // Captured from inside the transaction so dry-run can still report counts
    // after the rollback sentinel unwinds the transaction.
    let groupResult: Omit<
      MergeDuplicateSubscribersResult,
      "duplicateGroups"
    > | null = null;
    try {
      await knex.transaction(async (trx) => {
        groupResult = await mergeGroup(trx, winner, losers);
        if (dryRun) {
          throw new DryRunRollback();
        }
      });
    } catch (error) {
      if (!(error instanceof DryRunRollback)) {
        logger.error("merge_duplicate_subscribers_group_failed", {
          fxaUid,
          winnerId: winner.id,
          loserIds: losers.map((row) => row.id),
          // @ts-ignore error is unknown
          error,
        });
        throw error;
      }
    }

    if (groupResult === null) {
      continue;
    }
    const result: Omit<MergeDuplicateSubscribersResult, "duplicateGroups"> =
      groupResult;

    total.duplicateGroups += 1;
    total.subscribersDeleted += result.subscribersDeleted;
    total.emailsAddedAsSecondary += result.emailsAddedAsSecondary;
    total.emailAddressesReparented += result.emailAddressesReparented;
    total.emailAddressesDropped += result.emailAddressesDropped;
    for (const child of CHILD_TABLES) {
      total.perTable[child.table].reparented +=
        result.perTable[child.table].reparented;
      total.perTable[child.table].deleted +=
        result.perTable[child.table].deleted;
    }

    logger.info("merge_duplicate_subscribers_group", {
      dryRun,
      fxaUid,
      winnerId: winner.id,
      loserIds: losers.map((row) => row.id),
      ...result,
    });
  }

  logger.info("merge_duplicate_subscribers_complete", { dryRun, ...total });
  return total;
}
