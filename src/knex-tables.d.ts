/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Knex } from "knex";
import { ScanResult } from "./app/functions/server/onerep";

// See https://knexjs.org/guide/#typescript
declare module "knex/types/tables" {
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
    fxa_profile_json: null | unknown;
    fxa_uid: null | string;
    // TODO: Find unknown type
    breaches_last_shown: null | unknown;
    all_emails_to_primary: boolean;
    // TODO: Find unknown type
    breaches_resolved: null | unknown;
    // TODO: Find unknown type
    waitlists_joined: null | unknown;
    // TODO: Find unknown type
    breach_stats: null | unknown;
    // TODO: Find unknown type
    monthly_email_at: null | unknown;
    // TODO: Find unknown type
    monthly_email_optout: null | unknown;
    // TODO: Find unknown type
    breach_resolution: null | unknown;
    // TODO: Find unknown type
    db_migration_1: null | unknown;
    // TODO: Find unknown type
    db_migration_2: null | unknown;
    // TODO: Find unknown type
    onerep_profile_id: null | unknown;
    // TODO: Find unknown type
    email_addresses: unknown[];
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
    onerep_scan_results: ScanResult;
    created_at: Date;
    updated_at: Date;
  }

  interface Tables {
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
      // On updates, auto-generated columns cannot be set, and nullable columns are optional:
      Omit<
        SubscriberRow,
        SubscriberAutoInsertedColumns | SubscriberOptionalColumns
      > &
        Partial<Pick<SubscriberRow, SubscriberOptionalColumns>>,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
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
  }
}
