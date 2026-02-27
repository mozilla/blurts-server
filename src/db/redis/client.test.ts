/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { vi, describe, it, expect, beforeEach, afterAll } from "vitest";
import { createRedisInstance } from "./util";
import { redisClient } from "./client";
import MockRedis from "ioredis-mock";
import type { Redis } from "ioredis";

vi.mock("@sentry/core", () => ({
  logger: {
    debug: vi.fn(),
  },
}));
vi.mock("./util", () => ({
  createRedisInstance: vi.fn(),
}));

describe("redisClient", () => {
  const originalEnv = process.env;
  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('returns a MockRedis instance when REDIS_URL includes "redis.mock"', () => {
    process.env.REDIS_URL = "redis.mock://localhost";
    const client = redisClient();

    expect(client).toBeInstanceOf(MockRedis);
    expect(createRedisInstance).not.toHaveBeenCalled();
  });

  it("uses createRedisInstance when REDIS_URL is not defined", () => {
    delete process.env.REDIS_URL;
    const fakeClient = {} as unknown as Redis;
    vi.mocked(createRedisInstance).mockReturnValue(fakeClient);

    const client = redisClient();

    expect(createRedisInstance).toHaveBeenCalledTimes(1);
    expect(client).toBe(fakeClient);
  });

  it('uses createRedisInstance when REDIS_URL does not include "redis.mock"', () => {
    process.env.REDIS_URL = "redis://localhost:6379";
    const fakeClient = {} as unknown as Redis;
    vi.mocked(createRedisInstance).mockReturnValue(fakeClient);

    const client = redisClient();

    expect(createRedisInstance).toHaveBeenCalledTimes(1);
    expect(client).toBe(fakeClient);
  });
});
