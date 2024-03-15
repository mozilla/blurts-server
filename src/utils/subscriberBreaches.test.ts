/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { getBreachesForEmail } from "./hibp";
import { getSubBreaches } from "./subscriberBreaches";
import { getUserEmails } from "../db/tables/emailAddresses";
import { Breach } from "../app/functions/universal/breach";

jest.mock("../db/tables/emailAddresses.js", () => ({
  getUserEmails: jest.fn(),
}));

jest.mock("./hibp.js", () => ({
  getBreachesForEmail: jest.fn(),
}));

const subscriber: SubscriberRow = {
  updated_at: new Date(),
  fx_newsletter: true,
  all_emails_to_primary: true,
  waitlists_joined: true,
  email_addresses: [],
  id: 12346,
  created_at: new Date("2022-06-07 14:29:00.000-05"),
  primary_sha1: "abcabc",
  primary_email: "test@test.com",
  primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
  primary_verified: true,
  fxa_access_token:
    "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
  fxa_refresh_token:
    "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
  fxa_uid: "12346",
  fxa_profile_json: {
    uid: "123",
    email: "test@test.com",
    avatar: "https://profile.stage.mozaws.net/v1/avatar/abc",
    locale: "en-US,en;q=0.5",
    amrValues: ["pwd", "email"],
    avatarDefault: false,
    metricsEnabled: true,
    twoFactorAuthentication: false,
  },
  breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
  breaches_resolved: { "has-breaches@example.com": [] },
  breach_stats: {
    passwords: {
      count: 1,
      numResolved: 0,
    },
    numBreaches: {
      count: 2,
      numResolved: 1,
      numUnresolved: 1,
    },
    monitoredEmails: {
      count: 1,
    },
  },
  breach_resolution: {
    useBreachId: true,
    "test@test.com": {
      "8": {
        resolutionsChecked: ["passwords", "email-addresses"],
      },
      "40": {
        resolutionsChecked: [
          "email-addresses",
          "passwords",
          "social-security-numbers",
        ],
      },
      "252": {
        resolutionsChecked: ["email-addresses"],
      },
      "320": {
        resolutionsChecked: ["email-addresses"],
      },
    },
  },
  monthly_email_at: new Date("2022-08-07 14:22:00.000-05"),
  monthly_email_optout: false,
  signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
  db_migration_1: undefined,
  db_migration_2: undefined,
  onerep_profile_id: null,
};

const allBreaches: Breach[] = [
  {
    Id: 627,
    Name: "Youku",
    Title: "Youku",
    Domain: "youku.com",
    BreachDate: "2016-12-01T08:00:00.000Z",
    AddedDate: "2017-04-15T11:02:35.000Z",
    ModifiedDate: "2017-04-15T11:02:35.000Z",
    PwnCount: 91890110,
    Description:
      'In late 2016, the online Chinese video service <a href="http://www.youku.com" target="_blank" rel="noopener">Youku</a> suffered a data breach. The incident exposed 92 million unique user accounts and corresponding MD5 password hashes. The data was contributed to Have I Been Pwned courtesy of rip@creep.im.',
    LogoPath: "Youku.png",
    DataClasses: ["email-addresses", "passwords"],
    IsVerified: true,
    IsFabricated: false,
    IsSensitive: false,
    IsRetired: false,
    IsSpamList: false,
    IsMalware: false,
    recencyIndex: 1,
    ResolutionsChecked: [],
  },
  {
    Id: 638,
    Name: "Zynga",
    Title: "Zynga",
    Domain: "zynga.com",
    BreachDate: "2019-09-01T07:00:00.000Z",
    AddedDate: "2019-12-19T04:54:45.000Z",
    ModifiedDate: "2020-01-11T00:41:51.000Z",
    PwnCount: 172869660,
    Description:
      'In September 2019, game developer <a href="https://www.cnet.com/news/words-with-friends-hack-reportedly-exposes-data-of-more-than-200m-players/" target="_blank" rel="noopener">Zynga (the creator of Words with Friends) suffered a data breach</a>. The incident exposed 173M unique email addresses alongside usernames and passwords stored as salted SHA-1 hashes. The data was provided to HIBP by <a href="https://dehashed.com/" target="_blank" rel="noopener">dehashed.com</a>.',
    LogoPath: "Zynga.png",
    DataClasses: ["email-addresses", "passwords", "phone-numbers", "usernames"],
    IsVerified: true,
    IsFabricated: false,
    IsSensitive: false,
    IsRetired: false,
    IsSpamList: false,
    IsMalware: false,
    recencyIndex: 2,
    ResolutionsChecked: [],
  },
];

