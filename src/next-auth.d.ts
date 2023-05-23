/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /** The OAuth profile extracted from Firefox Accounts */
  interface Profile {
    id: string;
    email: string;
    /** The value of the Accept-Language header when the user signed up for their Firefox Account */
    locale: string;
    twoFactorAuthentication: boolean;
    metricsEnabled: boolean;
    /** URL to an avatar image for the current user */
    avatar: string;
    avatarDefault: boolean;
  }

  /** The OAuth profile extracted from Firefox Accounts */
  interface Session {
    user: {
      /** The value of the Accept-Language header when the user signed up for their Firefox Account */
      locale: string;
      twoFactorAuthentication: boolean;
      metricsEnabled: boolean;
      /** URL to an avatar image for the current user */
      avatar: string;
      avatarDefault: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** The value of the Accept-Language header when the user signed up for their Firefox Account */
    locale: string;
    twoFactorAuthentication: boolean;
    metricsEnabled: boolean;
    /** URL to an avatar image for the current user */
    avatar: string;
    avatarDefault: boolean;
  }
}
