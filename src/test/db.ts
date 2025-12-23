/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { faker } from "@faker-js/faker";
import type { BreachNotificationSubscriber } from "../db/models/BreachNotificationSubscriber";
import { Tables } from "knex/types/tables";
import { createRandomHibpListing } from "../apiMocks/mockData";
import { Knex } from "knex";
import { getSha1 } from "../utils/fxa";

/** Fake for BreachNotificationSubscriber */
function mockBreachNotificationSubscriber(
  overrides: Partial<BreachNotificationSubscriber> = {},
): BreachNotificationSubscriber {
  return {
    subscriber_id: faker.number.int({ min: 0 }),
    all_emails_to_primary: faker.helpers.arrayElement([true, false, null]),
    primary_email: faker.internet.exampleEmail(),
    breached_email: faker.internet.exampleEmail(),
    notification_email: faker.internet.exampleEmail(),
    signup_language: "en-US",
    fxa_profile_json: null,
    fxa_uid: null,
    ...overrides,
  };
}

type InsertType<T extends keyof Tables> =
  Tables[T] extends Knex.CompositeTableType<unknown, infer I, unknown>
    ? I
    : never;

/** Insertable fake for subscribers table */
function subscriberSeed(
  overrides?: Partial<InsertType<"subscribers">>,
): InsertType<"subscribers"> {
  // Note that if primary_sha1 is manually overridden, it will be
  // out-of-sync with primary_email
  const primary_email =
    overrides?.primary_email ?? faker.internet.email().toLowerCase();
  const base: InsertType<"subscribers"> = {
    primary_email,
    primary_sha1: getSha1(primary_email),
    primary_verification_token: faker.string.alphanumeric(32),
    primary_verified: faker.datatype.boolean(),
    fx_newsletter: faker.datatype.boolean(),
    signup_language: faker.helpers.arrayElement([null, "en", "es", "fr"]),
    fxa_refresh_token: null,
    fxa_access_token: null,
    fxa_session_expiry: null,
    fxa_profile_json: null,
    fxa_uid: null,
    breaches_last_shown: faker.date.recent({ days: 60 }),
    all_emails_to_primary: faker.helpers.arrayElement([true, false, null]),
    breaches_resolved: null,
    waitlists_joined: null,
    breach_stats: faker.datatype.boolean()
      ? {
          passwords: {
            count: faker.number.int({ min: 0, max: 20 }),
            numResolved: faker.number.int({ min: 0, max: 20 }),
          },
          numBreaches: {
            count: faker.number.int({ min: 0, max: 30 }),
            numResolved: faker.number.int({ min: 0, max: 30 }),
            numUnresolved: faker.number.int({ min: 0, max: 30 }),
          },
          monitoredEmails: { count: faker.number.int({ min: 1, max: 5 }) },
        }
      : null,
    monthly_monitor_report_at: null,
    monthly_monitor_report: faker.datatype.boolean(),
    breach_resolution: null,
    first_broker_removal_email_sent: faker.datatype.boolean(),
    churn_prevention_email_sent_at: null,
    ...(overrides ?? {}),
  };
  return base;
}

/** Insertable fake for breaches table */
function breachSeed(
  overrides?: Partial<InsertType<"breaches">>,
): InsertType<"breaches"> {
  const base = createRandomHibpListing();
  // Could consider writing a snake_case converter if more
  // methods would use it
  return {
    name: base.Name,
    title: base.Title,
    domain: base.Domain,
    breach_date: base.BreachDate,
    added_date: base.AddedDate,
    modified_date: base.ModifiedDate,
    pwn_count: base.PwnCount,
    description: base.Description,
    logo_path: base.LogoPath,
    data_classes: base.DataClasses,
    is_verified: base.IsVerified,
    is_fabricated: base.IsFabricated,
    is_sensitive: base.IsSensitive,
    is_retired: base.IsRetired,
    is_spam_list: base.IsSpamList,
    is_malware: base.IsMalware,
    favicon_url: base.FaviconUrl ?? null,
    ...(overrides ?? {}),
  };
}
/** Insertable fake for email_addresses table */
function emailSeed(
  subscriberId: number,
  overrides?: Partial<Omit<InsertType<"email_addresses">, "subscriber_id">>,
): InsertType<"email_addresses"> {
  const email = overrides?.email ?? faker.internet.email().toLowerCase();
  return {
    subscriber_id: subscriberId,
    email,
    sha1: getSha1(email),
    verification_token: faker.string.alphanumeric({ length: 20 }),
    verified: faker.datatype.boolean(),
    ...(overrides ?? {}),
  };
}

/** Insertable fake for email_notifications table */
function emailNotificationSeed(
  subscriberId: number,
  breachId: number,
  overrides?: Partial<
    Omit<InsertType<"email_notifications">, "subscriber_id" | "breach_id">
  >,
): InsertType<"email_notifications"> {
  return {
    subscriber_id: subscriberId,
    breach_id: breachId,
    appeared: true,
    notified: faker.datatype.boolean(),
    email: faker.internet.exampleEmail(),
    notification_type: "incident",
    ...overrides,
  };
}

export const seeds = {
  subscribers: subscriberSeed,
  breaches: breachSeed,
  emails: emailSeed,
  emailNotifications: emailNotificationSeed,
  breachNotificationSubscriber: mockBreachNotificationSubscriber,
};
