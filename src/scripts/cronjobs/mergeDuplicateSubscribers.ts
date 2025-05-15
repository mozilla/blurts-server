/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Merge Duplicate Subscribers Script
 * This script is meant to be run as a one-off cronjob.
 *
 * This script implements the cohort-based strategy for merging duplicate subscriber entries
 * where multiple subscribers share the same fxa_uid. The script:
 * 1. Identifies all duplicate fxa_uids
 * 2. Categorizes them into 4 cohorts based on paid status and activity
 * 3. Processes each cohort with appropriate merge logic
 * 4. Updates related tables to point to the winning subscriber record
 * 5. Performs all operations in transactions with logging
 */

import path from "path";
import { Command } from "commander";
import fs from "fs";
import { Knex } from "knex";
import createDbConnection from "../../db/connect";
import type { SubscriberRow } from "knex/types/tables";
import { logger } from "../../app/functions/server/logging";
import { fileURLToPath } from "url";

// Initialize database connection
const knex = createDbConnection();

// Define cohort enum
enum Cohort {
  PaidActive = 1,
  PaidInactive = 2,
  FreeActive = 3,
  FreeInactive = 4,
}

// Configuration options
interface MergeOptions {
  dryRun: boolean;
  batchSize: number;
  recentThresholdMonths: number;
  specificCohort?: Cohort;
  verbose: boolean;
  resumeFromCheckpoint?: string;
}

// Interfaces for tracking results
interface ProcessingResult {
  fxaUid: string;
  cohort: Cohort;
  winnerId: number;
  loserIds: number[];
  fieldsUpdated: string[];
  relatedTablesUpdated: Record<string, number>;
  error?: string;
}

interface BatchResult {
  processed: number;
  skipped: number;
  errors: Record<string, Error>;
  results: ProcessingResult[];
}

interface Checkpoint {
  lastProcessedFxaUid: string;
  cohort: Cohort;
  processedCount: number;
  timestamp: string;
}

// List of tables with foreign keys to subscribers.id
const relatedTables = [
  "email_addresses",
  "subscriber_email_preferences",
  "subscriber_coupons",
  "attributions",
  "email_notifications",
  "google_analytics_clients",
];

// Type for subscription data in FxA profile
interface FxaProfileData {
  subscriptions?: Array<{
    capability?: string[];
  }>;
}

// Type for database count results
interface CountResult {
  count: number | string;
}

/**
 * Identifies all duplicate fxa_uids in the database
 */
async function findDuplicateFxaUids(): Promise<string[]> {
  const duplicates = await knex("subscribers")
    .select("fxa_uid")
    .whereNotNull("fxa_uid")
    .groupBy("fxa_uid")
    .havingRaw("COUNT(*) > 1");

  // Filter out null values and return only strings
  return duplicates
    .map((d) => d.fxa_uid)
    .filter((id): id is string => id !== null);
}

/**
 * Determines if a subscriber is considered paid based on fxa_profile_json
 */
function isPaidSubscriber(subscriber: SubscriberRow): boolean {
  if (!subscriber.fxa_profile_json) return false;

  try {
    const profile = subscriber.fxa_profile_json as FxaProfileData;
    // Check if the user has a monitor subscription
    return (
      Array.isArray(profile.subscriptions) &&
      profile.subscriptions.some(
        (sub) =>
          Array.isArray(sub.capability) && sub.capability.includes("monitor"),
      )
    );
  } catch {
    return false;
  }
}

/**
 * Determines if a subscriber is considered recently active
 */
function isRecentlyActive(
  subscriber: SubscriberRow,
  recentThresholdMonths: number,
): boolean {
  // Consider active if they have a sign_in_count > 0
  if (subscriber.sign_in_count && subscriber.sign_in_count > 0) {
    return true;
  }

  // Or if they've been updated recently
  if (subscriber.updated_at) {
    const recentDate = new Date();
    recentDate.setMonth(recentDate.getMonth() - recentThresholdMonths);
    return new Date(subscriber.updated_at) >= recentDate;
  }

  return false;
}

