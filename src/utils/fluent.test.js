import { initFluentBundles, updateAppLocale, getMessage, fluentError } from './fluent.js'

describe('utils:fluent', () => {
  beforeAll(async () => {
    await initFluentBundles()
    updateAppLocale('en')
  })

  it('getMessage', () => {
    const resp = getMessage('home-not-found')
    expect(resp).toBe('Page not found.')
  })

  it('fluentError', () => {
    const resp = fluentError('home-not-found')
    expect(resp.message).toBe('Page not found.')
    expect(resp.name).toBe('Error')
  })
})
