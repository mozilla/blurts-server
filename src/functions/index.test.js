/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import test from 'ava'
import * as td from 'testdouble'

import { createResponse, createRequest } from 'node-mocks-http'

import AppConstants from '../appConstants.js'

test.beforeEach(async () => {
  await td.replaceEsm('../utils/fluent.js')
  const { getMessage } = await import('../utils/fluent.js')
  td.when(getMessage(td.matchers.anything())).thenReturn('test')
})

test.afterEach(() => {
  td.reset()
})

test.serial('accepts valid payload', async t => {
  const req = createRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AppConstants.HIBP_NOTIFY_TOKEN}`
    },
    url: '/api/v1/hibp/notify',
    body: { breachName: 'Test1', hashPrefix: '...', hashSuffixes: ['...'] },
    fluentFormat: td.func()
  })

  const resp = createResponse()

  await td.replaceEsm('../utils/hibp.js')
  const { getBreachByName } = await import('../utils/hibp.js')

  const breachAlert = { IsVerified: true, Domain: 'test', IsFabricated: true, IsSpamList: false }
  td.when(getBreachByName(undefined, 'Test1'), { times: 1 }).thenReturn(breachAlert)

  // Call code-under-test
  const { app } = await import('./index.js')

  await app._router(req, resp)

  // Check expectations
  t.is(resp.statusCode, 200)
})

test.serial('rejects invalid bearer token', async t => {
  const req = createRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer invalid'
    },
    url: '/api/v1/hibp/notify',
    body: { breachName: 'Test1', hashPrefix: '...', hashSuffixes: ['...'] },
    fluentFormat: td.func()
  })

  const resp = createResponse()

  // Call code-under-test
  const { app } = await import('./index.js')
  await app._router(req, resp)

  // Check expectations
  t.is(resp.statusCode, 403)
})
