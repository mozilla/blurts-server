/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import test from 'ava'
import {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  MethodNotAllowedError,
  ConflictError,
  TooManyRequestsError,
  InternalServerError,
  FluentError
} from './error.js'
import { initFluentBundles, updateLocale } from './fluent.js'

test('BadRequestError', t => {
  const errorMessage = 'BadRequestError message'
  const error = new BadRequestError(errorMessage)
  t.is(error.message, errorMessage)
  t.is(error.name, 'Bad Request')
})

test('UnauthorizedError', t => {
  const errorMessage = 'UnauthorizedError message'
  const error = new UnauthorizedError(errorMessage)
  t.is(error.message, errorMessage)
  t.is(error.name, 'Unauthorized')
})

test('ForbiddenError', t => {
  const errorMessage = 'ForbiddenError message'
  const error = new ForbiddenError(errorMessage)
  t.is(error.message, errorMessage)
  t.is(error.name, 'Forbidden')
})

test('MethodNotAllowedError', t => {
  const errorMessage = 'MethodNotAllowedError message'
  const error = new MethodNotAllowedError(errorMessage)
  t.is(error.message, errorMessage)
  t.is(error.name, 'Method Not Allowed')
})

test('ConflictError', t => {
  const errorMessage = 'ConflictError message'
  const error = new ConflictError(errorMessage)
  t.is(error.message, errorMessage)
  t.is(error.name, 'Conflict')
})

test('TooManyRequestsError', t => {
  const errorMessage = 'TooManyRequestsError message'
  const error = new TooManyRequestsError(errorMessage)
  t.is(error.message, errorMessage)
  t.is(error.name, 'Too Many Requests')
})

test('InternalServerError', t => {
  const errorMessage = 'InternalServerError message'
  const error = new InternalServerError(errorMessage)
  t.is(error.message, errorMessage)
  t.is(error.name, 'Internal Server Error')
})

test('FluentError', async t => {
  await initFluentBundles()
  updateLocale('en')

  const error = new FluentError('home-not-found')

  t.is(error.message, 'Page not found.')
  t.is(error.name, 'Fluent Error')
})
