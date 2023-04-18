/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import test from 'ava'

import { initFluentBundles, updateLocale } from './fluent.js'
import { filterBreachDataTypes, appendBreachResolutionChecklist, BreachDataTypes } from './breachResolution.js'

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
  t.truthy(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].header,
    'Update your passwords.')
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].body,
    'In most cases, we’d recommend that you change your password on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you <a href="https://companyName.com" target="_blank">visit the site</a>. For added protection, make sure you’re using unique passwords for all accounts, so that any leaked passwords can’t be used to access other accounts.')
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
  t.truthy(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].header,
    'Reach out to companyName to inform them about this breach and ask for specific steps you can take.')
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].priority, 13)
})

test('appendBreachResolutionChecklist: only non-applicable data classes', t => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.SSN],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData, { countryCode: 'not-us' })
  t.truthy(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].header,
    'Reach out to companyName to inform them about this breach and ask for specific steps you can take.')
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].priority, 13)
})

test('appendBreachResolutionChecklist: data class with a resolution not applicable to the user\'s country', t => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.Email, BreachDataTypes.SSN],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData, { countryCode: 'not-us-or-ca' })
  // There should only be a resolution for `BreachDataTypes.Email`, as
  // `BreachDataTypes.SSN` refers to American companies like Equifax:
  t.deepEqual(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist),
    [BreachDataTypes.Email]
  )
})

test('appendBreachResolutionChecklist: data class with a resolution applicable to the user\'s country, Canada', t => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.Phone, BreachDataTypes.Email, BreachDataTypes.SSN],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData, { countryCode: 'ca' })
  t.deepEqual(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist),
    [BreachDataTypes.Email, BreachDataTypes.Phone]
  )
})

test('appendBreachResolutionChecklist: data class with a resolution applicable to the user\'s country, US', t => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.Phone, BreachDataTypes.Email, BreachDataTypes.SSN],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData, { countryCode: 'us' })
  t.deepEqual(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist),
    [BreachDataTypes.Email, BreachDataTypes.SSN, BreachDataTypes.Phone]
  )
})

test('appendBreachResolutionChecklist: data class with a resolution referring to the breach\'s domain, which is not available', t => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.SecurityQuestions, BreachDataTypes.Phone, BreachDataTypes.Passwords],
        Name: 'companyName',
        Domain: ''
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData)
  // There should be a resolution for `BreachDataTypes.Phone`,
  // `BreachDataTypes.Passwords` and `BreachDataTypes.SecurityQuestions`.
  // The last two should fallback to a more generic header string that does not
  // include the breached company's domain, which we don't know:
  t.deepEqual(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist),
    [BreachDataTypes.Passwords, BreachDataTypes.Phone, BreachDataTypes.SecurityQuestions]
  )
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].header,
    'Update your passwords.')
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].body,
    'In most cases, we’d recommend that you change your password on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you visit the site. For added protection, make sure you’re using unique passwords for all accounts, so that any leaked passwords can’t be used to access other accounts.')
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.SecurityQuestions].header,
    'Update your security questions.')
  t.is(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.SecurityQuestions].body,
    'In most cases, we’d recommend that you update your security questions on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you visit the site. For added protection, update these security questions on any important accounts where you’ve used them, and create unique passwords for all accounts.')
})

test('appendBreachResolutionChecklist: data class with a resolution referring to the breach\'s domain, which is available', t => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.SecurityQuestions, BreachDataTypes.Phone, BreachDataTypes.Passwords],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData)
  t.deepEqual(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist),
    [BreachDataTypes.Passwords, BreachDataTypes.Phone, BreachDataTypes.SecurityQuestions]
  )
})
