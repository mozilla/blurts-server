import test from 'ava'

import { initFluentBundles, updateLocale, getMessage, getRawMessage, fluentError } from './fluent.js'

test.before(async () => {
  await initFluentBundles()
  updateLocale('en')
})

test('getMessage', t => {
  const resp = getMessage('home-not-found')
  t.is(resp, 'Page not found.')
})

test('getMessage: id cannot be found', t => {
  const resp = getMessage('invalid id')
  t.is(resp, 'invalid id')
})

test('getRawMessage', t => {
  const resp = getRawMessage('home-not-found')
  t.is(resp, 'Page not found.')
})

test('getRawMessage: id cannot be found', t => {
  const resp = getRawMessage('invalid id')
  t.is(resp, 'invalid id')
})

test('fluentError', t => {
  const resp = fluentError('home-not-found')
  t.is(resp.message, 'Page not found.')
  t.is(resp.name, 'Error')
})