/**
 * Categorizes an fxa_uid into one of the four cohorts based on paid status and activity
 */
async function categorizeFxaUid(
  fxaUid: string,
  recentThresholdMonths: number,
): Promise<Cohort> {
  const subscribers = await knex("subscribers")
    .where({ fxa_uid: fxaUid })
    .select("*");

  if (subscribers.length === 0) {
    throw new Error(`No subscribers found for fxa_uid: ${fxaUid}`);
  }

  // Check if any of the subscribers is paid
  const isPaid = subscribers.some((sub) => isPaidSubscriber(sub));

  // Check if any of the subscribers is active
  const isActive = subscribers.some((sub) =>
    isRecentlyActive(sub, recentThresholdMonths),
  );

  if (isPaid && isActive) return Cohort.PaidActive;
  if (isPaid && !isActive) return Cohort.PaidInactive;
  if (!isPaid && isActive) return Cohort.FreeActive;
  return Cohort.FreeInactive;
}

/**
 * Identifies all duplicate fxa_uids and categorizes them into cohorts
 */
async function identifyAndCategorizeDuplicates(
  options: MergeOptions,
): Promise<Map<string, Cohort>> {
  const duplicateFxaUids = await findDuplicateFxaUids();

  logger.info("identify_duplicates", {
    count: duplicateFxaUids.length,
    dry_run: options.dryRun,
  });

  const cohortMap = new Map<string, Cohort>();

  for (const fxaUid of duplicateFxaUids) {
    try {
      const cohort = await categorizeFxaUid(
        fxaUid,
        options.recentThresholdMonths,
      );
      cohortMap.set(fxaUid, cohort);
    } catch (error) {
      logger.error("categorize_error", {
        fxa_uid: fxaUid,
        error: String(error),
      });
    }
  }

  // Log cohort statistics
  const cohortCounts = Array.from(
    { length: 4 },
    (_, i) => Array.from(cohortMap.values()).filter((c) => c === i + 1).length,
  );

  logger.info("cohort_statistics", {
    paid_active: cohortCounts[0],
    paid_inactive: cohortCounts[1],
    free_active: cohortCounts[2],
    free_inactive: cohortCounts[3],
  });

  return cohortMap;
}

/**
 * Checks if a subscriber has coupons
 */
async function hasCoupons(subscriberId: number): Promise<boolean> {
  const result = (await knex("subscriber_coupons")
    .where({ subscriber_id: subscriberId })
    .count("id as count")
    .first()) as CountResult | undefined;

  if (!result) return false;

  // Handle count value which could be a number or string depending on DB driver
  const countValue = result.count;
  if (typeof countValue === "number") return countValue > 0;
  if (typeof countValue === "string") return parseInt(countValue, 10) > 0;
  return false;
}

/**
 * Selects the "winner" subscriber record for a given fxa_uid based on cohort-specific rules
 */
