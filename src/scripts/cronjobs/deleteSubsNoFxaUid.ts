/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/**
 * This script deletes all rows in the "subscribers" table where fxa_uid is null/undefined/empty
 *
 * This is a one-off script that runs once in stage and prod
 */

import createDbConnection from "../../db/connect";

// Make batch size mutable
let BATCH_SIZE = 1000;

/**
 * This script deletes all rows in the "subscribers" table where fxa_uid is null/undefined/empty
 */
(async () => {
  try {
    const args = process.argv.slice(2);
    const dryRun = args.includes("--dry-run");

    console.log("Starting deletion of subscribers without fxa_uid...");
    const knex = createDbConnection();

    // Simple log helper
    const log = (message: string) => {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] ${message}`);
    };

    // Get count before deletion
    const beforeCountResult = await knex("subscribers")
      .count("id as count")
      .first();
    // @ts-ignore: count type
    const beforeCount = parseInt(String(beforeCountResult?.count || 0), 10);
    log(`Total subscribers before deletion: ${beforeCount}`);

    // Get count of records to be deleted
    const toDeleteCountQuery = knex("subscribers")
      .whereNull("fxa_uid")
      .orWhere("fxa_uid", "");

    const toDeleteCountResult = await toDeleteCountQuery
      .clone()
      .count("id as count")
      .first();
    // @ts-ignore: count type
    const toDeleteCount = parseInt(String(toDeleteCountResult?.count || 0), 10);
    log(`Subscribers to be deleted: ${toDeleteCount}`);

    if (dryRun) {
      log("Dry run mode enabled.  No deletions will be performed.");
      process.exit(0);
    }

    // Delete in batches
    let totalDeleted = 0;
    let deletedInBatch = 0;
    let batchNumber = 0;

    do {
      batchNumber++;
      // Start a transaction for this batch
      const trx = await knex.transaction();

      try {
        // Get batch of IDs to delete
        const idsToDelete = await toDeleteCountQuery
          .clone()
          .transacting(trx)
          .select("id", "primary_email")
          .limit(BATCH_SIZE);

        if (idsToDelete.length === 0) {
          await trx.commit();
          break;
        }

        // Log summary of what's being deleted
        log(`Batch ${batchNumber}: Deleting ${idsToDelete.length} subscribers`);

        // Delete this batch
        if (!dryRun) {
          deletedInBatch = await knex("subscribers")
            .transacting(trx)
            .whereIn(
              "id",
              idsToDelete.map((row) => row.id),
            )
            .del();
        }

        await trx.commit();

        totalDeleted += deletedInBatch;
        log(
          `Batch ${batchNumber}: Deleted ${deletedInBatch} subscribers (Total: ${totalDeleted})`,
        );

        // Small delay to reduce database pressure
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        await trx.rollback();
        log(`Error in batch ${batchNumber}: ${error}`);

        // If we encounter an error, retry with a smaller batch size
        if (BATCH_SIZE > 100) {
          BATCH_SIZE = Math.floor(BATCH_SIZE / 2);
          log(`Reducing batch size to ${BATCH_SIZE} and retrying...`);
          continue;
        } else {
          throw error;
        }
      }
    } while (deletedInBatch > 0);

    log(`Successfully deleted ${totalDeleted} subscribers without fxa_uid`);

    // Get count after deletion
    const afterCountResult = await knex("subscribers")
      .count("id as count")
      .first();
    // @ts-ignore: count type
    const afterCount = parseInt(String(afterCountResult?.count || 0), 10);
    log(`Total subscribers after deletion: ${afterCount}`);

    process.exit(0);
  } catch (error) {
    console.error("Fatal error deleting subscribers without fxa_uid:", error);
    process.exit(1);
  }
})();
