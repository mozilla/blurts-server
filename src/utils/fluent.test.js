import { initFluentBundles, updateAppLocale, getMessage, getRawMessage, fluentError } from './fluent.js'

describe('utils:fluent', () => {
  beforeAll(async () => {
    await initFluentBundles()
    updateAppLocale('en')
  })

  test('getMessage', () => {
    const resp = getMessage('home-not-found')
    expect(resp).toBe('Page not found.')
  })

  test('getRawMessage', () => {
    const resp = getRawMessage('home-not-found')
    expect(resp).toBe('Page not found.')
  })

  test('fluentError', () => {
    const resp = fluentError('home-not-found')
    expect(resp.message).toBe('Page not found.')
    expect(resp.name).toBe('Error')
  })
})