async function selectWinnerSubscriber(
  fxaUid: string,
  _cohort: Cohort, // Unused but keep for future cohort-specific logic
): Promise<{
  winnerId: number;
  loserIds: number[];
  selectionReason: string;
}> {
  // Get all subscribers with this fxa_uid
  const subscribers = await knex("subscribers")
    .where({ fxa_uid: fxaUid })
    .select("*");

  if (subscribers.length <= 1) {
    return {
      winnerId: subscribers[0].id,
      loserIds: [],
      selectionReason: "single_record",
    };
  }

  // Add coupon information to each subscriber
  const subscribersWithCoupons = await Promise.all(
    subscribers.map(async (sub) => ({
      ...sub,
      hasCoupons: await hasCoupons(sub.id),
    })),
  );

  // Sort subscribers based on cohort-specific priorities
  const sortedSubscribers = [...subscribersWithCoupons].sort((a, b) => {
    // 1. Prioritize subscribers with coupons
    if (a.hasCoupons && !b.hasCoupons) return -1;
    if (!a.hasCoupons && b.hasCoupons) return 1;

    // 2. Prioritize subscribers with onerep_profile_id
    const aHasOnerepId = !!a.onerep_profile_id;
    const bHasOnerepId = !!b.onerep_profile_id;

    if (aHasOnerepId && !bHasOnerepId) return -1;
    if (!aHasOnerepId && bHasOnerepId) return 1;

    if (aHasOnerepId && bHasOnerepId) {
      // If both have onerep_profile_id, prioritize by updated_at
      const aUpdatedAt = a.updated_at ? new Date(a.updated_at) : new Date(0);
      const bUpdatedAt = b.updated_at ? new Date(b.updated_at) : new Date(0);

      if (aUpdatedAt > bUpdatedAt) return -1;
      if (aUpdatedAt < bUpdatedAt) return 1;
    }

    // 3. If no onerep_profile_id or both have it with same updated_at,
    // prioritize by most recent updated_at
    const aUpdatedAt = a.updated_at ? new Date(a.updated_at) : new Date(0);
    const bUpdatedAt = b.updated_at ? new Date(b.updated_at) : new Date(0);

    if (aUpdatedAt > bUpdatedAt) return -1;
    if (aUpdatedAt < bUpdatedAt) return 1;

    // 4. Tie-breaker: newest created_at
    const aCreatedAt = a.created_at ? new Date(a.created_at) : new Date(0);
    const bCreatedAt = b.created_at ? new Date(b.created_at) : new Date(0);

    if (aCreatedAt > bCreatedAt) return -1;
    if (aCreatedAt < bCreatedAt) return 1;

    // 5. Final tie-breaker: highest id
    return b.id - a.id;
  });

  const winner = sortedSubscribers[0];
  const losers = sortedSubscribers.slice(1);

  // Determine selection reason
  let selectionReason = "default";
  if (winner.hasCoupons) {
    selectionReason = "has_coupons";
  } else if (winner.onerep_profile_id) {
    selectionReason = "has_onerep_profile_id";
  } else if (winner.updated_at) {
    selectionReason = "most_recent_updated_at";
  } else if (winner.created_at) {
    selectionReason = "newest_created_at";
  } else {
    selectionReason = "highest_id";
  }

  return {
    winnerId: winner.id,
    loserIds: losers.map((l) => l.id),
    selectionReason,
  };
}

// Type for field updates
type FieldUpdates = Record<string, string | number | boolean | Date | null>;

/**
 * Merges data from loser records into the winner record based on cohort-specific rules
 */
