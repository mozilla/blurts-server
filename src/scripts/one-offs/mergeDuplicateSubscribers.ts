/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

import { knexSubscribers } from "../../db/tables/subscribers";
import {
  countDuplicateFxaUids,
  mergeDuplicateSubscribers,
} from "../../db/mergeDuplicateSubscribers";
import { logger } from "../../app/functions/server/logging";

/**
 * One-off maintenance script for MNTOR-4448.
 *
 * Merges duplicate `subscribers` rows that share an `fxa_uid` into a single
 * surviving row, re-parenting all child tables, then deleting the losers. See
 * src/db/mergeDuplicateSubscribers.ts for the full strategy. The merge is
 * idempotent and processed per-`fxa_uid` in its own transaction, so it is safe
 * to re-run or resume after an interruption.
 *
 * Run manually with tsx (intentionally not bundled into the cron image):
 *   tsx --tsconfig tsconfig.cronjobs.json src/scripts/one-offs/mergeDuplicateSubscribers.ts --dry-run
 *   tsx --tsconfig tsconfig.cronjobs.json src/scripts/one-offs/mergeDuplicateSubscribers.ts --batch-size=2000
 *
 * The script logs a pre-flight duplicate count, runs the merge, then logs a
 * post-run audit count. On a real run that audit count must reach 0 before the
 * partial unique index on `subscribers.fxa_uid` is applied. The equivalent
 * standalone SQL is:
 *
 *   SELECT count(*) FROM (
 *     SELECT fxa_uid FROM subscribers
 *     WHERE fxa_uid IS NOT NULL
 *     GROUP BY fxa_uid HAVING count(*) > 1
 *   ) d;
 *
 * Rollout sequence (MNTOR-4448):
 *   1. Land this script + src/db/mergeDuplicateSubscribers.ts + the migration
 *      20260622140000_add_unique_fxa_uid_index.js (nothing runs automatically).
 *   2. Stage: run with --dry-run, review the logged per-group actions and
 *      summary, then run for real.
 *   3. Prod: run for real via an SRE ticket (cf. the prior SVCSE-2699).
 *   4. Confirm the post-run audit count is 0 in the target environment, THEN
 *      apply the unique-index migration there.
 *
 * Ticket landscape: this resolves MNTOR-4448 on its own.
 *   - MNTOR-4475 (delete NULL-fxa_uid rows) is NOT required: the index is
 *     partial on `fxa_uid IS NOT NULL`, so NULL rows never conflict.
 *   - MNTOR-4499 (cascade-delete feature_flag_events.created_by_subscriber_id)
 *     was cancelled, so the merge repoints that non-cascading FK itself.
 */
const dryRun = process.argv.includes("--dry-run");
const batchSizeArg = process.argv
  .find((arg) => arg.startsWith("--batch-size="))
  ?.split("=")[1];
const batchSize = batchSizeArg ? parseInt(batchSizeArg, 10) : undefined;

if (
  batchSize !== undefined &&
  (!Number.isInteger(batchSize) || batchSize < 1)
) {
  logger.error("merge_duplicate_subscribers_invalid_batch_size", {
    batchSizeArg,
  });
  process.exit(1);
}

async function run() {
  const before = await countDuplicateFxaUids(knexSubscribers);
  logger.info("merge_duplicate_subscribers_start", {
    dryRun,
    batchSize,
    duplicateFxaUidsBefore: before,
  });

  const result = await mergeDuplicateSubscribers({
    knex: knexSubscribers,
    batchSize,
    dryRun,
  });

  // On a dry run nothing was committed, so the audit count is unchanged.
  const after = await countDuplicateFxaUids(knexSubscribers);
  logger.info("merge_duplicate_subscribers_summary", {
    dryRun,
    duplicateFxaUidsBefore: before,
    duplicateFxaUidsAfter: after,
    ...result,
  });
}

run()
  .then(async () => {
    await knexSubscribers.destroy();
    process.exit(0);
  })
  .catch(async (error) => {
    logger.error("merge_duplicate_subscribers_failed", { error });
    await knexSubscribers.destroy();
    process.exit(1);
  });
