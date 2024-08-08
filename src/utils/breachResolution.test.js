/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "@jest/globals";

import { filterBreachDataTypes } from './breachResolution.js'

test('filterBreachDataTypes', () => {
  const resp = filterBreachDataTypes(['passwords', 'irrelevant'])
  expect(resp).toHaveLength(1);
  expect(resp).toStrictEqual(['passwords']);
})
