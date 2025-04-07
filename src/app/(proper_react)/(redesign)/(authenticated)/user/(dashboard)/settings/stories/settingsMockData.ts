/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  EmailAddressRow,
  OnerepProfileRow,
  SubscriberRow,
} from "knex/types/tables";

const subscriberId = 7;

export const mockedVerifiedEmailSecond: EmailAddressRow = {
  id: 2,
  email: "email2@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: true,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};

export const mockedVerifiedEmailThird: EmailAddressRow = {
  id: 3,
  email: "email3@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: true,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};

export const mockedVerifiedEmailFourth: EmailAddressRow = {
  id: 4,
  email: "email4@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: false,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};

export const mockedVerifiedEmailFifth: EmailAddressRow = {
  id: 5,
  email: "email5@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: false,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};

export const mockedSubscriber: SubscriberRow = {
  updated_at: new Date(),
  fx_newsletter: true,
  all_emails_to_primary: true,
  waitlists_joined: true,
  email_addresses: [],
  id: subscriberId,
  created_at: new Date("2022-06-07 14:29:00.000-05"),
  primary_sha1: "abcabc",
  primary_email: "primary@email.com",
  primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
  primary_verified: true,
  fxa_access_token:
    "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
  fxa_refresh_token:
    "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
  fxa_session_expiry: new Date(0),
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
    subscriptions: [],
  },
  breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
  breaches_resolved: null,
  breach_stats: null,
  breach_resolution: null,
  monthly_email_at: "2022-08-07 14:22:00.000-05",
  monthly_email_optout: false,
  signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
  onerep_profile_id: null,
  monthly_monitor_report_at: null,
  monthly_monitor_report: false,
  sign_in_count: null,
  first_broker_removal_email_sent: false,
  churn_prevention_email_sent_at: null,
};

export const mockedSubscriberWithPlus = {
  ...mockedSubscriber,
  fxa_profile_json: {
    ...mockedSubscriber.fxa_profile_json,
    subscriptions: [],
  },
};

export const mockedProfileDataMin: OnerepProfileRow = {
  id: 1234,
  onerep_profile_id: 5678,
  name_suffix: "",
  first_name: "First01",
  last_name: "Last01",
  middle_name: "",
  first_names: [],
  middle_names: [],
  last_names: [],
  city_name: "Tulsa",
  state_code: "OK",
  addresses: [{ city: "Tulsa", state: "OK" }],
  phone_numbers: [],
  date_of_birth: new Date(),
  created_at: new Date(),
  updated_at: new Date(),
};
