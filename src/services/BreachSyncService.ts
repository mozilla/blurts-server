/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Redis } from "ioredis";
import {
  BREACHES_EXPIRY_SECONDS,
  REDIS_ALL_BREACHES_KEY,
} from "../db/redis/client";
import { v4 as uuidv4 } from "uuid";
import { HibpGetBreachesResponse } from "../utils/hibp";
import { validateBreachesEmailNotifiable } from "../utils/hibp";
import { BreachRow } from "knex/types/tables";
import { Logger } from "winston";

interface BreachRepo {
  upsertBreaches(breaches: HibpGetBreachesResponse): Promise<number>;
  getBreaches(): Promise<BreachRow[]>;
}

type SyncOptions = {
  minFreshMs: number;
  lockTtlMs: number;
  waiterTimeoutSec: number;
};

const defaultSyncOptions: SyncOptions = {
  // How long the data is considered fresh after it's written
  // (will not sync if it is still fresh)
  minFreshMs: 5 * 60 * 1000, // 5 min
  // When to timeout the lock if it's not manually released
  // (avoid deadlock on failed processes)
  lockTtlMs: 10 * 60 * 1000, // 10 min
  // How long until the waiters give up waiting on the lock, if they
  // aren't manually awakened
  // This should be longer than we expect the fetch to take
  waiterTimeoutSec: 10,
};

type BreachSyncServiceDeps = {
  // Redis connection
  redis: Redis;
  // Fetch all breaches from remote (HIBP)
  fetchBreaches: () => Promise<HibpGetBreachesResponse>;
  // Repository functions for updating breaches in database
  repo: BreachRepo;
  // Winston logger
  logger: Logger;
  // Additional sync options (with defaults)
  opts?: Partial<SyncOptions>;
};

export type BreachSyncService = {
  syncBreaches: () => Promise<void>;
};

/**
 * Sync coordinator for HIBP breaches.
 * Ensures that we don't spam HIBP with many concurrent
 * sync requests if we encounter a breach in our breach
 * alerts processing pipeline that doesn't yet exist in
 * the database.
 * Uses a locking mechanism to ensure that only one client
 * can invoke a sync at a time; other clients are woken up
 * or time out and can retry the data fetch after the sync
 * has completed.
 * Enforces a small debounce to prevent syncs if the data
 * is fresh enough (deafult 5 minutes).
 */
export function createBreachSyncService({
  redis,
  fetchBreaches,
  repo,
  logger,
  opts: originalOpts = defaultSyncOptions,
}: BreachSyncServiceDeps): BreachSyncService {
  const lockKey = `${REDIS_ALL_BREACHES_KEY}:refresh:lock`;
  const lastSyncKey = `${REDIS_ALL_BREACHES_KEY}:last_synced`;

  const opts: Readonly<SyncOptions> = {
    ...defaultSyncOptions,
    ...originalOpts,
  };
  if (BREACHES_EXPIRY_SECONDS * 1000 < opts.minFreshMs) {
    throw new Error("Cache expiry should not be shorter than freshness expiry");
  }

  /** Lock for sync processes */
  function waitKey(syncId: string) {
    return `${REDIS_ALL_BREACHES_KEY}:refresh:wait:${syncId}`;
  }

  /** Freshness check for debounce */
  async function isFresh(): Promise<boolean> {
    const lastSynced = Number((await redis.get(lastSyncKey)) ?? 0);
    return !!lastSynced && Date.now() - lastSynced < opts.minFreshMs;
  }

  /**
   * Request a data sync from remote data source (HIBP).
   * Uses redis lock to avoid multiple concurrent
   * sync requests.
   * Breaches are pulled from HIBP, validated, and saved
   * into the database and redis cache.
   * If a sync is already in progress, it will block until
   * the waiter is awakened, or the process times out (lockTtlMs),
   * after which point the caller can fetch the new data and/or
   * attempt to sync again.
   */
  async function syncBreaches() {
    // Debounce if data is still fresh
    if (await isFresh()) {
      logger.debug("Debouncing sync request; data is still fresh");
      return;
    }
    // Attempt to refresh
    const syncId = uuidv4();
    const ok = await redis.set(lockKey, syncId, "PX", opts.lockTtlMs, "NX");
    // Another refresh already in progress
    if (ok !== "OK") {
      logger.info("Refresh is already in progress; waiting");
      const syncInProgress = await redis.get(lockKey);
      if (syncInProgress) {
        await redis.brpop(waitKey(syncInProgress), opts.waiterTimeoutSec);
      }
      return;
    }
    // Stale and unblocked, ok to refresh
    try {
      logger.info("Syncing breaches with HIBP");
      // Fetch breaches, save to DB, and update cache
      const breaches = await fetchBreaches();
      validateBreachesEmailNotifiable(breaches);
      await repo.upsertBreaches(breaches);
      const savedBreaches = await repo.getBreaches();
      await redis.set(
        REDIS_ALL_BREACHES_KEY,
        JSON.stringify(savedBreaches),
        "EX",
        BREACHES_EXPIRY_SECONDS, // 12 hour expiration
      );

      // Update the time breaches were last synced for debounce checks
      await redis.setex(
        lastSyncKey,
        BREACHES_EXPIRY_SECONDS,
        String(Date.now()),
      );
      // Wake up a waiting worker (other waiters retry after time out)
      await redis.rpush(waitKey(syncId), "ok");
      await redis.expire(waitKey(syncId), 60);
    } finally {
      logger.info("Breaches synced; releasing lock");
      const lockedSyncId = await redis.get(lockKey);
      if (lockedSyncId === syncId) {
        await redis.del(lockKey);
      }
    }
  }
  return { syncBreaches };
}
