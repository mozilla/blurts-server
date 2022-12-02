import { initFluentBundles, updateLocale, getMessage, getRawMessage, fluentError } from './fluent.js'

describe('utils:fluent', () => {
  beforeAll(async () => {
    await initFluentBundles()
    updateLocale('en')
  })

  test('getMessage', () => {
    const resp = getMessage('home-not-found')
    expect(resp).toBe('Page not found.')
  })

  test('getMessage: id cannot be found', () => {
    const resp = getMessage('invalid id')
    expect(resp).toBe('invalid id')
  })

  test('getRawMessage', () => {
    const resp = getRawMessage('home-not-found')
    expect(resp).toBe('Page not found.')
  })

  test('getRawMessage: id cannot be found', () => {
    const resp = getRawMessage('invalid id')
    expect(resp).toBe('invalid id')
  })

  test('fluentError', () => {
    const resp = fluentError('home-not-found')
    expect(resp.message).toBe('Page not found.')
    expect(resp.name).toBe('Error')
  })
})
