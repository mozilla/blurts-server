/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Type definitions in this file are used to incomplete (or just plain `any`);
// however, they give us a single place to find all references to the same type,
// making it easier to add proper type definitions down the road.

/** Data about the user from the `subscribers` database table */
export type Subscriber = {
  id: number;
  primary_sha1: string;
  primary_email: string;
  primary_verification_token: string;
  primary_verified: boolean;
  created_at: Date;
  updated_at: Date;
  fx_newsletter: boolean;
  signup_language: string;
  fxa_refresh_token: string;
  fxa_access_token: string;
  fxa_profile_json: object;
  fxa_uid: string;
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
};
