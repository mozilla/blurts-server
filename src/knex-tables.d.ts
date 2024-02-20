/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Knex } from "knex";
import { Profile } from "next-auth";
import { Scan } from "./app/functions/server/onerep";
import { StateAbbr } from "./utils/states";
import { RemovalStatus } from "./app/functions/universal/scanResult";
import { BreachDataTypes } from "./app/functions/universal/breach";

// See https://knexjs.org/guide/#typescript
declare module "knex/types/tables" {
  interface AttributionRow {
    id: number;
    subscriber_id: number;
    type: string; // first, last touch
    utm_source?: string;
    utm_campaign?: string;
    utm_medium?: string;
    utm_term?: string;
    entrypoint?: string;
    other_utm_parameters?: Record<string, string>;
    created_at: Date;
    updated_at: Date;
  }

  type AttributionOptionalColumns = Extract<
    keyof AttributionRow,
    | "utm_source"
    | "utm_campaign"
    | "utm_medium"
    | "utm_term"
    | "entrypoint"
    | "other_utm_parameters"
  >;
  type AttributionAutoInsertedColumns = Extract<
    keyof AttributionRow,
    "id" | "subscriber_id" | "created_at" | "updated_at"
  >;

  interface FeatureFlagRow {
    name: string;
    is_enabled: boolean;
    description?: string;
    dependencies?: string[];
    allow_list?: string[];
    wait_list?: string[];
    added_at?: Date;
    modified_at?: Date;
    expired_at?: Date;
    deleted_at?: Date;
    owner?: string;
  }

  type FeatureFlagOptionalColumns = Extract<
    keyof FeatureFlagRow,
    | "description"
    | "dependencies"
    | "allow_list"
    | "wait_list"
    | "added_at"
    | "modified_at"
    | "expired_at"
    | "owner"
  >;
  type FeatureFlagAutoInsertedColumns = Extract<
    keyof FeatureFlagRow,
    "name" | "created_at" | "modified_at"
  >;

  interface SubscriberEmail {
    id: number;
    email: string;
  }

  interface SubscriberRow {
    id: number;
    primary_sha1: string;
    primary_email: string;
    primary_verification_token: string;
    primary_verified: boolean;
    created_at: Date;
    updated_at: Date;
    fx_newsletter: boolean;
    signup_language: string;
    fxa_refresh_token: null | string;
    fxa_access_token: null | string;
    fxa_profile_json: null | Profile;
    fxa_uid: null | string;
    // TODO: Find unknown type
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    breaches_last_shown: null | unknown;
    all_emails_to_primary: boolean;
    // TODO: Find unknown type
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    breaches_resolved: null | unknown;
    // TODO: Find unknown type
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    waitlists_joined: null | unknown;
    breach_stats: null | {
      passwords: { count: number; numResolved: number };
      numBreaches: {
        count: number;
        numResolved: number;
        numUnresolved: number;
      };
      monitoredEmails: { count: number };
    };
    // TODO: Find unknown type
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    monthly_email_at: null | unknown;
    // TODO: Find unknown type
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    monthly_email_optout: null | unknown;
    breach_resolution:
      | null
      | ({
          useBreachId: boolean;
        } & Record<
          SubscriberEmail.email,
          Record<
            BreachRow.id,
            {
              resolutionsChecked: Array<
                (typeof BreachDataTypes)[keyof typeof BreachDataTypes]
              >;
            }
          >
        >);
    // TODO: Find unknown type
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    db_migration_1: null | unknown;
    // TODO: Find unknown type
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    db_migration_2: null | unknown;
    onerep_profile_id: null | number;
    email_addresses: SubscriberEmail[];
  }
  type SubscriberOptionalColumns = Extract<
    keyof SubscriberRow,
    | "fx_newsletter"
    | "fxa_access_token"
    | "fxa_refresh_token"
    | "fxa_profile_json"
    | "fxa_uid"
    | "breaches_last_shown"
    | "all_emails_to_primary"
    | "breaches_resolved"
    | "waitlists_joined"
    | "breach_stats"
    | "monthly_email_at"
    | "monthly_email_optout"
    | "breach_resolution"
    | "db_migration_1"
    | "db_migration_2"
    | "onerep_profile_id"
    | "email_addresses"
  >;
  type SubscriberAutoInsertedColumns = Extract<
    keyof SubscriberRow,
    "id" | "created_at" | "updated_at"
  >;

