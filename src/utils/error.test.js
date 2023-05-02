/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import test from 'ava'

import { BadRequestError } from './error.js'

test('test error', t => {
  const error = new BadRequestError()
  console.log(error)
  t.is('test', 'test')
})
