/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Redis, RedisOptions } from "ioredis";
import { redisConfiguration } from "./configuration";
import { logger } from "../../app/functions/server/logging";

const MAX_RETRY_DELAY_MS = 1000;

/**
 * How long ioredis waits before retrying a lost connection.
 *
 * This must never throw. ioredis calls it outside any try/catch, so a throw
 * here escapes as an uncaught exception and takes the process down instead
 * of letting the connection heal. Returning a delay every time means a
 * refused connection keeps retrying until Redis comes back.
 *
 * The cap doubles as the worst-case per-request stall. `enableOfflineQueue`
 * is on, so a command issued while Redis is down is only rejected when the
 * next reconnect attempt fails. Raising the cap would leave every render
 * holding a request slot for that long before it can fall back to Postgres.
 *
 * @param times how many reconnect attempts have already been made
 * @returns milliseconds to wait before the next attempt
 */
export function retryStrategy(times: number): number {
  return Math.min(times * 200, MAX_RETRY_DELAY_MS);
}

/* c8 ignore start */
function getRedisConfiguration(): {
  port: number;
  host: string;
  password: string;
} {
  return redisConfiguration;
}

export function createRedisInstance(config = getRedisConfiguration()) {
  try {
    const options: RedisOptions = {
      host: config.host,
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy,
    };

    if (config.port) {
      options.port = config.port;
    }

    if (config.password) {
      options.password = config.password;
    }

    const redis = new Redis(options);

    redis.on("error", (error: unknown) => {
      logger.error("create_redis_instance", {
        exception: `redis on error:  ${error as string}`,
      });
    });

    return redis;
  } catch (e) {
    logger.error("create_redis_instance", { exception: e });
    throw e;
  }
}
/* c8 ignore stop */
