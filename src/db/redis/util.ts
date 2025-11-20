/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Redis, RedisOptions } from "ioredis";
import { redisConfiguration } from "./configuration";
import { logger } from "../../app/functions/server/logging";

// TODO: Testing
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
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`Redis Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      },
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
