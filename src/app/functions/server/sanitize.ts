/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Functions that only return data we wouldn't mind sending to the client
 */

import "./notInClientComponent";
import { EmailAddressRow, SubscriberRow } from "knex/types/tables";

type SanitizationMarker = {
  /**
   * The `__s` property is added to make sure a type is structurally distinct
   * from the original type, i.e. so that you're unable to pass in an object
   * with the full data where a sanitized object is expected.
   */
  __s: true;
};

export type SanitizedEmailAddressRow = SanitizationMarker &
  Pick<
    EmailAddressRow,
    "email" | "id" | "subscriber_id" | "verified" | "created_at" | "updated_at"
  >;

export function sanitizeEmailRow(
  email: EmailAddressRow,
): SanitizedEmailAddressRow {
  return {
    email: email.email,
    id: email.id,
    subscriber_id: email.subscriber_id,
    created_at: email.created_at,
    updated_at: email.updated_at,
    verified: email.verified,
    // If we want to avoid passing this property to the client-side, we can also
    // just assert this object as a `SanitizedEmailAddressRow`, but I didn't
    // want to encourage asserting that elsewhere _without_ passing it through
    // this function, so I left it in for now:
    __s: true,
  };
}

export type SanitizedSubscriberRow = SanitizationMarker &
  Pick<
    SubscriberRow,
    | "id"
    | "primary_email"
    | "primary_verified"
    | "primary_sha1"
    | "created_at"
    | "updated_at"
    | "fx_newsletter"
    | "signup_language"
    | "fxa_profile_json"
    | "fxa_uid"
    | "breaches_last_shown"
    | "all_emails_to_primary"
    | "breaches_resolved"
    | "waitlists_joined"
    | "breach_stats"
    | "monthly_monitor_report"
    | "moscary_id"
    | "onerep_profile_id"
    | "email_addresses"
  >;

/**
 * Only return subscriber data that we wouldn't mind sending to the client side
 *
 * @param subscriber
 * @returns
 */
export function sanitizeSubscriberRow(
  subscriber: SubscriberRow,
): SanitizedSubscriberRow {
  return {
    id: subscriber.id,
    primary_email: subscriber.primary_email,
    primary_verified: subscriber.primary_verified,
    primary_sha1: subscriber.primary_sha1,
    created_at: subscriber.created_at,
    updated_at: subscriber.updated_at,
    fx_newsletter: subscriber.fx_newsletter,
    signup_language: subscriber.signup_language,
    fxa_profile_json: subscriber.fxa_profile_json,
    fxa_uid: subscriber.fxa_uid,
    breaches_last_shown: subscriber.breaches_last_shown,
    all_emails_to_primary: subscriber.all_emails_to_primary,
    breaches_resolved: subscriber.breaches_resolved,
    waitlists_joined: subscriber.waitlists_joined,
    breach_stats: subscriber.breach_stats,
    monthly_monitor_report: subscriber.monthly_monitor_report,
    moscary_id: subscriber.moscary_id,
    onerep_profile_id: subscriber.onerep_profile_id,
    email_addresses: subscriber.email_addresses,
    // If we want to avoid passing this property to the client-side, we can also
    // just assert this object as a `SanitizedSubscriberRow`, but I didn't
    // want to encourage asserting that elsewhere _without_ passing it through
    // this function, so I left it in for now:
    __s: true,
  };
}
