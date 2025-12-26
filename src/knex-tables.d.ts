/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Knex } from "knex";
import { Profile } from "next-auth";
import { ISO8601DateString } from "./utils/parse";
import { BreachDataTypes } from "./app/functions/universal/breach";
import type {
  formatDataClassesArray,
  HibpGetBreachesResponse,
} from "./utils/hibp";

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
  interface FeatureFlagViewRow {
    name: string;
    is_enabled: boolean;
    allow_list?: string[];
    updated_at: Date;
    last_updated_by_subscriber_id: SubscriberRow["id"];
  }

  type FeatureFlagViewOptionalColumns = Extract<
    keyof FeatureFlagViewRow,
    "allow_list"
  >;
  type FeatureFlagViewAutoInsertedColumns = Extract<
    keyof FeatureFlagViewRow,
    "created_at"
  >;

  interface FeatureFlagEventRow {
    name: string;
    is_enabled: boolean;
    allow_list?: string[];
    created_at: Date;
    created_by_subscriber_id: SubscriberRow["id"];
  }

  type FeatureFlagEventOptionalColumns = Extract<
    keyof FeatureFlagEventRow,
    "allow_list"
  >;
  type FeatureFlagEventAutoInsertedColumns = Extract<
    keyof FeatureFlagEventRow,
    "created_at"
  >;

  interface SubscriberEmail {
    id: number;
    email: string;
  }

  export type BreachResolutionChecked = {
    resolutionsChecked: Array<
      (typeof BreachDataTypes)[keyof typeof BreachDataTypes]
    >;
  };

  export type SubscriberBreachResolution = {
    [key: BreachRow.id]: BreachResolutionChecked;
  };

  type BreachResolution = null | {
    useBreachId: boolean;
    [key: SubscriberEmail["email"]]: SubscriberBreachResolution;
  };

  interface SubscriberRow {
    id: number;
    primary_sha1: string;
    primary_email: string;
    primary_verification_token: string;
    primary_verified: boolean;
    created_at: Date;
    updated_at: Date;
    fx_newsletter: boolean;
    signup_language: null | string;
    fxa_refresh_token: null | string;
    fxa_access_token: null | string;
    fxa_session_expiry: null | Date;
    fxa_profile_json: null | Profile;
    fxa_uid: null | string;
    // TODO: Find unknown type

    breaches_last_shown: Date;
    // NOTE: this field is inherited from an older version of the product, it only applies to instant alerts
    all_emails_to_primary: boolean | null; // added  null in MNTOR-1368
    // TODO: Find unknown type

    breaches_resolved: null | unknown;
    // TODO: Find unknown type

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
    monthly_monitor_report_at: null | Date;
    monthly_monitor_report: boolean;
    breach_resolution: BreachResolution;
    sign_in_count: null | number;
    email_addresses: SubscriberEmail[];
    first_broker_removal_email_sent: boolean;
    churn_prevention_email_sent_at: null | Date;
  }
  type SubscriberOptionalColumns = Extract<
    keyof SubscriberRow,
    | "fx_newsletter"
    | "fxa_access_token"
    | "fxa_refresh_token"
    | "fxa_session_expiry"
    | "fxa_profile_json"
    | "fxa_uid"
    | "breaches_last_shown"
    | "all_emails_to_primary"
    | "breaches_resolved"
    | "waitlists_joined"
    | "breach_stats"
    | "monthly_monitor_report_at"
    | "monthly_monitor_report"
    | "breach_resolution"
    | "email_addresses"
    | "first_broker_removal_email_sent"
    | "churn_prevention_email_sent_at"
  >;
  type SubscriberAutoInsertedColumns = Extract<
    keyof SubscriberRow,
    "id" | "created_at" | "updated_at" | "sign_in_count"
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

  interface SubscriberEmailPreferencesRow {
    id: number;
    subscriber_id: number;
    unsubscribe_token: string | null;
    monthly_monitor_report_free: boolean | null;
    monthly_monitor_report_free_at: Date | null;
  }

  interface BreachRow {
    id: number;
    name: HibpGetBreachesResponse[number]["Name"];
    title: HibpGetBreachesResponse[number]["Title"];
    domain: HibpGetBreachesResponse[number]["Domain"];
    breach_date: Date;
    /** Note: added_date is provided by HIBP; this is not the equivalent to created_at in other tables */
    added_date: Date;
    /** Note: modified_date is provided by HIBP; this is not the equivalent to updated_at in other tables */
    modified_date: Date;
    pwn_count: HibpGetBreachesResponse[number]["PwnCount"];
    description: null | HibpGetBreachesResponse[number]["Description"];
    logo_path: string;
    data_classes: ReturnType<typeof formatDataClassesArray>;
    is_verified: HibpGetBreachesResponse[number]["IsVerified"];
    is_fabricated: HibpGetBreachesResponse[number]["IsFabricated"];
    is_sensitive: HibpGetBreachesResponse[number]["IsSensitive"];
    is_retired: HibpGetBreachesResponse[number]["IsRetired"];
    is_spam_list: HibpGetBreachesResponse[number]["IsSpamList"];
    is_malware: HibpGetBreachesResponse[number]["IsMalware"];
    favicon_url: null | string;
  }
  type BreachOptionalColumns = Extract<
    keyof BreachRow,
    "domain" | "description"
  >;
  type BreachAutoInsertedColumns = Extract<keyof BreachRow, "id">;

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

  interface StatsRow {
    id: number;
    name: string;
    current: string;
    max: string;
    type: string;
    created_at: Date;
    modified_at: Date;
  }
  type StatsAutoInsertedColumns = Extract<
    keyof StatsRow,
    "id" | "created_at" | "modified_at"
  >;

  type AudienceRow = "all_users";

  interface AnnouncementRow {
    id: number;
    announcement_id: string;
    title: string;
    description: string;
    small_image_path: string;
    big_image_path: string;
    cta_label?: string;
    cta_link?: string;
    audience: AudienceRow;
    created_at: Date;
    updated_at: Date;
    label: string;
  }

  type AnnouncementRowInsertedColumns =
    | "id"
    | "created_at"
    | "updated_at"
    | "audience"
    | "small_image_path"
    | "big_image_path"
    | "title"
    | "description";
  type AnnouncementRowOptionalColumns =
    | "announcement_id"
    | "cta_label"
    | "cta_link";

  interface UserAnnouncementsRow {
    id: number;
    user_id: number;
    announcement_id: string;
    status: string;
    seen_at: Date;
    cleared_at: Date;
    clicked_at: Date;
    created_at: Date;
    updated_at: Date;
  }

  /**
   * This modifies row types to indicate that dates can also be inserted as ISO
   * 8601 strings, not just Date objects (which will be returned on SELECT queries)
   */
  type WritableDateColumns<Row extends object> = {
    [FieldName in keyof Row]: Exclude<Row[FieldName], undefined> extends Date
      ? ISO8601DateString | Date
      : Row[FieldName];
  };

  interface Tables {
    attributions: Knex.CompositeTableType<
      AttributionRow,
      // On inserts, auto-generated columns cannot be set, and nullable columns are optional:
      WritableDateColumns<
        Omit<
          AttributionRow,
          AttributionAutoInsertedColumns | AttributionOptionalColumns
        > &
          Partial<Pick<AttributionRow, AttributionOptionalColumns>>
      >,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
      WritableDateColumns<
        Partial<Omit<AttributionRow, "id" | "created_at">> &
          Pick<AttributionRow, "updated_at">
      >
    >;

    notifications: Knex.CompositeTableType<
      AnnouncementRow,
      WritableDateColumns<
        Omit<
          AnnouncementRow,
          NotificationAutoInsertedColumns | NotificationOptionalColumns
        > &
          Partial<Pick<AnnouncementRow, NotificationOptionalColumns>>
      >,
      // On updates, don't allow updating the ID and created date
      WritableDateColumns<
        Partial<Omit<AnnouncementRow, "id" | "created_at">> &
          Pick<AnnouncementRow, "updated_at">
      >
    >;

    feature_flag_view: Knex.CompositeTableType<
      FeatureFlagViewRow,
      // On inserts, auto-generated columns cannot be set, and nullable columns are optional:
      WritableDateColumns<
        Omit<
          FeatureFlagViewRow,
          FeatureFlagViewAutoInsertedColumns | FeatureFlagViewOptionalColumns
        > &
          Partial<Pick<FeatureFlagViewRow, FeatureFlagViewOptionalColumns>>
      >,
      // Don't allow updates; updating a flag requires adding a new event.
      // This allows us to make sure all updates are auditable.
      Record<string, never>
    >;

    feature_flag_events: Knex.CompositeTableType<
      FeatureFlagEventRow,
      // On inserts, auto-generated columns cannot be set, and nullable columns are optional:
      WritableDateColumns<
        Omit<
          FeatureFlagEventRow,
          FeatureFlagEventAutoInsertedColumns | FeatureFlagEventOptionalColumns
        > &
          Partial<Pick<FeatureFlagEventRow, FeatureFlagEventOptionalColumns>>
      >,
      // Don't allow updates; updating a flag requires adding a new event.
      // This allows us to make sure all updates are auditable.
      Record<string, never>
    >;

    subscribers: Knex.CompositeTableType<
      SubscriberRow,
      // On inserts, auto-generated columns cannot be set, and nullable columns are optional.
      WritableDateColumns<
        Omit<
          SubscriberRow,
          SubscriberAutoInsertedColumns | SubscriberOptionalColumns
        > &
          Partial<Pick<SubscriberRow, SubscriberOptionalColumns>>
      >,
      // On updates, don't allow updating the ID and created date; all
      WritableDateColumns<
        // otherfields are optional, except updated_at:
        Partial<Omit<SubscriberRow, "id" | "created_at">> &
          Pick<SubscriberRow, "updated_at">
      >
    >;

    subscriber_email_preferences: Knex.CompositeTableType<
      SubscriberEmailPreferencesRow,
      // On inserts, auto-generated columns cannot be set, and nullable columns are optional:
      WritableDateColumns<Omit<SubscriberEmailPreferencesRow, "id">>,
      // On updates, don't allow updating the ID; all other fields are optional:
      WritableDateColumns<Partial<Omit<SubscriberEmailPreferencesRow, "id">>>
    >;

    email_addresses: Knex.CompositeTableType<
      EmailAddressRow,
      // On inserts, auto-generated columns cannot be set, and nullable columns are optional:
      WritableDateColumns<
        Omit<EmailAddressRow, EmailAddressAutoInsertedColumns>
      >,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
      WritableDateColumns<
        Partial<Omit<EmailAddressRow, "id" | "created_at">> &
          Pick<EmailAddressRow, "updated_at">
      >
    >;

    breaches: Knex.CompositeTableType<
      BreachRow,
      // On inserts, auto-generated columns cannot be set, and nullable columns are optional:
      WritableDateColumns<
        Omit<BreachRow, BreachAutoInsertedColumns | BreachOptionalColumns> &
          Partial<Pick<BreachRow, BreachOptionalColumns>>
      >,
      // On updates, don't allow updating the ID; all other fields are optional:
      WritableDateColumns<Partial<Omit<BreachRow, "id">>>
    >;

    email_notifications: Knex.CompositeTableType<
      EmailNotificationRow,
      // On inserts, auto-generated columns cannot be set:
      WritableDateColumns<
        Omit<EmailNotificationRow, EmailAddressAutoInsertedColumns> &
          Partial<EmailNotificationRow>
      >,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except updated_at:
      WritableDateColumns<
        Partial<Omit<EmailNotificationRow, "id" | "created_at">> &
          Pick<EmailNotificationRow, "updated_at">
      >
    >;

    stats: Knex.CompositeTableType<
      StatsRow,
      // On inserts, auto-generated columns cannot be set:
      WritableDateColumns<
        Omit<StatsRow, StatsAutoInsertedColumns> & Partial<StatsRow>
      >,
      // On updates, don't allow updating the ID and created date; all other fields are optional, except modified_at:
      WritableDateColumns<
        Partial<Omit<StatsRow, "id" | "created_at">> &
          Pick<StatsRow, "modified_at">
      >
    >;
  }
}
