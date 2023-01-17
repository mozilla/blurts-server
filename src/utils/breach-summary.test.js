import test from 'ava'

import { breachedDataTypes, breachSummary } from './breach-summary.js'

test('breachSummary: handles null input', t => {
  const verifiedEmails = null
  const resp = breachSummary(verifiedEmails)
  t.is(resp.monitoredEmails.count, 0)
})

test('breachSummary: handles empty input', t => {
  const verifiedEmails = []
  const resp = breachSummary(verifiedEmails)
  t.is(resp.monitoredEmails.count, 0)
})

test('breachSummary: unresolved breaches', t => {
  const verifiedEmails = [{
    email: 'test@test.com',
    breaches: [],
    primary: true
  }, {
    email: 'test2@test.com',
    breaches: [{
      recencyIndex: 17,
      Name: 'Gravatar',
      Title: 'Gravatar',
      Domain: 'gravatar.com',
      BreachDate: '2020-10-03T07:00:00.000Z',
      AddedDate: '2021-12-05T22:45:58.000Z',
      ModifiedDate: '2021-12-08T01:47:02.000Z',
      PwnCount: 113990759,
      Description: "In October 2020, <a href=\"https://www.bleepingcomputer.com/news/security/online-avatar-service-gravatar-allows-mass-collection-of-user-info/\" target=\"_blank\" rel=\"noopener\">a security researcher published a technique for scraping large volumes of data from Gravatar, the service for providing globally unique avatars </a>. 167 million names, usernames and MD5 hashes of email addresses used to reference users' avatars were subsequently scraped and distributed within the hacking community. 114 million of the MD5 hashes were cracked and distributed alongside the source hash, thus disclosing the original email address and accompanying data. Following the impacted email addresses being searchable in HIBP, <a href=\"https://en.gravatar.com/support/data-privacy\" target=\"_blank\" rel=\"noopener\">Gravatar release an FAQ detailing the incident</a>.",
      LogoPath: 'Gravatar.png',
      DataClasses: [
        'email-addresses'
      ],
      IsVerified: true,
      IsFabricated: false,
      IsSensitive: false,
      IsRetired: false,
      IsSpamList: false,
      IsMalware: false,
      IsResolved: false,
      ResolutionsChecked: []
    }],
    primary: false
  }]
  const resp = breachSummary(verifiedEmails)
  t.is(resp.monitoredEmails.count, 2)
  t.is(resp.numBreaches.count, 1)
  t.is(resp.numBreaches.numResolved, 0)
  t.is(resp.numBreaches.numUnresolved, 1)
})
test('breachSummary: resolved breaches', t => {
  const verifiedEmails = [{
    email: 'test@test.com',
    breaches: [{
      recencyIndex: 1,
      Name: 'Test',
      DataClasses: [
        'email-addresses',
        'passwords',
        'ip-addresses',
        'something-else'
      ],
      IsResolved: true,
      ResolutionsChecked: ['email-addresses',
        'passwords',
        'ip-addresses',
        'something-else']
    }],
    primary: true
  }, {
    email: 'test2@test.com',
    breaches: [{
      recencyIndex: 17,
      Name: 'Gravatar',
      Title: 'Gravatar',
      Domain: 'gravatar.com',
      BreachDate: '2020-10-03T07:00:00.000Z',
      AddedDate: '2021-12-05T22:45:58.000Z',
      ModifiedDate: '2021-12-08T01:47:02.000Z',
      PwnCount: 113990759,
      Description: "In October 2020, <a href=\"https://www.bleepingcomputer.com/news/security/online-avatar-service-gravatar-allows-mass-collection-of-user-info/\" target=\"_blank\" rel=\"noopener\">a security researcher published a technique for scraping large volumes of data from Gravatar, the service for providing globally unique avatars </a>. 167 million names, usernames and MD5 hashes of email addresses used to reference users' avatars were subsequently scraped and distributed within the hacking community. 114 million of the MD5 hashes were cracked and distributed alongside the source hash, thus disclosing the original email address and accompanying data. Following the impacted email addresses being searchable in HIBP, <a href=\"https://en.gravatar.com/support/data-privacy\" target=\"_blank\" rel=\"noopener\">Gravatar release an FAQ detailing the incident</a>.",
      LogoPath: 'Gravatar.png',
      DataClasses: [
        'email-addresses'
      ],
      IsVerified: true,
      IsFabricated: false,
      IsSensitive: false,
      IsRetired: false,
      IsSpamList: false,
      IsMalware: false,
      IsResolved: true,
      ResolutionsChecked: ['email-addresses']
    }, {
      recencyIndex: 2,
      Name: 'Test2',
      DataClasses: [
        'email-addresses',
        'passwords'
      ],
      IsResolved: false,
      ResolutionsChecked: []
    }, {
      recencyIndex: 3,
      Name: 'Test3',
      DataClasses: [
        'something-else'
      ],
      IsResolved: false,
      ResolutionsChecked: []
    }],
    primary: false
  }]
  const resp = breachSummary(verifiedEmails)
  t.is(resp.monitoredEmails.count, 2)
  t.is(resp.numBreaches.count, 4)
  t.is(resp.numBreaches.numResolved, 2)
  t.is(resp.numBreaches.numUnresolved, 2)
})

