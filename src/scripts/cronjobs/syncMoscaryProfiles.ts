/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { logger } from "../../app/functions/server/logging";
import { getProfile } from "../../app/functions/server/moscary";
import { knexSubscribers, setMoscaryId } from "../../db/tables/subscribers";
import type { SubscriberRow } from "knex/types/tables";
import { UUID } from "crypto";

interface SyncResult {
  totalSubscribers: number;
  successfulSyncs: number;
  failedSyncs: number;
}

/**
 * Get subscribers that have onerep_profile_id but no moscary_id
 */
async function getSubscribersNeedingSync(): Promise<SubscriberRow[]> {
  const subscribers = await knexSubscribers("subscribers")
    .select("*")
    .whereNotNull("onerep_profile_id")
    .whereNull("moscary_id");

  logger.info("found_subscribers_needing_sync", {
    count: subscribers.length,
  });

  return subscribers;
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
  await setMoscaryId(subscriber, moscaryId as UUID);

  logger.info("updated_subscriber_moscary_id", {
    subscriberId: subscriber.id,
    onerepProfileId: subscriber.onerep_profile_id,
    moscaryId,
  });
}

/**
 * Main sync function
 */
async function syncMoscaryProfiles(): Promise<SyncResult> {
  const result: SyncResult = {
    totalSubscribers: 0,
    successfulSyncs: 0,
    failedSyncs: 0,
  };

  try {
    const subscribers = await getSubscribersNeedingSync();
    result.totalSubscribers = subscribers.length;

    if (subscribers.length === 0) {
      logger.info("no_subscribers_needing_sync");
      return result;
    }

    logger.info("starting_moscary_profile_sync", {
      totalSubscribers: subscribers.length,
    });

    for (const subscriber of subscribers) {
      try {
        if (!subscriber.onerep_profile_id) {
          logger.warn("subscriber_missing_onerep_profile_id", {
            subscriberId: subscriber.id,
          });
          continue;
        }

        const moscaryId = await findMoscaryProfile(
          subscriber.onerep_profile_id,
        );

        if (moscaryId) {
          await updateSubscriberMoscaryId(subscriber, moscaryId);
          result.successfulSyncs++;
        } else {
          logger.info("no_moscary_profile_found_for_subscriber", {
            subscriberId: subscriber.id,
            onerepProfileId: subscriber.onerep_profile_id,
          });
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);

        logger.error("failed_to_sync_subscriber", {
          subscriberId: subscriber.id,
          onerepProfileId: subscriber.onerep_profile_id,
          error: errorMessage,
        });

        result.failedSyncs++;
      }
    }

    logger.info("completed_moscary_profile_sync", {
      totalSubscribers: result.totalSubscribers,
      successfulSyncs: result.successfulSyncs,
      failedSyncs: result.failedSyncs,
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

/**
 * Script entry point
 */
async function main() {
  try {
    logger.info("starting_moscary_profile_sync_script");

    const result = await syncMoscaryProfiles();

    logger.info("moscary_profile_sync_script_completed", {
      totalSubscribers: result.totalSubscribers,
      successfulSyncs: result.successfulSyncs,
      failedSyncs: result.failedSyncs,
    });

    process.exit(0);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger.error("moscary_profile_sync_script_failed", {
      error: errorMessage,
    });
    process.exit(1);
  }
}

// Run the script if called directly
if (require.main === module) {
  main().catch((error) => {
    console.error("Unhandled error:", error);
    process.exit(1);
  });
}

export { syncMoscaryProfiles, findMoscaryProfile };
