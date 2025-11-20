/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createRedisInstance } from "./util";
import { redisClient } from "./client";
import MockRedis from "ioredis-mock";

jest.mock("@sentry/core", () => ({
  logger: {
    debug: jest.fn(),
  },
}));
jest.mock("./util", () => ({
  __esModule: true,
  createRedisInstance: jest.fn(),
}));

describe("redisClient", () => {
  const originalEnv = process.env;
  beforeEach(() => {
    jest.clearAllMocks();
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
    const fakeClient = {};
    (createRedisInstance as jest.Mock).mockReturnValue(fakeClient);

    const client = redisClient();

    expect(createRedisInstance).toHaveBeenCalledTimes(1);
    expect(client).toBe(fakeClient);
  });

  it('uses createRedisInstance when REDIS_URL does not include "redis.mock"', () => {
    process.env.REDIS_URL = "redis://localhost:6379";
    const fakeClient = {};
    (createRedisInstance as jest.Mock).mockReturnValue(fakeClient);

    const client = redisClient();

    expect(createRedisInstance).toHaveBeenCalledTimes(1);
    expect(client).toBe(fakeClient);
  });
});