async function mergeSubscriberData(
  winnerId: number,
  loserIds: number[],
  _cohort: Cohort, // Unused but keep for future cohort-specific logic
  trx: Knex.Transaction,
): Promise<{
  fieldsUpdated: string[];
  updatedValues: FieldUpdates;
}> {
  // If no losers, nothing to merge
  if (loserIds.length === 0) {
    return { fieldsUpdated: [], updatedValues: {} };
  }

  // Get winner and loser records
  const subscriberRows = await trx("subscribers")
    .whereIn("id", [winnerId, ...loserIds])
    .select("*");

  const winner = subscriberRows.find((s) => s.id === winnerId);
  const losers = subscriberRows.filter((s) => s.id !== winnerId);

  if (!winner) {
    throw new Error(`Winner subscriber not found: ${winnerId}`);
  }

  const updates: FieldUpdates = {};
  const fieldsUpdated: string[] = [];

  // Sum sign_in_count from all records
  const totalSignInCount = [winner, ...losers].reduce(
    (sum, sub) => sum + (sub.sign_in_count || 0),
    0,
  );

  if (totalSignInCount !== winner.sign_in_count) {
    updates.sign_in_count = totalSignInCount;
    fieldsUpdated.push("sign_in_count");
  }

  // Take the oldest created_at
  const oldestCreatedAt = [winner, ...losers].reduce((oldest, sub) => {
    if (!sub.created_at) return oldest;
    if (!oldest) return sub.created_at;
    return new Date(sub.created_at) < new Date(oldest)
      ? sub.created_at
      : oldest;
  }, winner.created_at);

  if (oldestCreatedAt !== winner.created_at) {
    updates.created_at = oldestCreatedAt;
    fieldsUpdated.push("created_at");
  }

  // For timestamps, take the latest non-null value
  const timestampFields = [
    "breaches_last_shown",
    "churn_prevention_email_sent_at",
    "first_broker_removal_email_sent",
    "monthly_monitor_report_at",
  ] as const;

  for (const field of timestampFields) {
    const fieldValue = winner[field as keyof SubscriberRow];

    const latestTimestamp = [winner, ...losers].reduce((latest, sub) => {
      const value = sub[field as keyof SubscriberRow];
      if (!value) return latest;
      if (!latest) return value;
      return new Date(value as Date) > new Date(latest as Date)
        ? value
        : latest;
    }, fieldValue);

    if (latestTimestamp !== fieldValue) {
      updates[field] = latestTimestamp as Date;
      fieldsUpdated.push(field);
    }
  }

  // For boolean flags, true if any is true
  const booleanFields = ["primary_verified", "all_emails_to_primary"] as const;

  for (const field of booleanFields) {
    const fieldValue = winner[field as keyof SubscriberRow] as boolean;
    const anyTrue = [winner, ...losers].some(
      (sub) => (sub[field as keyof SubscriberRow] as boolean) === true,
    );

    if (anyTrue && !fieldValue) {
      updates[field] = true;
      fieldsUpdated.push(field);
    }
  }

  // If any updates, apply them and update updated_at
  if (Object.keys(updates).length > 0) {
    // Always update the updated_at field
    const now = new Date();
    updates.updated_at = now;
    fieldsUpdated.push("updated_at");

    // @ts-ignore knex typings are not working well with dynamic updates
    await trx("subscribers").where("id", winnerId).update(updates);
  }

  return { fieldsUpdated, updatedValues: updates };
}

/**
 * Re-parents email addresses from loser subscribers to the winner
 */
async function handleEmailAddresses(
  winnerId: number,
  loserIds: number[],
  _cohort: Cohort, // Unused but keep for future cohort-specific logic
  trx: Knex.Transaction,
): Promise<number> {
  // Get winner's primary email
  const winner = await trx("subscribers")
    .where("id", winnerId)
    .select("primary_email")
    .first();

  if (!winner) {
    throw new Error(`Winner subscriber not found: ${winnerId}`);
  }

  // Get loser subscribers' primary emails
  const losers = await trx("subscribers")
    .whereIn("id", loserIds)
    .select("id", "primary_email", "primary_verified");

  // Get existing email addresses for the winner
  const winnerEmails = await trx("email_addresses")
    .where("subscriber_id", winnerId)
    .select("email");

  const winnerEmailSet = new Set(winnerEmails.map((e) => e.email));

  // Add losers' primary emails to email_addresses if they don't exist for winner
  let emailsAdded = 0;

  for (const loser of losers) {
    // Skip if
    // the primary email is null or
    // it's the same as the winner's primary email or
    // already exists in winner's email_addresses table
    if (
      !loser.primary_email ||
      winner.primary_email === loser.primary_email ||
      winnerEmailSet.has(loser.primary_email)
    ) {
      continue;
    }

    // Add primary email as a secondary email for the winner
    await trx("email_addresses").insert({
      subscriber_id: winnerId,
      email: loser.primary_email,
      verified: loser.primary_verified,
      // @ts-ignore knex.fn.now() results in it being set to a date
      created_at: trx.fn.now(),
      // @ts-ignore knex.fn.now() results in it being set to a date
      updated_at: trx.fn.now(),
      verification_token: "", // Empty string instead of null
    });

    emailsAdded++;
  }

  // Re-parent existing email addresses from losers to winner
  // Skip emails that would conflict with winner's existing emails
  const updateResult = (await trx("email_addresses")
    .whereIn("subscriber_id", loserIds)
    .whereNotIn("email", Array.from(winnerEmailSet))
    .update({
      subscriber_id: winnerId,
      // @ts-ignore knex.fn.now() results in it being set to a date
      updated_at: trx.fn.now(),
    })
    .count("* as count")
    .first()) as CountResult | undefined;

  // Extract count from the result safely
  let moveCount = 0;
  if (updateResult && updateResult.count !== undefined) {
    const countValue = updateResult.count;
    if (typeof countValue === "number") moveCount = countValue;
    else if (typeof countValue === "string")
      moveCount = parseInt(countValue, 10);
  }

  return emailsAdded + moveCount;
}

