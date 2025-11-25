/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import MockRedis from "ioredis-mock";
import { type Redis } from "ioredis";
import { BreachSyncService } from "./BreachSyncService";
import { HibpGetBreachesResponse } from "../utils/hibp";
import breachData from "../test/seeds/hibpBreachResponse.json";
import {
  BREACHES_EXPIRY_SECONDS,
  REDIS_ALL_BREACHES_KEY,
} from "../db/redis/client";
import { seeds } from "../test/db";

describe("BreachSyncService", () => {
  const redis = new MockRedis() as unknown as Redis;
  let fetchBreaches: jest.Mock<Promise<HibpGetBreachesResponse>, []>;

  beforeEach(() => {
    fetchBreaches = jest.fn().mockResolvedValue(breachData);
  });
  afterEach(async () => {
    jest.clearAllMocks();
    await redis.flushall();
  });
  afterAll(() => jest.restoreAllMocks());
  describe("constructor validation", () => {
    it("throws if minFreshMs is longer than cache expiry", () => {
      const repo = {
        upsertBreaches: jest.fn().mockResolvedValue(1),
        getBreaches: jest.fn().mockResolvedValue([]),
      };
      expect(
        () =>
          new BreachSyncService(redis, fetchBreaches, repo, {
            minFreshMs: (BREACHES_EXPIRY_SECONDS + 1) * 1000,
          }),
      ).toThrow("Cache expiry should not be shorter than freshness expiry");
    });

    it("constructs successfully with defaults when minFreshMs <= cache TTL", () => {
      const repo = {
        upsertBreaches: jest.fn().mockResolvedValue(1),
        getBreaches: jest.fn().mockResolvedValue([]),
      };
      expect(
        () => new BreachSyncService(redis, fetchBreaches, repo, {}),
      ).not.toThrow();
    });
    it("fills default values if missing", () => {
      const repo = {
        upsertBreaches: jest.fn().mockResolvedValue(1),
        getBreaches: jest.fn().mockResolvedValue([]),
      };
      const service = new BreachSyncService(redis, fetchBreaches, repo, {
        waiterTimeoutSec: 39,
      });
      expect(service.opts).toMatchObject({
        waiterTimeoutSec: 39,
        minFreshMs: 5 * 60 * 1000,
        lockTtlMs: 10 * 60 * 1000,
      });
    });
  });
  describe("syncBreaches", () => {
    const lockKey = `${REDIS_ALL_BREACHES_KEY}:refresh:lock`;
    const lastSyncKey = `${REDIS_ALL_BREACHES_KEY}:last_synced`;
    // Mock redis doesn't implement brpop
    const brpopSpy = jest
      .spyOn(redis, "brpop")
      .mockResolvedValue(["list", "ok"]);
    it("skips sync when data is still fresh (debounce)", async () => {
      const repo = {
        upsertBreaches: jest.fn().mockResolvedValue(1),
        getBreaches: jest.fn().mockResolvedValue([]),
      };
      const sync = new BreachSyncService(redis, fetchBreaches, repo);

      // Seed lastSyncKey to now so isFresh returns true (5min expiry by default)
      await redis.set(lastSyncKey, String(Date.now()));
      await sync.syncBreaches();
      expect(fetchBreaches).not.toHaveBeenCalled();
      expect(repo.upsertBreaches).not.toHaveBeenCalled();
      expect(repo.getBreaches).not.toHaveBeenCalled();
    });
    it("syncs from remote if data is stale and no other sync in progress", async () => {
      const mockInsertedBreach = seeds.breaches();
      const repo = {
        upsertBreaches: jest.fn().mockResolvedValue(1),
        getBreaches: jest.fn().mockResolvedValue([mockInsertedBreach]),
      };
      const sync = new BreachSyncService(redis, fetchBreaches, repo);
      await sync.syncBreaches();
      // Remote fetch
      expect(fetchBreaches).toHaveBeenCalledTimes(1);
      // Upsert to db
      expect(repo.upsertBreaches).toHaveBeenCalledTimes(1);
      expect(repo.upsertBreaches).toHaveBeenCalledWith(breachData);
      // Redis caching -- the data plus last synced
      const cached = await redis.get(REDIS_ALL_BREACHES_KEY);
      expect(cached).not.toBeNull();
      // Note that the value that's cached is from roundtripping the db
      // after upsert, and the mock is simplified here
      expect(JSON.parse(cached!)).toStrictEqual(
        JSON.parse(JSON.stringify([mockInsertedBreach])),
      );
      // lastSyncKey is set
      // Spying on Date.now is causing issues elsewhere,
      // low risk to assert it's > 0
      const lastSynced = await redis.get(lastSyncKey);
      expect(Number(lastSynced)).toBeGreaterThan(0);
      // Lock is cleaned up
      const lock = await redis.get(lockKey);
      expect(lock).toBeNull();
    });
    it("if lock is already held, waits on waitKey and does not run fetch", async () => {
      const repo = {
        upsertBreaches: jest.fn().mockResolvedValue(1),
        getBreaches: jest.fn().mockResolvedValue([]),
      };
      const sync = new BreachSyncService(redis, fetchBreaches, repo, {
        waiterTimeoutSec: 1,
      });

      const existingId = "existing-sync-id";
      await redis.set(lockKey, existingId);

      await sync.syncBreaches();

      // brpop called on waitKey(existingId)
      const waitKey = `${REDIS_ALL_BREACHES_KEY}:refresh:wait:${existingId}`;
      expect(brpopSpy).toHaveBeenCalledWith(waitKey, 1);

      // no external work should be done
      expect(fetchBreaches).not.toHaveBeenCalled();
      expect(repo.upsertBreaches).not.toHaveBeenCalled();
      expect(repo.getBreaches).not.toHaveBeenCalled();
    });
    it("only one remote fetch occurs when multiple sync requests are invoked concurrently", async () => {
      const repo = {
        upsertBreaches: jest.fn().mockResolvedValue(1),
        getBreaches: jest.fn().mockResolvedValue([]),
      };
      const sync = new BreachSyncService(redis, fetchBreaches, repo);
      // Simulate concurrent calls
      await Promise.all([sync.syncBreaches(), sync.syncBreaches()]);

      // fetch/upsert/getBreaches should still only run once
      expect(fetchBreaches).toHaveBeenCalledTimes(1);
      expect(repo.upsertBreaches).toHaveBeenCalledTimes(1);
      expect(repo.getBreaches).toHaveBeenCalledTimes(1);

      // second caller should have tried to BRPOP at least once
      expect(brpopSpy).toHaveBeenCalled();

      // lock should be cleaned up
      const lock = await redis.get(lockKey);
      expect(lock).toBeNull();
    });
    it("throws error if breach data is not valid", async () => {
      fetchBreaches.mockReset().mockResolvedValue([
        { Name: "MissingFields" },
        // Force the cast because we can't pass invalid data here otherwise
      ] as unknown as HibpGetBreachesResponse);
      const repo = {
        upsertBreaches: jest.fn().mockResolvedValue(1),
        getBreaches: jest.fn().mockResolvedValue([]),
      };
      const sync = new BreachSyncService(redis, fetchBreaches, repo);
      await expect(sync.syncBreaches()).rejects.toThrow(
        "Breach data structure is not valid",
      );

      expect(repo.upsertBreaches).not.toHaveBeenCalled();
      expect(repo.getBreaches).not.toHaveBeenCalled();
    });
  });
});