const breachesWithNoneResolved = [
  {
    Id: 1,
    IsRetired: true,
    IsSpamList: false,
    IsFabricated: false,
    IsVerified: true,
    Domain: "something",
    DataClasses: ["email-addresses", "passwords", "something else"],
  },
  {
    Id: 2,
    IsRetired: false,
    IsSpamList: false,
    IsFabricated: false,
    IsVerified: true,
    Domain: "something",
    DataClasses: ["email-addresses", "passwords", "something else"],
  },
];

const breachesWithOneResolved = [
  {
    Id: 1,
    IsRetired: true,
    IsSpamList: false,
    IsFabricated: false,
    IsVerified: true,
    Domain: "something",
    DataClasses: ["email-addresses", "passwords", "something else"],
  },
  {
    Id: 40,
    IsRetired: false,
    IsSpamList: false,
    IsFabricated: false,
    IsVerified: true,
    Domain: "something",
    DataClasses: ["email-addresses", "passwords", "something else"],
  },
];

const breachesWithOneResolvedSsn = [
  {
    Id: 1,
    IsRetired: true,
    IsSpamList: false,
    IsFabricated: false,
    IsVerified: true,
    Domain: "something",
    DataClasses: ["email-addresses", "passwords", "something else"],
  },
  {
    Id: 40,
    IsRetired: false,
    IsSpamList: false,
    IsFabricated: false,
    IsVerified: true,
    Domain: "something",
    DataClasses: [
      "email-addresses",
      "passwords",
      "social-security-numbers",
      "something else",
    ],
  },
];

