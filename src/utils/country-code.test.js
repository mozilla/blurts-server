/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import test from 'ava'

import { getCountryCode } from './country-code.js'

test('getCountryCode: GCP-detected country', t => {
  const getHeader = (header) => {
    if (header === 'X-Client-Region') {
      return 'NL'
    }
    return undefined
  }
  t.is(getCountryCode({ get: getHeader }), 'nl')
})

test('getCountryCode: Accept-Language with a single locale', t => {
  const getHeader = (header) => {
    if (header === 'Accept-Language') {
      return 'nl-NL'
    }
    return undefined
  }
  t.is(getCountryCode({ get: getHeader }), 'nl')
})

test('getCountryCode: Accept-Language with multiple locales', t => {
  const getHeader = (header) => {
    if (header === 'Accept-Language') {
      return 'nl-NL, en-US'
    }
    return undefined
  }
  t.is(getCountryCode({ get: getHeader }), 'nl')
})

test('getCountryCode: Accept-Language with multiple locales, with weightings', t => {
  const getHeader = (header) => {
    if (header === 'Accept-Language') {
      return 'nl-NL;q=0.8, en-US'
    }
    return undefined
  }
  t.is(getCountryCode({ get: getHeader }), 'nl')
})

test('getCountryCode: Accept-Language with a language without a country code', t => {
  const getHeader = (header) => {
    if (header === 'Accept-Language') {
      return 'nl;q=0.8, en-US'
    }
    return undefined
  }
  t.is(getCountryCode({ get: getHeader }), 'us')
})

test('getCountryCode: defaults to US', t => {
  t.is(getCountryCode({ get: () => undefined }), 'us')
})