test('breachedDataTypes', t => {
  const verifiedEmails = [{
    email: 'test@test.com',
    breaches: [{
      recencyIndex: 1,
      Name: 'Test',
      DataClasses: [
        'email-addresses',
        'passwords',
        'ip-addresses',
        'something-else'
      ],
      IsResolved: true,
      ResolutionsChecked: ['email-addresses',
        'passwords',
        'ip-addresses',
        'something-else']
    }],
    primary: true
  }, {
    email: 'test2@test.com',
    breaches: [{
      recencyIndex: 17,
      Name: 'Gravatar',
      Title: 'Gravatar',
      Domain: 'gravatar.com',
      BreachDate: '2020-10-03T07:00:00.000Z',
      AddedDate: '2021-12-05T22:45:58.000Z',
      ModifiedDate: '2021-12-08T01:47:02.000Z',
      PwnCount: 113990759,
      Description: "In October 2020, <a href=\"https://www.bleepingcomputer.com/news/security/online-avatar-service-gravatar-allows-mass-collection-of-user-info/\" target=\"_blank\" rel=\"noopener\">a security researcher published a technique for scraping large volumes of data from Gravatar, the service for providing globally unique avatars </a>. 167 million names, usernames and MD5 hashes of email addresses used to reference users' avatars were subsequently scraped and distributed within the hacking community. 114 million of the MD5 hashes were cracked and distributed alongside the source hash, thus disclosing the original email address and accompanying data. Following the impacted email addresses being searchable in HIBP, <a href=\"https://en.gravatar.com/support/data-privacy\" target=\"_blank\" rel=\"noopener\">Gravatar release an FAQ detailing the incident</a>.",
      LogoPath: 'Gravatar.png',
      DataClasses: [
        'email-addresses'
      ],
      IsVerified: true,
      IsFabricated: false,
      IsSensitive: false,
      IsRetired: false,
      IsSpamList: false,
      IsMalware: false,
      IsResolved: true,
      ResolutionsChecked: ['email-addresses']
    }, {
      recencyIndex: 2,
      Name: 'Test2',
      DataClasses: [
        'email-addresses',
        'passwords'
      ],
      IsResolved: false,
      ResolutionsChecked: []
    }, {
      recencyIndex: 3,
      Name: 'Test3',
      DataClasses: [
        'something-else'
      ],
      IsResolved: false,
      ResolutionsChecked: []
    }],
    primary: false
  }]
  const resp = breachedDataTypes(verifiedEmails, 'test2@test.com')
  t.is(resp['test@test.com']?.passwords, 1)
  t.is(resp['test@test.com']['email-addresses'], 1)
  t.is(resp['test2@test.com']?.passwords, 1)
  t.is(resp['test2@test.com']['email-addresses'], 2)
})
