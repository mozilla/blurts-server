import { initFluentBundles, updateLocale } from './fluent.js'
import { filterBreachDataTypes, appendBreachResolutionChecklist, BreachDataTypes } from './breach-resolution.js'

describe('utils:breach-resolution', () => {
  beforeAll(async () => {
    await initFluentBundles()
    updateLocale('en')
  })

  test('filterBreachDataTypes', () => {
    const resp = filterBreachDataTypes(['passwords', 'irrelevant'])
    expect(resp.length).toBe(1)
    expect(resp).toEqual(['passwords'])
  })

  test('appendBreachResolutionChecklist: two data classes', () => {
    const userBreachData = {
      verifiedEmails: [{
        email: 'affected@email.com',
        breaches: [{
          DataClasses: [BreachDataTypes.Passwords, BreachDataTypes.Email],
          Name: 'companyName',
          Domain: 'companyName.com'
        }]
      }],
      unverifiedEmails: []
    }
    appendBreachResolutionChecklist(userBreachData)
    console.log(JSON.stringify(userBreachData))
    expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist).toBeDefined()
    expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].header)
      .toEqual('Go to <a>https://companyName.com</a> to change your password and enable two-factor authentication (2FA).')
    expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].priority).toEqual(1)
  })

  test('appendBreachResolutionChecklist: no data classes', () => {
    const userBreachData = {
      verifiedEmails: [{
        email: 'affected@email.com',
        breaches: [{
          DataClasses: [],
          Name: 'companyName',
          Domain: 'companyName.com'
        }]
      }],
      unverifiedEmails: []
    }
    appendBreachResolutionChecklist(userBreachData)
    console.log(JSON.stringify(userBreachData))
    expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist).toBeDefined()
    expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].header)
      .toEqual('Reach out to companyName to inform them about this breach and ask for specific steps you can take.')
    expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].priority).toEqual(13)
  })
})