/**
 * Re-parents records from related tables to point to the winner subscriber
 */
async function handleRelatedTables(
  winnerId: number,
  loserIds: number[],
  cohort: Cohort,
  trx: Knex.Transaction,
): Promise<Record<string, number>> {
  const results: Record<string, number> = {};

  // Handle email addresses separately due to special logic
  results.email_addresses = await handleEmailAddresses(
    winnerId,
    loserIds,
    cohort,
    trx,
  );

  // For each related table, re-parent records from losers to winner
  for (const table of relatedTables) {
    // Skip email_addresses as we handled it separately
    if (table === "email_addresses") continue;

    try {
      // all tables have unique constraints on subscriber_id, we need to check if winner already has a record
      const winnerHasRecord = await trx(table)
        .where("subscriber_id", winnerId)
        .first();

      if (winnerHasRecord) {
        // If winner already has a record, delete loser records
        await trx(table).whereIn("subscriber_id", loserIds).delete();

        results[table] = 0; // We didn't re-parent any, just deleted
      } else {
        // If winner doesn't have a record, re-parent the first loser record
        const firstLoserRecord = await trx(table)
          .whereIn("subscriber_id", loserIds)
          .first();

        if (firstLoserRecord) {
          await trx(table).where("id", firstLoserRecord.id).update({
            subscriber_id: winnerId,
            // @ts-ignore knex.fn.now() results in it being set to a date
            updated_at: trx.fn.now(),
          });

          // Delete any remaining loser records
          await trx(table)
            .whereIn("subscriber_id", loserIds)
            .whereNot("id", firstLoserRecord.id)
            .delete();

          results[table] = 1;
        } else {
          results[table] = 0;
        }
      }
    } catch (error) {
      logger.error("handle_related_table_error", {
        table,
        winner_id: winnerId,
        loser_ids: loserIds,
        error: String(error),
      });
      results[table] = -1; // Error
    }
  }

  return results;
}

/**
 * Processes a single fxa_uid, merging all duplicate records
 */
async function processFxaUid(
  fxaUid: string,
  cohort: Cohort,
  options: MergeOptions,
): Promise<ProcessingResult> {
  const result: ProcessingResult = {
    fxaUid,
    cohort,
    winnerId: 0,
    loserIds: [],
    fieldsUpdated: [],
    relatedTablesUpdated: {},
  };

  try {
    // Select winner and losers
    const { winnerId, loserIds, selectionReason } =
      await selectWinnerSubscriber(fxaUid, cohort);

    result.winnerId = winnerId;
    result.loserIds = loserIds;

    if (options.verbose) {
      logger.info("winner_selected", {
        fxa_uid: fxaUid,
        cohort,
        winner_id: winnerId,
        loser_ids: loserIds,
        selection_reason: selectionReason,
      });
    }

    // Skip if no losers to merge
    if (loserIds.length === 0) {
      return result;
    }

    // In dry run mode, just return the selection without making changes
    if (options.dryRun) {
      return result;
    }

    // Perform the merge in a transaction
    await knex.transaction(async (trx) => {
      // Merge subscriber data
      const { fieldsUpdated, updatedValues } = await mergeSubscriberData(
        winnerId,
        loserIds,
        cohort,
        trx,
      );

      result.fieldsUpdated = fieldsUpdated;

      if (options.verbose && fieldsUpdated.length > 0) {
        logger.info("fields_updated", {
          fxa_uid: fxaUid,
          winner_id: winnerId,
          fields: fieldsUpdated,
          values: updatedValues,
        });
      }

      // Handle related tables
      const relatedTablesUpdated = await handleRelatedTables(
        winnerId,
        loserIds,
        cohort,
        trx,
      );

      result.relatedTablesUpdated = relatedTablesUpdated;

      if (options.verbose) {
        logger.info("related_tables_updated", {
          fxa_uid: fxaUid,
          winner_id: winnerId,
          tables: relatedTablesUpdated,
        });
      }

      // Delete loser records
      const deletedCount = await trx("subscribers")
        .whereIn("id", loserIds)
        .delete();

      if (options.verbose) {
        logger.info("losers_deleted", {
          fxa_uid: fxaUid,
          count: deletedCount,
          loser_ids: loserIds,
        });
      }
    });

    return result;
  } catch (error) {
    logger.error("process_fxa_uid_error", {
      fxa_uid: fxaUid,
      cohort,
      error: String(error),
    });

    result.error = String(error);
    return result;
  }
}

