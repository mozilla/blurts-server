import { breachSummary } from './breach-summary'

describe('utils:breach-resolution', () => {
  // beforeAll(async () => {
  //   await initFluentBundles()
  //   updateLocale('en')
  // })

  test('breachSummary: handles null input', () => {
    const verifiedEmails = null
    const resp = breachSummary(verifiedEmails)
    expect(resp.monitoredEmails.count).toEqual(0)
  })

  test('breachSummary: handles empty input', () => {
    const verifiedEmails = []
    const resp = breachSummary(verifiedEmails)
    expect(resp.monitoredEmails.count).toEqual(0)
  })

  test('breachSummary', () => {
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
    expect(resp.monitoredEmails.count).toEqual(2)
    expect(resp.numBreaches.count).toEqual(1)
    expect(resp.numBreaches.numResolved).toEqual(0)
    expect(resp.numBreaches.numUnresolved).toEqual(1)
    expect(resp.breachedDataTypes.passwords).toEqual(0)
    expect(resp.breachedDataTypes['email-addresses']).toEqual(1)
    expect(resp.breachedDataTypes['ip-addresses']).toEqual(0)
    expect(resp.breachedDataTypes.other).toEqual(0)
  })
})
