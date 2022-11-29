import { filterBreachDataTypes } from './breach-resolution.js'

describe('utils:breach-resolution', () => {
  it('filterBreachDataTypes', () => {
    const resp = filterBreachDataTypes(['passwords'])
    expect(resp.length).toBe(1)
    expect(resp).toEqual(['passwords'])
  })
})