/**
 * Processes a batch of duplicate fxa_uids
 */
async function processBatch(
  fxaUids: string[],
  cohortMap: Map<string, Cohort>,
  options: MergeOptions,
): Promise<BatchResult> {
  const result: BatchResult = {
    processed: 0,
    skipped: 0,
    errors: {},
    results: [],
  };

  for (const fxaUid of fxaUids) {
    const cohort = cohortMap.get(fxaUid);

    if (!cohort) {
      result.skipped++;
      continue;
    }

    try {
      const processResult = await processFxaUid(fxaUid, cohort, options);
      result.results.push(processResult);

      if (processResult.error) {
        result.errors[fxaUid] = new Error(processResult.error);
      } else {
        result.processed++;
      }
    } catch (error) {
      result.errors[fxaUid] = error as Error;
      logger.error("batch_process_error", {
        fxa_uid: fxaUid,
        error: String(error),
      });
    }
  }

  return result;
}

/**
 * Saves a checkpoint to a file
 */
function saveCheckpoint(
  lastProcessedFxaUid: string,
  cohort: Cohort,
  processedCount: number,
): string {
  const checkpoint: Checkpoint = {
    lastProcessedFxaUid,
    cohort,
    processedCount,
    timestamp: new Date().toISOString(),
  };

  const filename = `merge-duplicates-checkpoint-${new Date()
    .toISOString()
    .replace(/:/g, "-")
    .replace(/\./g, "-")}.json`;

  const checkpointPath = path.join(process.cwd(), filename);

  fs.writeFileSync(checkpointPath, JSON.stringify(checkpoint, null, 2));

  return checkpointPath;
}

/**
 * Loads a checkpoint from a file
 */
function loadCheckpoint(checkpointFile: string): Checkpoint {
  const checkpointPath = path.join(process.cwd(), checkpointFile);

  if (!fs.existsSync(checkpointPath)) {
    throw new Error(`Checkpoint file not found: ${checkpointPath}`);
  }

  const checkpointContent = fs.readFileSync(checkpointPath, "utf8");
  return JSON.parse(checkpointContent) as Checkpoint;
}

/**
 * Main loop
 */
