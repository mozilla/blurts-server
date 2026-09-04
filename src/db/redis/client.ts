/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createRedisInstance } from "./util";
import { logger } from "../../app/functions/server/logging";
import type { Redis } from "ioredis";
import MockRedis from "ioredis-mock";

export const REDIS_ALL_BREACHES_KEY = "breaches";
export const REDIS_ALL_DATA_BROKERS_KEY = "dataBrokers";
export const BREACHES_EXPIRY_SECONDS = 3600 * 12; // 12 hour

let singleton: Redis | undefined;
export const redisClient = () => {
  // Reuse the connection; a new one would cause a leak
  if (singleton) {
    return singleton;
  }

  const useMock = process.env.REDIS_URL?.includes("redis.mock") ?? false;
  singleton = useMock ? new MockRedis() : createRedisInstance();
  // One line per process, so prod logs prove the reuse.
  logger.info("redis_client_created", { mock: useMock });
  return singleton;
};