describe("getSubBreaches", () => {
  it("summarises which dataClasses and emails are breached for the given user", async () => {
    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      // The only affected email is the user's primary email; they have no
      // additional email addresses in this test:
      .mockResolvedValueOnce([]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    ).mockResolvedValueOnce(breachesWithNoneResolved);
    const subBreaches = await getSubBreaches(subscriber, [], "us");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(false);
    expect(subBreaches[0].dataClasses).toStrictEqual([
      "email-addresses",
      "passwords",
    ]);
    expect(subBreaches[0].dataClassesEffected[0]).toEqual({
      "email-addresses": ["test@test.com"],
    });
    expect(subBreaches[0].dataClassesEffected[1]).toEqual({ passwords: 1 });
  });

  it("returns that a breach is resolved for US users", async () => {
    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      // The only affected email is the user's primary email; they have no
      // additional email addresses in this test:
      .mockResolvedValueOnce([]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    ).mockResolvedValueOnce(breachesWithOneResolved);

    const subBreaches = await getSubBreaches(subscriber, [], "us");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(true);
  });

  it("returns that a breach is resolved for non-US users", async () => {
    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      // The only affected email is the user's primary email; they have no
      // additional email addresses in this test:
      .mockResolvedValueOnce([]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    ).mockResolvedValueOnce(breachesWithOneResolved);

    const subBreaches = await getSubBreaches(subscriber, [], "nl");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(true);
  });

  it("returns that a breach containing a SSN is resolved for US users", async () => {
    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      // The only affected email is the user's primary email; they have no
      // additional email addresses in this test:
      .mockResolvedValueOnce([]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    ).mockResolvedValueOnce(breachesWithOneResolvedSsn);

    const subBreaches = await getSubBreaches(subscriber, allBreaches, "us");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(true);
  });

  it("returns that a breach containing a SSN is unresolved for US users", async () => {
    const subscriberWithoutSsnResolved: SubscriberRow = {
      ...subscriber,
      breach_resolution: {
        useBreachId: true,
        "test@test.com": {
          "40": {
            resolutionsChecked: ["email-addresses", "passwords"],
          },
        },
      },
    };
    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      // The only affected email is the user's primary email; they have no
      // additional email addresses in this test:
      .mockResolvedValueOnce([]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    ).mockResolvedValueOnce(breachesWithOneResolvedSsn);

    const subBreaches = await getSubBreaches(
      subscriberWithoutSsnResolved,
      allBreaches,
      "us",
    );
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(false);
  });

  it("returns that a breach containing a SSN is resolved for non-US users", async () => {
    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      // The only affected email is the user's primary email; they have no
      // additional email addresses in this test:
      .mockResolvedValueOnce([]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    ).mockResolvedValueOnce(breachesWithOneResolvedSsn);

    const subBreaches = await getSubBreaches(subscriber, allBreaches, "nl");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(true);
  });

  it("can summarise data for multiple emails", async () => {
    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    ).mockResolvedValueOnce([
      {
        id: -1,
        subscriber_id: 2,
        email: "additional@test.com",
        verified: true,
        sha1: "",
      },
    ]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    )
      .mockResolvedValueOnce(breachesWithNoneResolved)
      .mockResolvedValueOnce(breachesWithNoneResolved);
    const subBreaches = await getSubBreaches(subscriber, allBreaches, "us");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].dataClasses).toEqual([
      "email-addresses",
      "passwords",
    ]);
    expect(subBreaches[0].dataClassesEffected[0]["email-addresses"]).toContain(
      "test@test.com",
    );
    expect(subBreaches[0].dataClassesEffected[0]["email-addresses"]).toContain(
      "additional@test.com",
    );
    expect(subBreaches[0].dataClassesEffected[1]).toEqual({ passwords: 2 });
  });

  it("also returns valid dataClassesEffected with a different subscriber email", async () => {
    const differentSubscriber = {
      ...subscriber,
      primary_email: "different@test.com",
    };
    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      // The only affected email is the user's primary email; they have no
      // additional email addresses in this test:
      .mockResolvedValueOnce([]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    ).mockResolvedValueOnce(breachesWithNoneResolved);
    const subBreaches = await getSubBreaches(
      differentSubscriber,
      allBreaches,
      "us",
    );
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].dataClasses).toEqual([
      "email-addresses",
      "passwords",
    ]);
    expect(subBreaches[0].dataClassesEffected[0]).toEqual({
      "email-addresses": ["different@test.com"],
    });
    expect(subBreaches[0].dataClassesEffected[1]).toEqual({ passwords: 1 });
  });

  it("normalises ISO 8601 date strings to Date objects", async () => {
    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      // The only affected email is the user's primary email; they have no
      // additional email addresses in this test:
      .mockResolvedValueOnce([]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    ).mockResolvedValueOnce(
      breachesWithNoneResolved.map((breach) => ({
        ...breach,
        // Make sure the found breaches have ISO 8601 date strings, rather than
        // Date objects:
        BreachDate: "2016-12-01T08:00:00.000Z",
        AddedDate: "2017-04-15T11:02:35.000Z",
        ModifiedDate: "2017-04-15T11:02:35.000Z",
      })),
    );

    const subBreaches = await getSubBreaches(subscriber, [], "us");

    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].addedDate).toBeInstanceOf(Date);
    expect(subBreaches[0].breachDate).toBeInstanceOf(Date);
    expect(subBreaches[0].modifiedDate).toBeInstanceOf(Date);
  });

  it("same breach, two emails: mark as unresolved if one email isn't resolved for US user", async () => {
    const subscriber: SubscriberRow = {
      updated_at: new Date(),
      fx_newsletter: true,
      all_emails_to_primary: true,
      waitlists_joined: true,
      email_addresses: [],
      id: 12346,
      created_at: new Date("2022-06-07 14:29:00.000-05"),
      primary_sha1: "abcabc",
      primary_email: "test@test.com",
      primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
      primary_verified: true,
      fxa_access_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
      fxa_refresh_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
      fxa_uid: "12346",
      fxa_profile_json: {
        uid: "123",
        email: "additional@test.com",
        avatar: "https://profile.stage.mozaws.net/v1/avatar/abc",
        locale: "en-US,en;q=0.5",
        amrValues: ["pwd", "email"],
        avatarDefault: false,
        metricsEnabled: true,
        twoFactorAuthentication: false,
      },
      breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
      breaches_resolved: { "has-breaches@example.com": [] },
      breach_stats: {
        passwords: {
          count: 1,
          numResolved: 0,
        },
        numBreaches: {
          count: 2,
          numResolved: 1,
          numUnresolved: 1,
        },
        monitoredEmails: {
          count: 1,
        },
      },
      breach_resolution: {
        useBreachId: true,
        "test@test.com": {
          "40": {
            resolutionsChecked: [
              "email-addresses",
              "phone-numbers",
              "social-security-numbers",
            ],
          },
        },
        "additional@test.com": {
          "40": {
            resolutionsChecked: ["email-addresses"],
          },
        },
      },
      monthly_email_at: new Date("2022-08-07 14:22:00.000-05"),
      monthly_email_optout: false,
      signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
    };

    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    ).mockResolvedValueOnce([
      {
        id: -1,
        subscriber_id: 2,
        email: "additional@test.com",
        verified: true,
        sha1: "",
      },
    ]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    )
      .mockResolvedValueOnce(breachesWithOneResolvedSsn)
      .mockResolvedValueOnce(breachesWithOneResolved);

    const subBreaches = await getSubBreaches(subscriber, [], "us");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(false);
  });

  it("same breach, two emails: mark as unresolved if one email isn't resolved for non-US user", async () => {
    const subscriber: SubscriberRow = {
      updated_at: new Date(),
      fx_newsletter: true,
      all_emails_to_primary: true,
      waitlists_joined: true,
      email_addresses: [],
      id: 12346,
      created_at: new Date("2022-06-07 14:29:00.000-05"),
      primary_sha1: "abcabc",
      primary_email: "test@test.com",
      primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
      primary_verified: true,
      fxa_access_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
      fxa_refresh_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
      fxa_uid: "12346",
      fxa_profile_json: {
        uid: "123",
        email: "additional@test.com",
        avatar: "https://profile.stage.mozaws.net/v1/avatar/abc",
        locale: "en-US,en;q=0.5",
        amrValues: ["pwd", "email"],
        avatarDefault: false,
        metricsEnabled: true,
        twoFactorAuthentication: false,
      },
      breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
      breaches_resolved: { "has-breaches@example.com": [] },
      breach_stats: {
        passwords: {
          count: 1,
          numResolved: 0,
        },
        numBreaches: {
          count: 2,
          numResolved: 1,
          numUnresolved: 1,
        },
        monitoredEmails: {
          count: 1,
        },
      },
      breach_resolution: {
        useBreachId: true,
        "test@test.com": {
          "40": {
            resolutionsChecked: ["email-addresses", "phone-numbers"],
          },
        },
        "additional@test.com": {
          "40": {
            resolutionsChecked: ["email-addresses"],
          },
        },
      },
      monthly_email_at: new Date("2022-08-07 14:22:00.000-05"),
      monthly_email_optout: false,
      signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
    };

    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    ).mockResolvedValueOnce([
      {
        id: -1,
        subscriber_id: 2,
        email: "additional@test.com",
        verified: true,
        sha1: "",
      },
    ]);
    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    )
      .mockResolvedValueOnce(breachesWithOneResolvedSsn)
      .mockResolvedValueOnce(breachesWithOneResolvedSsn);

    const subBreaches = await getSubBreaches(subscriber, [], "nl");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(false);
  });

  it("same breach, two emails: mark as resolved only if both emails have all data classes resolved for US user", async () => {
    const subscriber: SubscriberRow = {
      updated_at: new Date(),
      fx_newsletter: true,
      all_emails_to_primary: true,
      waitlists_joined: true,
      email_addresses: [],
      id: 12346,
      created_at: new Date("2022-06-07 14:29:00.000-05"),
      primary_sha1: "abcabc",
      primary_email: "test@test.com",
      primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
      primary_verified: true,
      fxa_access_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
      fxa_refresh_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
      fxa_uid: "12346",
      fxa_profile_json: {
        uid: "123",
        email: "additional@test.com",
        avatar: "https://profile.stage.mozaws.net/v1/avatar/abc",
        locale: "en-US,en;q=0.5",
        amrValues: ["pwd", "email"],
        avatarDefault: false,
        metricsEnabled: true,
        twoFactorAuthentication: false,
      },
      breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
      breaches_resolved: { "has-breaches@example.com": [] },
      breach_stats: {
        passwords: {
          count: 1,
          numResolved: 0,
        },
        numBreaches: {
          count: 2,
          numResolved: 1,
          numUnresolved: 1,
        },
        monitoredEmails: {
          count: 1,
        },
      },
      breach_resolution: {
        useBreachId: true,
        "test@test.com": {
          "40": {
            resolutionsChecked: [
              "email-addresses",
              "passwords",
              "social-security-numbers",
            ],
          },
        },
        "additional@test.com": {
          "40": {
            resolutionsChecked: [
              "email-addresses",
              "passwords",
              "social-security-numbers",
            ],
          },
        },
      },
      monthly_email_at: new Date("2022-08-07 14:22:00.000-05"),
      monthly_email_optout: false,
      signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
    };

    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      .mockResolvedValueOnce([
        {
          id: -1,
          subscriber_id: 2,
          email: "additional@test.com",
          verified: true,
          sha1: "",
        },
      ])
      .mockResolvedValueOnce([
        {
          id: -1,
          subscriber_id: 2,
          email: "additional@test.com",
          verified: true,
          sha1: "",
        },
      ]);

    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    )
      .mockResolvedValueOnce(breachesWithOneResolvedSsn)
      .mockResolvedValueOnce(breachesWithOneResolved);

    const subBreaches = await getSubBreaches(subscriber, [], "us");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(true);
  });

  it("same breach, two emails: mark as unresolved only if both emails don’t have all data classes resolved for US user", async () => {
    const subscriber: SubscriberRow = {
      updated_at: new Date(),
      fx_newsletter: true,
      all_emails_to_primary: true,
      waitlists_joined: true,
      email_addresses: [],
      id: 12346,
      created_at: new Date("2022-06-07 14:29:00.000-05"),
      primary_sha1: "abcabc",
      primary_email: "test@test.com",
      primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
      primary_verified: true,
      fxa_access_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
      fxa_refresh_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
      fxa_uid: "12346",
      fxa_profile_json: {
        uid: "123",
        email: "additional@test.com",
        avatar: "https://profile.stage.mozaws.net/v1/avatar/abc",
        locale: "en-US,en;q=0.5",
        amrValues: ["pwd", "email"],
        avatarDefault: false,
        metricsEnabled: true,
        twoFactorAuthentication: false,
      },
      breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
      breaches_resolved: { "has-breaches@example.com": [] },
      breach_stats: {
        passwords: {
          count: 1,
          numResolved: 0,
        },
        numBreaches: {
          count: 2,
          numResolved: 1,
          numUnresolved: 1,
        },
        monitoredEmails: {
          count: 1,
        },
      },
      breach_resolution: {
        useBreachId: true,
        "test@test.com": {
          "40": {
            resolutionsChecked: [
              "email-addresses",
              "passwords",
              "social-security-numbers",
            ],
          },
        },
        "additional@test.com": {
          "40": {
            resolutionsChecked: ["email-addresses"],
          },
        },
      },
      monthly_email_at: new Date("2022-08-07 14:22:00.000-05"),
      monthly_email_optout: false,
      signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
    };

    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      .mockResolvedValueOnce([
        {
          id: -1,
          subscriber_id: 2,
          email: "additional@test.com",
          verified: true,
          sha1: "",
        },
      ])
      .mockResolvedValueOnce([
        {
          id: -1,
          subscriber_id: 2,
          email: "additional@test.com",
          verified: true,
          sha1: "",
        },
      ]);

    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    )
      .mockResolvedValueOnce(breachesWithOneResolvedSsn)
      .mockResolvedValueOnce(breachesWithOneResolved);

    const subBreaches = await getSubBreaches(subscriber, [], "us");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(false);
  });

  it("same breach, two emails: mark as resolved only if both emails have all data classes resolved for non-US user", async () => {
    const subscriber: SubscriberRow = {
      updated_at: new Date(),
      fx_newsletter: true,
      all_emails_to_primary: true,
      waitlists_joined: true,
      email_addresses: [],
      id: 12346,
      created_at: new Date("2022-06-07 14:29:00.000-05"),
      primary_sha1: "abcabc",
      primary_email: "test@test.com",
      primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
      primary_verified: true,
      fxa_access_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
      fxa_refresh_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
      fxa_uid: "12346",
      fxa_profile_json: {
        uid: "123",
        email: "additional@test.com",
        avatar: "https://profile.stage.mozaws.net/v1/avatar/abc",
        locale: "en-US,en;q=0.5",
        amrValues: ["pwd", "email"],
        avatarDefault: false,
        metricsEnabled: true,
        twoFactorAuthentication: false,
      },
      breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
      breaches_resolved: { "has-breaches@example.com": [] },
      breach_stats: {
        passwords: {
          count: 1,
          numResolved: 0,
        },
        numBreaches: {
          count: 2,
          numResolved: 1,
          numUnresolved: 1,
        },
        monitoredEmails: {
          count: 1,
        },
      },
      breach_resolution: {
        useBreachId: true,
        "test@test.com": {
          "40": {
            resolutionsChecked: ["email-addresses", "passwords"],
          },
        },
        "additional@test.com": {
          "40": {
            resolutionsChecked: [
              "email-addresses",
              "passwords",
              "social-security-numbers",
            ],
          },
        },
      },
      monthly_email_at: new Date("2022-08-07 14:22:00.000-05"),
      monthly_email_optout: false,
      signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
    };

    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      .mockResolvedValueOnce([
        {
          id: -1,
          subscriber_id: 2,
          email: "additional@test.com",
          verified: true,
          sha1: "",
        },
      ])
      .mockResolvedValueOnce([
        {
          id: -1,
          subscriber_id: 2,
          email: "additional@test.com",
          verified: true,
          sha1: "",
        },
      ]);

    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    )
      .mockResolvedValueOnce(breachesWithOneResolved)
      .mockResolvedValueOnce(breachesWithOneResolvedSsn);

    const subBreaches = await getSubBreaches(subscriber, [], "nl");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(true);
  });

  it("same breach, two emails: mark as unresolved if both emails don’t have all data classes resolved for non-US user", async () => {
    const subscriber: SubscriberRow = {
      updated_at: new Date(),
      fx_newsletter: true,
      all_emails_to_primary: true,
      waitlists_joined: true,
      email_addresses: [],
      id: 12346,
      created_at: new Date("2022-06-07 14:29:00.000-05"),
      primary_sha1: "abcabc",
      primary_email: "test@test.com",
      primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
      primary_verified: true,
      fxa_access_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
      fxa_refresh_token:
        "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
      fxa_uid: "12346",
      fxa_profile_json: {
        uid: "123",
        email: "additional@test.com",
        avatar: "https://profile.stage.mozaws.net/v1/avatar/abc",
        locale: "en-US,en;q=0.5",
        amrValues: ["pwd", "email"],
        avatarDefault: false,
        metricsEnabled: true,
        twoFactorAuthentication: false,
      },
      breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
      breaches_resolved: { "has-breaches@example.com": [] },
      breach_stats: {
        passwords: {
          count: 1,
          numResolved: 0,
        },
        numBreaches: {
          count: 2,
          numResolved: 1,
          numUnresolved: 1,
        },
        monitoredEmails: {
          count: 1,
        },
      },
      breach_resolution: {
        useBreachId: true,
        "test@test.com": {
          "40": {
            resolutionsChecked: ["email-addresses", "passwords"],
          },
        },
        "additional@test.com": {
          "40": {
            resolutionsChecked: ["email-addresses", "social-security-numbers"],
          },
        },
      },
      monthly_email_at: new Date("2022-08-07 14:22:00.000-05"),
      monthly_email_optout: false,
      signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
    };

    (
      getUserEmails as jest.Mock<
        ReturnType<typeof getUserEmails>,
        Parameters<typeof getUserEmails>
      >
    )
      .mockResolvedValueOnce([
        {
          id: -1,
          subscriber_id: 2,
          email: "additional@test.com",
          verified: true,
          sha1: "",
        },
      ])
      .mockResolvedValueOnce([
        {
          id: -1,
          subscriber_id: 2,
          email: "additional@test.com",
          verified: true,
          sha1: "",
        },
      ]);

    (
      getBreachesForEmail as jest.Mock<
        ReturnType<typeof getBreachesForEmail>,
        Parameters<typeof getBreachesForEmail>
      >
    )
      .mockResolvedValueOnce(breachesWithOneResolved)
      .mockResolvedValueOnce(breachesWithOneResolvedSsn);

    const subBreaches = await getSubBreaches(subscriber, [], "nl");
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].isResolved).toBe(false);
  });
});
