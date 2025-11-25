/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Redis } from "ioredis";
import { IBreachSyncService } from "./BreachSyncService";
import { getBreachByName, HibpLikeDbBreach } from "../utils/hibp";
import {
  BREACHES_EXPIRY_SECONDS,
  REDIS_ALL_BREACHES_KEY,
} from "../db/redis/client";
import { BreachRow } from "knex/types/tables";
import { Logger } from "winston";

type BreachDataServiceOpts = {
  negTtlSec: number;
};

interface BreachRepo {
  getBreaches(): Promise<BreachRow[]>;
}

const DefaultBreachServiceOpts = {
  negTtlSec: 60 * 5,
};

/**
 * Data service for handling breach lookups.
 * Automatically checks cache, updates using read-through
 * strategy on cache miss, and refreshes stale data (with
 * lock to prevent multiple concurrent refreshes).
 */
export class BreachDataService {
  readonly opts: BreachDataServiceOpts;

  constructor(
    private readonly redis: Redis,
    private readonly sync: IBreachSyncService,
    private readonly repo: BreachRepo,
    private readonly logger: Logger,
    opts?: Partial<BreachDataServiceOpts>,
  ) {
    this.opts = { ...DefaultBreachServiceOpts, ...(opts && opts) };
  }

  /**
   * Negative cache key for breach; prevent
   * calls to update broker cache if it's actually
   * a nonexistent row
   */
  private negativeKey(breach: string) {
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
  private async setNegativeKey(breach: string) {
    await this.redis.setex(this.negativeKey(breach), this.opts.negTtlSec, "1");
  }

  /**
   * Return true if key is negatively cached, meaning
   * that the breach name still did not exist after data
   * was synced from HIBP
   *
   * @param breach name of breach
   * @returns boolean whether the breach is negatively cached
   */
  private async isNegativelyCached(breach: string): Promise<boolean> {
    return (await this.redis.get(this.negativeKey(breach))) != null;
  }

  /**
   * Convert BreachRow to HibpLikeDbBreach data contract
   */
  private static dbToHibp(breach: BreachRow): HibpLikeDbBreach {
    return {
      Id: breach.id,
      Name: breach.name,
      Title: breach.title,
      Domain: breach.domain,
      BreachDate: breach.breach_date,
      AddedDate: breach.added_date,
      ModifiedDate: breach.modified_date,
      PwnCount: breach.pwn_count,
      Description: breach.description,
      LogoPath: breach.logo_path,
      DataClasses: breach.data_classes,
      IsVerified: breach.is_verified,
      IsFabricated: breach.is_fabricated,
      IsSensitive: breach.is_sensitive,
      IsRetired: breach.is_retired,
      IsSpamList: breach.is_spam_list,
      IsMalware: breach.is_malware,
      FaviconUrl: breach.favicon_url,
    } as HibpLikeDbBreach;
  }

  /**
   * Fetch and parse breach records from the redis cache.
   * If the stored value is unparseable, delete the key before
   * returning an empty array.
   *
   * @returns the cached values, or an empty array if missing or unparseable
   */
  private async readFromCache(): Promise<HibpLikeDbBreach[]> {
    const redisBreaches = await this.redis.get(REDIS_ALL_BREACHES_KEY);
    if (!redisBreaches) return [];
    try {
      const rows = JSON.parse(redisBreaches) as BreachRow[];
      return rows.map((breach) => BreachDataService.dbToHibp(breach));
    } catch (error) {
      // Cache corrupted, delete for read-through update from db later
      this.logger.error("Cache contains unparseable data", {
        originalError: error,
        cachedBreaches: redisBreaches,
      });
      await this.redis.del(REDIS_ALL_BREACHES_KEY);
      return [];
    }
  }

  /**
   * Use read-through caching strategy for read: on miss,
   * query the database and sync cache.
   */
  private async readThroughCache(): Promise<HibpLikeDbBreach[]> {
    const cached = await this.readFromCache();
    if (cached.length > 0) {
      return cached;
    }
    const dbBreaches = await this.repo.getBreaches();
    await this.redis.set(
      REDIS_ALL_BREACHES_KEY,
      JSON.stringify(dbBreaches),
      "EX",
      BREACHES_EXPIRY_SECONDS,
    );
    return dbBreaches.map((breach) => BreachDataService.dbToHibp(breach));
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
  async getBreach(name: string): Promise<HibpLikeDbBreach | undefined> {
    // Check negative cache, cancel if we know this breach doesn't exist
    if (await this.isNegativelyCached(name)) {
      this.logger.warn("Received message for a breach known to not exist", {
        name,
      });
      return undefined;
    }
    const breaches = await this.readThroughCache();
    const breach = getBreachByName(breaches, name);
    if (breach != null) return breach;
    // Didn't find the breach
    // Sync breaches from HIBP if a sync is not already in progress
    // and data is not fresh
    // If a sync is in progress, it will wait for it to be updated
    // or for the wait lock to time out
    await this.sync.syncBreaches();
    const syncedBreaches = await this.readFromCache();
    // Try again to get the data after syncing
    const syncedBreach = getBreachByName(syncedBreaches, name);
    if (syncedBreach != null) return syncedBreach;
    // If it still doesn't exist, cache it negatively
    // so we don't keep attempting to sync
    this.logger.warn("Unable to find breach after syncing with HIBP", { name });
    await this.setNegativeKey(name);
    return undefined;
  }
}
