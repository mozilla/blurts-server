/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachDataTypes } from "../../../../functions/universal/breach.js";

export type BreachResolutionTypes = Record<
  keyof BreachDataTypes,
  BreachResolution
>;
export interface CircleChartProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  class?: string;
  title?: string;
  "data-txt-other"?: string;
  "data-txt-none"?: string;
  data?: string;
}

export type HibpBreachDataTypes = typeof BreachDataTypes;

export interface BreachResolution {
  priority: number;
  header: string;
  body?: string;
  applicableCountryCodes?: Array<string>;
}

export interface SubscriberEmail {
  email: string;
  id: number;
}

export interface BreachStats {
  monitoredEmails: {
    count: number;
  };
  numBreaches: {
    count: number;
    numResolved: number;
    numUnresolved: number;
  };
  passwords: {
    count: number;
    numResolved: number;
  };
}

export interface SubscriberBreachResolution {
  useBreachId?: boolean;
  [email: string]: {
    [id: number]: {
      isResolved: boolean;
      resolutionsChecked: Array<string>;
    };
  };
}

export interface Breach {
  AddedDate: string;
  BreachDate: string;
  DataClasses: Array<string>;
  Description: string;
  Domain: string;
  Id: number;
  IsFabricated: boolean;
  IsMalware: boolean;
  IsResolved?: boolean;
  IsRetired: boolean;
  IsSensitive: boolean;
  IsSpamList: boolean;
  IsVerified: boolean;
  LogoPath: string;
  ModifiedDate: string;
  Name: string;
  PwnCount: number;
  recencyIndex: number;
  ResolutionsChecked: Array<string>;
  Title: string;
}

export interface Subscriber {
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
  fxa_profile_json: {
    uid: string;
    email: string;
    avatar: string;
    locale: string;
    amrValues: Array<string>;
    avatarDefault: boolean;
    metricsEnabled: boolean;
    twoFactorAuthentication: boolean;
  };
  fxa_uid: string;
  breaches_last_shown: Date;
  all_emails_to_primary: boolean;
  fxa_access_token: string;
  breaches_resolved: {
    [email: string]: Array<Breach>;
  };
  waitlists_joined: boolean | null;
  breach_stats: BreachStats;
  monthly_email_at: Date | null;
  monthly_email_optout: boolean | null;
  breach_resolution: SubscriberBreachResolution;
  email_addresses: Array<SubscriberEmail>;
}

export interface VerifiedEmail {
  breaches: Array<Breach>;
  email: string;
  id: number;
  primary: boolean;
  verified: boolean;
}

export interface BreachResolutionRequest {
  affectedEmail: string;
  breachId: number;
  resolutionsChecked: Array<keyof HibpBreachDataTypes>;
}
