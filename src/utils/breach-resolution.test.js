import test from 'ava'

import { initFluentBundles, updateLocale } from './fluent.js'
import { filterBreachDataTypes, appendBreachResolutionChecklist, BreachDataTypes } from './breach-resolution.js'

test.before(async () => {
  await initFluentBundles()
  updateLocale('en')
})

test('filterBreachDataTypes', t => {
  const resp = filterBreachDataTypes(['passwords', 'irrelevant'])
  t.is(resp.length, 1)
  t.deepEqual(resp, ['passwords'])
})

test('appendBreachResolutionChecklist: two data classes', t => {
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
  t.truthy(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].header,
    'Go to <a>https://companyName.com</a> to change your password and enable two-factor authentication (2FA).')
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].priority, 1)
})

test('appendBreachResolutionChecklist: no data classes', t => {
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
  t.truthy(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].header,
    'Reach out to companyName to inform them about this breach and ask for specific steps you can take.')
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].priority, 13)
})
