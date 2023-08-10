/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const subscriber: Subscriber = {
  updated_at: new Date(),
  fx_newsletter: true,
  all_emails_to_primary: true,
  waitlists_joined: true,
  email_addresses: [],
  id: 12346,
  created_at: new Date("2022-06-07 14:29:00.000-05"),
  primary_sha1: "abcabc",
  primary_email: "asdf1@mailinator.com",
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
    "test@test.com": {
      "8": {
        isResolved: false,
        resolutionsChecked: ["passwords", "email-addresses"],
      },
      "40": {
        isResolved: true,
        resolutionsChecked: ["email-addresses", "phone-numbers"],
      },
      "252": {
        isResolved: true,
        resolutionsChecked: ["email-addresses"],
      },
      "320": {
        isResolved: true,
        resolutionsChecked: ["email-addresses"],
      },
    },
  },
  monthly_email_at: new Date("2022-08-07 14:22:00.000-05"),
  monthly_email_optout: false,
  signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
};

import { getSubBreaches } from "./subscriberBreaches";
import {
  Breach,
  Subscriber,
} from "../app/(nextjs_migration)/(authenticated)/user/breaches/breaches";
// import { getUserEmails } from "../db/tables/emailAddresses.js";
// import { getBreachesForEmail } from "./hibp.js";

// const userBreaches = {}
jest.mock("../db/tables/emailAddresses.js", () => ({
  getUserEmails: jest.fn().mockReturnValue([]),
}));

// const mockBreaches =
jest.mock("./hibp.js", () => ({
  getBreachesForEmail: jest.fn().mockReturnValue([
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
  ]),
}));

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

describe("getSubBreaches", () => {
  it.only("dataClassesEffected and emailsEffected", async () => {
    // mockGetBreachesForEmail = jest.fn().mockResolvedValue(mockBreaches)

    const subBreaches = await getSubBreaches(subscriber, allBreaches);
    expect(subBreaches.length).toEqual(1);
    expect(subBreaches[0].dataClasses).toEqual([
      "email-addresses",
      "passwords",
    ]);
    expect(subBreaches[0].dataClassesEffected[0]).toEqual({
      "email-addresses": ["asdf1@mailinator.com"],
    });
    expect(subBreaches[0].dataClassesEffected[1]).toEqual({ passwords: 1 });
    expect(subBreaches[0].emailsEffected.length).toEqual(1);
  });
});
