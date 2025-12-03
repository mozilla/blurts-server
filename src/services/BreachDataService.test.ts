/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import MockRedis from "ioredis-mock";
import { type Redis } from "ioredis";
import { createBreachDataService } from "./BreachDataService";
import { REDIS_ALL_BREACHES_KEY } from "../db/redis/client";
import { seeds } from "../test/db";
import { mockLogger } from "../test/helpers/mockLogger";
import { BreachSyncService } from "./BreachSyncService";

describe("BreachDataService factory", () => {
  const redis = new MockRedis() as unknown as Redis;
  const logger = mockLogger();

  beforeAll(async () => {
    await redis.flushall();
  });
  afterEach(async () => {
    await redis.flushall();
  });
  describe("getBreach", () => {
    it("caches negatively if breach is missing after sync", async () => {
      const mockSync: BreachSyncService = {
        syncBreaches: jest.fn().mockResolvedValue(undefined),
      };
      const getBreachesFromDb = jest.fn().mockResolvedValue([]);
      const service = createBreachDataService({
        redis,
        sync: mockSync,
        getBreachesFromDb,
        logger,
      });
      const result = await service.getBreach("SomeBreach");
      expect(result).toBeUndefined();
      expect(await redis.get("breach:neg:somebreach")).toEqual("1");
    });
    it("short-circuits if negatively cached and does not fetch or sync", async () => {
      const mockSync: BreachSyncService = {
        syncBreaches: jest.fn().mockResolvedValue(undefined),
      };
      const getBreachesFromDb = jest.fn().mockResolvedValue([]);
      await redis.set("breach:neg:somebreach", "1", "EX", 60);
      const service = createBreachDataService({
        redis,
        sync: mockSync,
        getBreachesFromDb,
        logger,
      });
      const result = await service.getBreach("SomeBreach");
      expect(result).toBeUndefined();
      expect(mockSync.syncBreaches).not.toHaveBeenCalled();
      expect(getBreachesFromDb).not.toHaveBeenCalled();
    });
    it("does not query db if cache contains the expected breach", async () => {
      const fakeBreach = seeds.breaches();
      await redis.set(REDIS_ALL_BREACHES_KEY, JSON.stringify([fakeBreach]));
      const mockSync: BreachSyncService = {
        syncBreaches: jest.fn().mockResolvedValue(undefined),
      };
      const getBreachesFromDb = jest.fn().mockResolvedValue([]);
      const service = createBreachDataService({
        redis,
        sync: mockSync,
        getBreachesFromDb,
        logger,
      });
      const result = await service.getBreach(fakeBreach.name);
      expect(result).not.toBeUndefined();
      expect(result!.Name).toEqual(fakeBreach.name);
      expect(result!.Domain).toEqual(fakeBreach.domain);
      expect(mockSync.syncBreaches).not.toHaveBeenCalled();
      expect(getBreachesFromDb).not.toHaveBeenCalled();
    });
    it("reads from db and updates cache if cache miss; no sync if key found", async () => {
      const fakeBreach = seeds.breaches();
      const mockSync: BreachSyncService = {
        syncBreaches: jest.fn().mockResolvedValue(undefined),
      };
      const getBreachesFromDb = jest.fn().mockResolvedValue([fakeBreach]);
      const service = createBreachDataService({
        redis,
        sync: mockSync,
        getBreachesFromDb,
        logger,
      });
      const result = await service.getBreach(fakeBreach.name);
      expect(result).not.toBeUndefined();
      expect(result!.Name).toEqual(fakeBreach.name);
      expect(result!.Domain).toEqual(fakeBreach.domain);
      expect(mockSync.syncBreaches).not.toHaveBeenCalled();
      expect(getBreachesFromDb).toHaveBeenCalledTimes(1);
      const cached = await redis.get(REDIS_ALL_BREACHES_KEY);
      expect(cached).toStrictEqual(JSON.stringify([fakeBreach]));
    });
    it("requests sync if breach not found and reads from cache", async () => {
      const existingBreach = seeds.breaches();
      const newBreach = seeds.breaches();
      await redis.set(REDIS_ALL_BREACHES_KEY, JSON.stringify([existingBreach]));
      const mockSync: BreachSyncService = {
        syncBreaches: jest
          .fn()
          .mockImplementationOnce(async () => {
            await redis.set(
              REDIS_ALL_BREACHES_KEY,
              JSON.stringify([existingBreach, newBreach]),
            );
          })
          .mockResolvedValue(undefined),
      };
      const getBreachesFromDb = jest.fn().mockResolvedValue([]);
      const service = createBreachDataService({
        redis,
        sync: mockSync,
        getBreachesFromDb,
        logger,
      });
      const result = await service.getBreach(newBreach.name);
      expect(result).not.toBeUndefined();
      expect(result!.Name).toEqual(newBreach.name);
      expect(result!.Domain).toEqual(newBreach.domain);
      expect(mockSync.syncBreaches).toHaveBeenCalledTimes(1);
      expect(getBreachesFromDb).not.toHaveBeenCalled();
    });
    it("deletes key and rereads from db if cache has unparseable data", async () => {
      const fakeBreach = seeds.breaches();
      const mockSync: BreachSyncService = {
        syncBreaches: jest.fn().mockResolvedValue(undefined),
      };
      const getBreachesFromDb = jest.fn().mockResolvedValue([fakeBreach]);
      // Seed an invalid cache entry
      await redis.set(REDIS_ALL_BREACHES_KEY, "{");
      const service = createBreachDataService({
        redis,
        sync: mockSync,
        getBreachesFromDb,
        logger,
      });
      const result = await service.getBreach("WhateverBreach");
      expect(result).toEqual(undefined);
      const cache = await redis.get(REDIS_ALL_BREACHES_KEY);
      expect(cache).toEqual(JSON.stringify([fakeBreach]));
    });
  });
});
