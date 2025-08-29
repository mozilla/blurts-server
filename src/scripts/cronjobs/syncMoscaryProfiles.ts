/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { logger } from "../../app/functions/server/logging";
import { getProfile } from "../../app/functions/server/moscary";
import { knexSubscribers, setMoscaryId } from "../../db/tables/subscribers";
import type { SubscriberRow } from "knex/types/tables";
import { UUID } from "crypto";
import { validate as validateUuid } from "uuid";
import pLimit from "p-limit";

interface SyncResult {
  totalSubscribers: number;
  successfulSyncs: number;
  failedSyncs: number;
  batchesProcessed: number;
}

// Configurable batch size with environment variable support
let BATCH_SIZE = parseInt(process.env.MOSCARY_SYNC_BATCH_SIZE ?? "100", 10);

if (Number.isNaN(BATCH_SIZE) || BATCH_SIZE <= 0) {
  BATCH_SIZE = 100;
  logger.warn(
    `Invalid MOSCARY_SYNC_BATCH_SIZE environment variable, using default: ${BATCH_SIZE}`,
  );
}

// Configurable concurrency limit with environment variable support
const CONCURRENCY_LIMIT = parseInt(
  process.env.MOSCARY_SYNC_CONCURRENCY_LIMIT ?? "10",
  10,
);

if (Number.isNaN(CONCURRENCY_LIMIT) || CONCURRENCY_LIMIT <= 0) {
  logger.warn(
    `Invalid MOSCARY_SYNC_CONCURRENCY_LIMIT environment variable, using default: 10`,
  );
}

/**
 * Get subscribers that have onerep_profile_id but no moscary_id
 * Uses keyset pagination to handle large datasets efficiently
 */
async function getSubscribersNeedingSync(
  lastProcessedId: number = 0,
  limit: number = BATCH_SIZE,
): Promise<SubscriberRow[]> {
  const subscribers = await knexSubscribers("subscribers")
    .select("*")
    .whereNotNull("onerep_profile_id")
    .whereNull("moscary_id")
    .where("id", ">", lastProcessedId) // Keyset pagination using id as cursor
    .orderBy("id") // Consistent ordering for pagination
    .limit(limit);

  logger.info("found_subscribers_needing_sync_batch", {
    count: subscribers.length,
    lastProcessedId,
    limit,
  });

  return subscribers;
}

/**
 * Get total count of subscribers needing sync
 */
async function getTotalSubscribersNeedingSync(): Promise<number> {
  const result = await knexSubscribers("subscribers")
    .count("id as count")
    .whereNotNull("onerep_profile_id")
    .whereNull("moscary_id")
    .first();

  // @ts-ignore: count type
  return parseInt(String(result?.count || 0), 10);
}

/**
 * Find Moscary profile by OneRep Profile ID
 * Uses the legacy lookup feature of Moscary API
 */
async function findMoscaryProfile(
  onerepProfileId: number,
): Promise<string | null> {
  try {
    // Use the OneRep Profile ID as the path parameter for legacy lookup
    const profile = await getProfile(onerepProfileId);

    // If we get here, the profile exists and we can return its UUID
    logger.info("found_moscary_profile", {
      onerepProfileId,
      moscaryId: profile.id,
    });

    return profile.id;
  } catch (error) {
    // If profile doesn't exist, the API will return 404
    if (error instanceof Error && error.message.includes("404")) {
      logger.info("moscary_profile_not_found", {
        onerepProfileId,
      });
      return null;
    }

    // Re-throw other errors
    throw error;
  }
}

/**
 * Update subscriber with Moscary ID
 */
async function updateSubscriberMoscaryId(
  subscriber: SubscriberRow,
  moscaryId: string,
): Promise<void> {
  // Validate that moscaryId is a proper UUID
  if (!validateUuid(moscaryId)) {
    logger.error("invalid_uuid_format", {
      subscriberId: subscriber.id,
      onerepProfileId: subscriber.onerep_profile_id,
      moscaryId,
    });
    throw new Error(`Invalid UUID format: ${moscaryId}`);
  }

  await setMoscaryId(subscriber, moscaryId as UUID);

  logger.info("updated_subscriber_moscary_id", {
    subscriberId: subscriber.id,
    onerepProfileId: subscriber.onerep_profile_id,
    moscaryId,
  });
}

/**
 * Process a single subscriber
 */
