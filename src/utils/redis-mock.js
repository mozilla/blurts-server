/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// redis-mock is not compatible with redis@4.
// The breaking changes apparently involve promise compatibility.
// Below is a hacky work-around to keep redisMock alive.
// See also https://github.com/yeahoffline/redis-mock/issues/195

import redisMock from 'redis-mock'
import { promisify } from 'node:util'

const legacyMockClient = redisMock.createClient()
const patchedMockClient = {
  connect: () => undefined,
  get: promisify(legacyMockClient.get).bind(legacyMockClient),
  set: promisify(legacyMockClient.set).bind(legacyMockClient),
  del: promisify(legacyMockClient.del).bind(legacyMockClient),
  hSet: promisify(legacyMockClient.hset).bind(legacyMockClient),
  hGet: promisify(legacyMockClient.hget).bind(legacyMockClient),
  hDel: promisify(legacyMockClient.hdel).bind(legacyMockClient),
  flushAll: promisify(legacyMockClient.flushall).bind(legacyMockClient),
  setEx: promisify(legacyMockClient.setex).bind(legacyMockClient),
  expire: promisify(legacyMockClient.expire).bind(legacyMockClient),
  mGet: promisify(legacyMockClient.mget).bind(legacyMockClient),
  on: () => undefined
}

console.warn('Using a mock version of Redis. To use an actual Redis server, update the Redis URL in your environment variables.')

export { patchedMockClient as redisMockClient }