async function run(options: MergeOptions): Promise<void> {
  logger.info("merge_duplicates_start", {
    options,
  });

  try {
    // Step 1: Identify and categorize duplicates
    // TODO: is it necessary to be cached? With redis? maybe..
    const cohortMap = await identifyAndCategorizeDuplicates(options);

    // Filter fxa_uids by cohort if specified
    let fxaUids = Array.from(cohortMap.keys());
    let startIndex = 0;
    let totalProcessed = 0;

    if (options.specificCohort) {
      fxaUids = fxaUids.filter(
        (id) => cohortMap.get(id) === options.specificCohort,
      );
      logger.info("filtered_by_cohort", {
        cohort: options.specificCohort,
        count: fxaUids.length,
      });
    }

    // Resume from checkpoint if specified
    if (options.resumeFromCheckpoint) {
      const checkpoint = loadCheckpoint(options.resumeFromCheckpoint);

      logger.info("resuming_from_checkpoint", {
        last_processed: checkpoint.lastProcessedFxaUid,
        cohort: checkpoint.cohort,
        processed_count: checkpoint.processedCount,
        timestamp: checkpoint.timestamp,
      });

      // Find the index of the last processed fxa_uid
      const lastIndex = fxaUids.findIndex(
        (id) => id === checkpoint.lastProcessedFxaUid,
      );

      if (lastIndex !== -1) {
        startIndex = lastIndex + 1;
        totalProcessed = checkpoint.processedCount;
      }
    }

    // Process in batches
    while (startIndex < fxaUids.length) {
      const batchFxaUids = fxaUids.slice(
        startIndex,
        startIndex + options.batchSize,
      );

      logger.info("processing_batch", {
        start: startIndex,
        end: startIndex + batchFxaUids.length,
        total: fxaUids.length,
        progress: ((startIndex / fxaUids.length) * 100).toFixed(2) + "%",
      });

      const batchResult = await processBatch(batchFxaUids, cohortMap, options);

      totalProcessed += batchResult.processed;

      logger.info("batch_complete", {
        processed: batchResult.processed,
        skipped: batchResult.skipped,
        errors: Object.keys(batchResult.errors).length,
        total_processed: totalProcessed,
      });

      // Save checkpoint after each batch
      if (batchFxaUids.length > 0 && !options.dryRun) {
        const lastFxaUid = batchFxaUids[batchFxaUids.length - 1];
        const checkpointPath = saveCheckpoint(
          lastFxaUid,
          cohortMap.get(lastFxaUid) as Cohort,
          totalProcessed,
        );

        logger.info("checkpoint_saved", { path: checkpointPath });
      }

      startIndex += options.batchSize;
    }

    logger.info("merge_duplicates_complete", {
      total_processed: totalProcessed,
      dry_run: options.dryRun,
    });
  } catch (error) {
    logger.error("merge_duplicates_error", {
      error: String(error),
    });
    throw error;
  } finally {
    // Close database connection
    await knex.destroy();
  }
}

// main execution, similar to `require.main === module`
const currentFilePath = fileURLToPath(import.meta.url); // Gets the full path of the current ES module
const scriptPath = process.argv[1]; // Gets the full path of the script executed by Node

if (currentFilePath === scriptPath) {
  // This block runs if the script is executed directly
  const program = new Command();

  program
    .name("merge-duplicate-subscribers")
    .description("Merge duplicate subscriber records with same fxa_uid")
    .option("--dry-run", "Simulate but don't execute changes", false)
    .option(
      "--batch-size <size>",
      "Number of records to process per batch",
      (val) => parseInt(val, 10),
      100,
    )
    .option("--cohort <number>", "Only process specific cohort (1-4)", (val) =>
      parseInt(val, 10),
    )
    .option(
      "--recent-threshold <months>",
      "Number of months to consider 'recent' for activity",
      (val) => parseInt(val, 10),
      6,
    )
    .option("--verbose", "Detailed logging", false)
    .option("--resume-from <checkpoint>", "Resume from a checkpoint file")
    .action(async (options) => {
      const mergeOptions: MergeOptions = {
        dryRun: options.dryRun,
        batchSize: options.batchSize,
        recentThresholdMonths: options.recentThreshold,
        specificCohort: options.cohort,
        verbose: options.verbose,
        resumeFromCheckpoint: options.resumeFrom,
      };

      try {
        await run(mergeOptions);
        process.exit(0);
      } catch (error) {
        console.error("Error:", error);
        process.exit(1);
      }
    });

  program.parse();
}

export {
  run,
  processFxaUid,
  selectWinnerSubscriber,
  mergeSubscriberData,
  handleRelatedTables,
  identifyAndCategorizeDuplicates,
  Cohort,
};

export type { MergeOptions };
