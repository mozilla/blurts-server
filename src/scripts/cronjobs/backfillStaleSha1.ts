/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

import { knexSubscribers } from "../../db/tables/subscribers";
import { knexEmailAddresses } from "../../db/tables/emailAddresses";
import { backfillStaleSha1 } from "../../db/backfillStaleSha1";
import { logger } from "../../app/functions/server/logging";

/**
 * One-off maintenance script for MNTOR-5244.
 *
 * Realigns `subscribers.primary_sha1` and `email_addresses.sha1` with the SHA1
 * of their current (lower-cased) email. Subscribers who changed their email
 * before the MNTOR-5219 fix retained a hash for their old email, which causes
 * the breach-alert notifier (matches on stored hashes) to disagree with the
 * dashboard (re-hashes the live email).
 *
 * Run manually, not on a schedule. Examples:
 *   tsx --tsconfig tsconfig.cronjobs.json src/scripts/cronjobs/backfillStaleSha1.ts --dry-run
 *   tsx --tsconfig tsconfig.cronjobs.json src/scripts/cronjobs/backfillStaleSha1.ts --batch-size=5000
 *
 * The backfill is idempotent (only rows whose hash differs are rewritten), so
 * it is safe to re-run or resume.
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
  logger.error("backfill_stale_sha1_invalid_batch_size", { batchSizeArg });
  process.exit(1);
}

async function run() {
  logger.info("backfill_stale_sha1_start", { dryRun, batchSize });

  const primary = await backfillStaleSha1({
    knex: knexSubscribers,
    table: "subscribers",
    emailColumn: "primary_email",
    hashColumn: "primary_sha1",
    verifiedColumn: "primary_verified",
    batchSize,
    dryRun,
  });

  const secondary = await backfillStaleSha1({
    knex: knexEmailAddresses,
    table: "email_addresses",
    emailColumn: "email",
    hashColumn: "sha1",
    verifiedColumn: "verified",
    batchSize,
    dryRun,
  });

  logger.info("backfill_stale_sha1_summary", { dryRun, primary, secondary });
}

run()
  .then(async () => {
    // knexSubscribers and knexEmailAddresses share the same connection
    // singleton, so destroying one tears down the pool.
    await knexSubscribers.destroy();
    process.exit(0);
  })
  .catch(async (error) => {
    logger.error("backfill_stale_sha1_failed", { error });
    await knexSubscribers.destroy();
    process.exit(1);
  });
