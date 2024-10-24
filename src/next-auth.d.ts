/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { DefaultSession } from "next-auth";
import { ISO8601DateString } from "./utils/parse";
import { SanitizedSubscriberRow } from "./app/functions/server/sanitize";

export type SerializedSubscriber = Omit<
  SanitizedSubscriberRow,
  "created_at"
> & {
  created_at: ISO8601DateString;
};

declare module "next-auth" {
  /** The OAuth profile extracted from Firefox Accounts */
  interface Profile {
    email: string;
    /** The value of the Accept-Language header when the user signed up for their Firefox Account */
    locale: string;
    amrValues: ["pwd", "email"];
    twoFactorAuthentication: boolean;
    metricsEnabled: boolean;
    uid: string;
    /** URL to an avatar image for the current user */
    avatar: string;
    avatarDefault: boolean;
    subscriptions?: Array<string>;
  }

  /** Shape of the data the FxaProvider's `profile` callback returns: */
  interface User {
    id: string;
    email: string;
    /** The value of the Accept-Language header when the user signed up for their Firefox Account */
    locale: string;
    twoFactorAuthentication: boolean;
    metricsEnabled: boolean;
    /** URL to an avatar image for the current user */
    avatar: string;
    avatarDefault: boolean;
    subscriptions: Array<string>;
  }

  /** Session data available after deserialising the JWT */
  interface Session {
    error?: "RefreshAccessTokenError";
    user: {
      fxa?: {
        /** The value of the Accept-Language header when the user signed up for their Firefox Account */
        locale: string;
        twoFactorAuthentication: boolean;
        metricsEnabled: boolean;
        /** URL to an avatar image for the current user */
        avatar: string;
        avatarDefault: boolean;
        subscriptions: Array<string>;
      };
      subscriber?: SerializedSubscriber;
    } & DefaultSession["user"] & { email: string };
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    fxa?: {
      /** The value of the Accept-Language header when the user signed up for their Firefox Account */
      locale: string;
      twoFactorAuthentication: boolean;
      metricsEnabled: boolean;
      /** URL to an avatar image for the current user */
      avatar: string;
      avatarDefault: boolean;
      subscriptions: Array<string>;
    };
    subscriber?: SerializedSubscriber;
  }
}