  interface EmailAddressRow {
    id: number;
    subscriber_id: SubscriberRow["id"];
    sha1: string;
    email: string;
    verification_token: string;
    verified: boolean;
    created_at: Date;
    updated_at: Date;
  }
  type EmailAddressAutoInsertedColumns = Extract<
    keyof EmailAddressRow,
    "id" | "created_at" | "updated_at"
  >;

  interface BreachRow {
    id: number;
    name: string;
    title: string;
    domain: null | string;
    breach_date: Date;
    /** Note: added_date is provided by HIBP; this is not the equivalent to created_at in other tables */
    added_date: Date;
    /** Note: modified_date is provided by HIBP; this is not the equivalent to updated_at in other tables */
    modified_date: Date;
    pwn_count: number;
    description: null | string;
    logo_path: string;
    // TODO: Verify if Knex can actually parse this into a `string[]`
    data_classes: unknown;
    is_verified: boolean;
    is_fabricated: boolean;
    is_sensitive: boolean;
    is_retired: boolean;
    is_spam_list: boolean;
    is_malware: boolean;
    favicon_url: null | string;
  }
  type BreachOptionalColumns = Extract<
    keyof BreachRow,
    "domain" | "description"
  >;
  type BreachAutoInsertedColumns = Extract<keyof BreachRow, "id">;

  interface OnerepScanRow {
    id: number;
    onerep_profile_id: number;
    onerep_scan_id: number;
    onerep_scan_reason: Scan["reason"];
    onerep_scan_status: Scan["status"];
    created_at: Date;
    updated_at: Date;
  }
  type OnerepScanOptionalColumns = Extract<
    keyof OnerepScanRow,
    "onerep_profile_id"
  >;
  type OnerepScanAutoInsertedColumns = Extract<
    keyof OnerepScanRow,
    "id" | "created_at" | "updated_at"
  >;

  interface OnerepScanResultRow {
    id: number;
    onerep_scan_result_id: number;
    onerep_scan_id: OnerepScanRow["onerep_scan_id"];
    link: string;
    age?: number;
    data_broker: string;
    data_broker_id: number;
    emails: string[];
    phones: string[];
    addresses: Array<{
      city: string;
      state: StateAbbr;
      street?: string;
      zip?: string;
    }>;
    relatives: string[];
    first_name: string;
    middle_name?: string;
    last_name: string;
    status: RemovalStatus;
    manually_resolved: boolean;
    created_at: Date;
    updated_at: Date;
  }
  type OnerepScanResultOptionalColumns = Extract<
    keyof OnerepScanResultRow,
    "manually_resolved" | "middle_name"
  >;
  type OnerepScanResultSerializedColumns = Extract<
    keyof OnerepScanResultRow,
    "emails" | "phones" | "addresses" | "relatives"
  >;
  type OnerepScanResultAutoInsertedColumns = Extract<
    keyof OnerepScanResultRow,
    "id" | "created_at" | "updated_at"
  >;

  interface OnerepProfileRow {
    id: number;
    onerep_profile_id: null | number;
    first_name: string;
    last_name: string;
    city_name: string;
    state_code: StateAbbr;
    date_of_birth: Date;
    created_at: Date;
    updated_at: Date;
  }
  type OnerepProfileOptionalColumns = Extract<
    keyof OnerepProfileRow,
    "onerep_profile_id"
  >;
  type OnerepProfileAutoInsertedColumns = Extract<
    keyof OnerepProfileRow,
    "id" | "created_at" | "updated_at"
  >;

  interface EmailNotificationRow {
    id: number;
    subscriber_id: number;
    breach_id: number;
    appeared: boolean;
    notified: boolean;
    email: string;
    notification_type: string;
    created_at: Date;
    updated_at: Date;
  }
  type EmailNotificationAutoInsertedColumns = Extract<
    keyof EmailNotificationRow,
    "id" | "created_at" | "updated_at"
  >;

  interface Tables {
    attributions: Knex.CompositeTableType<
      AttributionRow,
      // On updates, auto-generated columns cannot be set, and nullable columns are optional:
      Omit<
        AttributionRow,
        AttributionAutoInsertedColumns | AttributionOptionalColumns
      > &
        Partial<Pick<AttributionRow, AttributionOptionalColumns>>,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
      Partial<Omit<AttributionRow, "id" | "created_at">> &
        Pick<AttributionRow, "updated_at">
    >;

