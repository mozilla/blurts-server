/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This config is transparent enough to be low priority for coverage
/* c8 ignore start */
const url = new URL(process.env.REDIS_URL || "");
export const redisConfiguration = {
  host: url.hostname || "redis.mock",
  password: url.password || "",
  port: Number(url.port) || 6379,
};
/* c8 ignore stop */