async function processSubscriber(
  subscriber: SubscriberRow,
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!subscriber.onerep_profile_id) {
      logger.warn("subscriber_missing_onerep_profile_id", {
        subscriberId: subscriber.id,
      });
      return { success: false };
    }

    const moscaryId = await findMoscaryProfile(subscriber.onerep_profile_id);

    if (moscaryId) {
      await updateSubscriberMoscaryId(subscriber, moscaryId);
      return { success: true };
    } else {
      logger.info("no_moscary_profile_found_for_subscriber", {
        subscriberId: subscriber.id,
        onerepProfileId: subscriber.onerep_profile_id,
      });
      return { success: false };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    logger.error("failed_to_sync_subscriber", {
      subscriberId: subscriber.id,
      onerepProfileId: subscriber.onerep_profile_id,
      error: errorMessage,
    });

    return { success: false, error: errorMessage };
  }
}

/**
 * Process a single batch of subscribers with parallelization
 */
async function processBatch(
  subscribers: SubscriberRow[],
  batchNumber: number,
): Promise<{ successful: number; failed: number }> {
  logger.info("processing_batch", {
    batchNumber,
    batchSize: subscribers.length,
    concurrencyLimit: CONCURRENCY_LIMIT,
  });

  // Create a concurrency limiter
  const limit = pLimit(CONCURRENCY_LIMIT);

  // Process subscribers in parallel with concurrency control
  const results = await Promise.allSettled(
    subscribers.map((subscriber) => limit(() => processSubscriber(subscriber))),
  );

  let successful = 0;
  let failed = 0;

  // Count results
  for (const result of results) {
    if (result.status === "fulfilled") {
      if (result.value.success) {
        successful++;
      } else {
        failed++;
      }
    } else {
      failed++;
    }
  }

  logger.info("batch_completed", {
    batchNumber,
    successful,
    failed,
    concurrencyLimit: CONCURRENCY_LIMIT,
  });

  return { successful, failed };
}

/**
 * Main sync function with batching
 */
async function syncMoscaryProfiles(): Promise<SyncResult> {
  const result: SyncResult = {
    totalSubscribers: 0,
    successfulSyncs: 0,
    failedSyncs: 0,
    batchesProcessed: 0,
  };

  try {
    // Get total count first
    const totalSubscribers = await getTotalSubscribersNeedingSync();
    result.totalSubscribers = totalSubscribers;

    if (totalSubscribers === 0) {
      logger.info("no_subscribers_needing_sync");
      return result;
    }

    logger.info("starting_moscary_profile_sync", {
      totalSubscribers,
      batchSize: BATCH_SIZE,
    });

    let lastProcessedId = 0;
    let batchNumber = 0;
    let hasMoreData = true;

    while (hasMoreData) {
      batchNumber++;

      try {
        const subscribers = await getSubscribersNeedingSync(
          lastProcessedId,
          BATCH_SIZE,
        );

        if (subscribers.length === 0) {
          hasMoreData = false;
          break;
        }

        const batchResult = await processBatch(subscribers, batchNumber);
        result.successfulSyncs += batchResult.successful;
        result.failedSyncs += batchResult.failed;
        result.batchesProcessed++;

        // Update cursor to the last processed ID
        lastProcessedId = subscribers[subscribers.length - 1].id;

        // Small delay between batches
        if (subscribers.length === BATCH_SIZE) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        logger.error("batch_processing_error", {
          batchNumber,
          lastProcessedId,
          error: errorMessage,
        });

        // If we encounter an error, retry with a smaller batch size
        if (BATCH_SIZE > 50) {
          BATCH_SIZE = Math.floor(BATCH_SIZE / 2);
          logger.warn(
            `Reducing batch size to ${BATCH_SIZE} and retrying batch ${batchNumber}...`,
          );
          continue;
        } else {
          // If batch size is already small, move cursor forward and continue
          hasMoreData = false;
        }
      }
    }

    logger.info("completed_moscary_profile_sync", {
      totalSubscribers: result.totalSubscribers,
      successfulSyncs: result.successfulSyncs,
      failedSyncs: result.failedSyncs,
      batchesProcessed: result.batchesProcessed,
      lastProcessedId,
    });

    return result;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger.error("fatal_error_in_moscary_profile_sync", {
      error: errorMessage,
    });
    throw error;
  }
}

// Run the script
try {
  logger.info("starting_moscary_profile_sync_script", {
    batchSize: BATCH_SIZE,
    concurrencyLimit: CONCURRENCY_LIMIT,
  });

  const result = await syncMoscaryProfiles();

  logger.info("moscary_profile_sync_script_completed", {
    totalSubscribers: result.totalSubscribers,
    successfulSyncs: result.successfulSyncs,
    failedSyncs: result.failedSyncs,
    batchesProcessed: result.batchesProcessed,
  });

  await tearDown();
} catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  logger.error("moscary_profile_sync_script_failed", {
    error: errorMessage,
  });
  await tearDown();
}

async function tearDown() {
  await knexSubscribers.destroy();
  process.exit(0);
}

export { syncMoscaryProfiles, findMoscaryProfile };
