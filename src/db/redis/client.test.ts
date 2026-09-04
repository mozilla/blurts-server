/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { vi, describe, it, expect, beforeEach, afterAll } from "vitest";
import MockRedis from "ioredis-mock";
import type { Redis } from "ioredis";

vi.mock("@sentry/core", () => ({
  logger: {
    debug: vi.fn(),
  },
}));
// Stubs out the only code that builds a real client.
vi.mock("./util", () => ({
  createRedisInstance: vi.fn(),
}));

/**
 * Import a fresh copy of the client module.
 *
 * `redisClient()` caches its client in module-level state, which lives as
 * long as the module registry entry. Import `./client` once at the top of
 * this file and the first test to call it would fix the client for every
 * later test. `vi.resetModules()` drops the registry, so the next import
 * re-runs the module body with `singleton` unset.
 *
 * The imports have to be dynamic and have to live in here. A static
 * top-level import binds before any test runs and `vi.resetModules()` does
 * not rebind it, so it would keep pointing at the stale copy. `./util` is
 * re-imported for the same reason: its `vi.mock` factory returns a new
 * `vi.fn()` per registry, and the test has to assert on the same spy the
 * client called.
 */
async function loadClient() {
  vi.resetModules();
  const { createRedisInstance } = await import("./util");
  const { redisClient } = await import("./client");
  return { redisClient, createRedisInstance: vi.mocked(createRedisInstance) };
}

describe("redisClient", () => {
  const originalEnv = process.env;
  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('returns a MockRedis instance when REDIS_URL includes "redis.mock"', async () => {
    process.env.REDIS_URL = "redis.mock://localhost";
    const { redisClient, createRedisInstance } = await loadClient();

    const client = redisClient();

    expect(client).toBeInstanceOf(MockRedis);
    expect(createRedisInstance).not.toHaveBeenCalled();
  });

  it("uses createRedisInstance when REDIS_URL is not defined", async () => {
    delete process.env.REDIS_URL;
    const { redisClient, createRedisInstance } = await loadClient();
    const fakeClient = {} as unknown as Redis;
    createRedisInstance.mockReturnValue(fakeClient);

    const client = redisClient();

    expect(createRedisInstance).toHaveBeenCalledTimes(1);
    expect(client).toBe(fakeClient);
  });

  it('uses createRedisInstance when REDIS_URL does not include "redis.mock"', async () => {
    // Only string-matched by client.ts; nothing ever dials it.
    process.env.REDIS_URL = "redis://redis.invalid:6379";
    const { redisClient, createRedisInstance } = await loadClient();
    const fakeClient = {} as unknown as Redis;
    createRedisInstance.mockReturnValue(fakeClient);

    const client = redisClient();

    expect(createRedisInstance).toHaveBeenCalledTimes(1);
    expect(client).toBe(fakeClient);
  });

  it("opens one connection no matter how many times it is called", async () => {
    process.env.REDIS_URL = "redis://redis.invalid:6379";
    const { redisClient, createRedisInstance } = await loadClient();
    createRedisInstance.mockReturnValue({} as unknown as Redis);

    const clients = Array.from({ length: 100 }, () => redisClient());

    expect(createRedisInstance).toHaveBeenCalledTimes(1);
    expect(new Set(clients).size).toBe(1);
  });

  it("reuses the mock client too", async () => {
    process.env.REDIS_URL = "redis.mock://localhost";
    const { redisClient } = await loadClient();

    const clients = Array.from({ length: 100 }, () => redisClient());

    expect(new Set(clients).size).toBe(1);
  });
});