    feature_flags: Knex.CompositeTableType<
      FeatureFlagRow,
      // On updates, auto-generated columns cannot be set, and nullable columns are optional:
      Omit<
        FeatureFlagRow,
        FeatureFlagAutoInsertedColumns | FeatureFlagOptionalColumns
      > &
        Partial<Pick<FeatureFlagRow, FeatureFlagOptionalColumns>>,
      // On updates, don't allow updating the ID and created date; all other fields are optional:
      Partial<Omit<FeatureFlagRow, "name" | "created_at">>
    >;

    subscribers: Knex.CompositeTableType<
      SubscriberRow,
      // On inserts, auto-generated columns cannot be set, and nullable columns are optional.
      Omit<
        SubscriberRow,
        SubscriberAutoInsertedColumns | SubscriberOptionalColumns
      > &
        Partial<Pick<SubscriberRow, SubscriberOptionalColumns>>,
      // On updates, don't allow updating the ID and created date; all
      // otherfields are optional, except updated_at:
      Partial<Omit<SubscriberRow, "id" | "created_at">> &
        Pick<SubscriberRow, "updated_at">
    >;

    email_addresses: Knex.CompositeTableType<
      EmailAddressRow,
      // On updates, auto-generated columns cannot be set, and nullable columns are optional:
      Omit<EmailAddressRow, EmailAddressAutoInsertedColumns>,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
      Partial<Omit<EmailAddressRow, "id" | "created_at">> &
        Pick<EmailAddressRow, "updated_at">
    >;

    breaches: Knex.CompositeTableType<
      BreachRow,
      // On updates, auto-generated columns cannot be set, and nullable columns are optional:
      Omit<BreachRow, BreachAutoInsertedColumns | BreachOptionalColumns> &
        Partial<Pick<BreachRow, BreachOptionalColumns>>,
      // On updates, don't allow updating the ID; all other fields are optional:
      Partial<Omit<BreachRow, "id">>
    >;

    onerep_scans: Knex.CompositeTableType<
      OnerepScanRow,
      // On updates, auto-generated columns cannot be set, and nullable columns are optional:
      Omit<
        OnerepScanRow,
        OnerepScanAutoInsertedColumns | OnerepScanOptionalColumns
      > &
        Partial<Pick<OnerepScanRow, OnerepScanOptionalColumns>>,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
      Partial<Omit<OnerepScanRow, "id" | "created_at">> &
        Pick<OnerepScanRow, "updated_at">
    >;

    onerep_scan_results: Knex.CompositeTableType<
      OnerepScanResultRow,
      // On updates, auto-generated columns cannot be set, and nullable columns are optional:
      Omit<
        OnerepScanResultRow,
        | OnerepScanResultAutoInsertedColumns
        | OnerepScanResultOptionalColumns
        | OnerepScanResultSerializedColumns
      > &
        Partial<Pick<OnerepScanResultRow, OnerepScanResultOptionalColumns>> &
        Record<OnerepScanResultSerializedColumns, string>,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
      Partial<Omit<OnerepScanResultRow, "id" | "created_at">> &
        Pick<OnerepScanResultRow, "updated_at"> &
        Record<OnerepScanResultSerializedColumns, string>
    >;

    onerep_profiles: Knex.CompositeTableType<
      OnerepProfileRow,
      // On updates, auto-generated columns cannot be set, and nullable columns are optional:
      Omit<
        OnerepProfileRow,
        OnerepProfileAutoInsertedColumns | OnerepProfileOptionalColumns
      > &
        Partial<Pick<OnerepProfileRow, OnerepProfileOptionalColumns>>,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
      Partial<Omit<OnerepProfileRow, "id" | "created_at">> &
        Pick<OnerepProfileRow, "updated_at">
    >;

    email_notifications: Knex.CompositeTableType<
      EmailNotificationRow,
      // On updates, auto-generated columns cannot be set:
      Omit<EmailNotificationRow, EmailAddressAutoInsertedColumns> &
        Partial<EmailNotificationRow>,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
      Partial<Omit<EmailNotificationRow, "id" | "created_at">> &
        Pick<EmailNotificationRow, "updated_at">
    >;
  }
  interface StatsRow {
    name: string;
    current: string;
    max: string;
    type: string;
  }
}
