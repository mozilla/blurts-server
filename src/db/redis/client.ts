/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createRedisInstance } from "./util";
import type { Redis } from "ioredis";

let cached: Redis;

export const redisClient = () => {
  if (!cached) cached = createRedisInstance();
  return cached;
};

// storing data

// await redis.set(key, data);

// // getting data (using the same key as above)
// const value = await redis.get(data);

// // we can also increment a value by <N>
// await redis.incrby(key, 1);
