/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Redis } from "ioredis";
import { BreachSyncService } from "./BreachSyncService";
import { dbToHibp, getBreachByName, HibpLikeDbBreach } from "../utils/hibp";
import {
  BREACHES_EXPIRY_SECONDS,
  REDIS_ALL_BREACHES_KEY,
} from "../db/redis/client";
import { BreachRow } from "knex/types/tables";
import { Logger } from "winston";

type BreachDataServiceOpts = {
  negTtlSec: number;
};

type GetBreachesFromDb = () => Promise<BreachRow[]>;

const defaultBreachServiceOpts: BreachDataServiceOpts = {
  negTtlSec: 60 * 5,
};

type BreachDataServiceDeps = {
  redis: Redis;
  sync: BreachSyncService;
  getBreachesFromDb: GetBreachesFromDb;
  logger: Logger;
  opts?: BreachDataServiceOpts;
};

export type BreachDataService = {
  getBreach: (name: string) => Promise<HibpLikeDbBreach | undefined>;
};

export function createBreachDataService({
  redis,
  sync,
  getBreachesFromDb,
  logger,
  opts: originalOpts = defaultBreachServiceOpts,
}: BreachDataServiceDeps) {
  const opts: Readonly<BreachDataServiceOpts> = {
    ...defaultBreachServiceOpts,
    ...originalOpts,
  };
  /**
   * Negative cache key for breach; prevent
   * calls to update broker cache if it's actually
   * a nonexistent row
   */
  function negativeKey(breach: string) {
    return `breach:neg:${breach.toLowerCase()}`;
  }

  /**
   * Negative cache key for breach; prevent
   * calls to update broker cache if it's actually
   * a nonexistent row. Expires after 10 minutes in
   * case data is just lagging update
   *
   * @param breach name of breach
   */
  async function setNegativeKey(breach: string) {
    await redis.setex(negativeKey(breach), opts.negTtlSec, "1");
  }

  /**
   * Return true if key is negatively cached, meaning
   * that the breach name still did not exist after data
   * was synced from HIBP
   *
   * @param breach name of breach
   * @returns boolean whether the breach is negatively cached
   */
  async function isNegativelyCached(breach: string): Promise<boolean> {
    return (await redis.get(negativeKey(breach))) != null;
  }

  /**
   * Fetch and parse breach records from the redis cache.
   * If the stored value is unparseable, delete the key before
   * returning an empty array.
   *
   * @returns the cached values, or an empty array if missing or unparseable
   */
  async function readFromCache(): Promise<HibpLikeDbBreach[]> {
    const redisBreaches = await redis.get(REDIS_ALL_BREACHES_KEY);
    if (!redisBreaches) return [];
    try {
      const rows = JSON.parse(redisBreaches) as BreachRow[];
      return rows.map((breach) => dbToHibp(breach));
    } catch (error) {
      // Cache corrupted, delete for read-through update from db later
      logger.error("Cache contains unparseable data", {
        originalError: error,
        cachedBreaches: redisBreaches,
      });
      await redis.del(REDIS_ALL_BREACHES_KEY);
      return [];
    }
  }
  /**
   * Use read-through caching strategy for read: on miss,
   * query the database and sync cache.
   */
  async function readThroughCache(): Promise<HibpLikeDbBreach[]> {
    const cached = await readFromCache();
    if (cached.length > 0) {
      return cached;
    }
    const dbBreaches = await getBreachesFromDb();
    await redis.set(
      REDIS_ALL_BREACHES_KEY,
      JSON.stringify(dbBreaches),
      "EX",
      BREACHES_EXPIRY_SECONDS,
    );
    return dbBreaches.map((breach) => dbToHibp(breach));
  }

  /**
   * Get breach data by name. Attempts to read from cache first using
   * read-through strategy to query db on cache miss. If the breach is
   * still not found after db sync, trigger a sync from HIBP using lock
   * mechanism to prevent multiple concurrent sync requests.
   *
   * @param name breach name to look up
   * @returns undefined if breach is not found, otherwise the breach data
   */
  async function getBreach(
    name: string,
  ): Promise<HibpLikeDbBreach | undefined> {
    // Check negative cache, cancel if we know this breach doesn't exist
    if (await isNegativelyCached(name)) {
      logger.warn("Received message for a breach known to not exist", {
        name,
      });
      return undefined;
    }
    const breaches = await readThroughCache();
    const breach = getBreachByName(breaches, name);
    if (breach != null) return breach;
    // Didn't find the breach
    // Sync breaches from HIBP if a sync is not already in progress
    // and data is not fresh
    // If a sync is in progress, it will wait for it to be updated
    // or for the wait lock to time out
    await sync.syncBreaches();
    const syncedBreaches = await readFromCache();
    // Try again to get the data after syncing
    const syncedBreach = getBreachByName(syncedBreaches, name);
    if (syncedBreach != null) return syncedBreach;
    // If it still doesn't exist, cache it negatively
    // so we don't keep attempting to sync
    logger.warn("Unable to find breach after syncing with HIBP", { name });
    await setNegativeKey(name);
    return undefined;
  }
  return { getBreach };
}
