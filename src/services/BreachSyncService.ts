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
import { validateBreaches } from "../utils/hibp";
import { BreachRow } from "knex/types/tables";

interface BreachRepo {
  upsertBreaches(breaches: HibpGetBreachesResponse): Promise<number>;
  getBreaches(): Promise<BreachRow[]>;
}

type SyncOptions = {
  minFreshMs: number;
  lockTtlMs: number;
  waiterTimeoutSec: number;
};

const DefaultSyncOptions: SyncOptions = {
  minFreshMs: 5 * 60 * 1000, // 5 min
  lockTtlMs: 10 * 60 * 1000, // 10 min
  waiterTimeoutSec: 10,
};

export interface IBreachSyncService {
  syncBreaches: () => Promise<void>;
}
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
export class BreachSyncService implements IBreachSyncService {
  private lockKey = `${REDIS_ALL_BREACHES_KEY}:refresh:lock`;
  private lastSyncKey = `${REDIS_ALL_BREACHES_KEY}:last_synced`;
  readonly opts: SyncOptions;

  constructor(
    private readonly redis: Redis,
    private readonly fetchBreaches: () => Promise<HibpGetBreachesResponse>,
    private readonly repo: BreachRepo,
    opts?: Partial<SyncOptions>,
  ) {
    const optsWithDefault = {
      ...DefaultSyncOptions,
      ...opts,
    };
    if (BREACHES_EXPIRY_SECONDS * 1000 < optsWithDefault.minFreshMs) {
      throw new Error(
        "Cache expiry should not be shorter than freshness expiry",
      );
    }
    this.opts = optsWithDefault;
  }

  private waitKey(syncId: string) {
    return `${REDIS_ALL_BREACHES_KEY}:refresh:wait:${syncId}`;
  }

  private async isFresh(): Promise<boolean> {
    const lastSynced = Number((await this.redis.get(this.lastSyncKey)) || 0);
    return !!lastSynced && Date.now() - lastSynced < this.opts.minFreshMs;
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
  async syncBreaches() {
    // Debounce if data is still fresh
    if (await this.isFresh()) {
      return;
    }
    // Attempt to refresh
    const syncId = uuidv4();
    const ok = await this.redis.set(
      this.lockKey,
      syncId,
      "PX",
      this.opts.lockTtlMs,
      "NX",
    );
    // Another refresh already in progress
    if (ok !== "OK") {
      const syncInProgress = await this.redis.get(this.lockKey);
      if (syncInProgress) {
        await this.redis.brpop(
          this.waitKey(syncInProgress),
          this.opts.waiterTimeoutSec,
        );
      }
      return;
    }
    // Stale and unblocked, ok to refresh
    try {
      // Fetch breaches, save to DB, and update cache
      const breaches = await this.fetchBreaches();
      validateBreaches(breaches);
      await this.repo.upsertBreaches(breaches);
      const savedBreaches = await this.repo.getBreaches();
      await this.redis.set(
        REDIS_ALL_BREACHES_KEY,
        JSON.stringify(savedBreaches),
        "EX",
        BREACHES_EXPIRY_SECONDS, // 12 hour expiration
      );

      // Update the time breaches were last synced for debounce checks
      await this.redis.setex(
        this.lastSyncKey,
        BREACHES_EXPIRY_SECONDS,
        String(Date.now()),
      );
      // Wake up a waiting worker (other waiters retry after time out)
      await this.redis.rpush(this.waitKey(syncId), "ok");
      await this.redis.expire(this.waitKey(syncId), 60);
    } finally {
      const lockedSyncId = await this.redis.get(this.lockKey);
      if (lockedSyncId === syncId) {
        await this.redis.del(this.lockKey);
      }
    }
  }
}
