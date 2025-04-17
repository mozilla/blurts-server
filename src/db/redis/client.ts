/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { logger } from "../../app/functions/server/logging";
import { createRedisInstance } from "./util";
import { createRedisMockInstance } from "./util-mock";
import type { Redis } from "ioredis";

export const REDIS_ALL_BREACHES_KEY = "breaches";
export const REDIS_ALL_DATA_BROKERS_KEY = "dataBrokers";
export const REDIS_JWT_KEY_PREFIX = "moscary:jwt:";

let singleton: Redis;
export const redisClient = () => {
  if (process.env.REDIS_URL?.includes("redis.mock")) {
    singleton = createRedisMockInstance();
    logger.debug("redis_mock_client_created_success");
  } else {
    singleton = createRedisInstance();
    logger.debug("redis_client_created_success");
  }
  return singleton;
};
