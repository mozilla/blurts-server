/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import NextAuth, { AuthOptions } from "next-auth";
import mozlog from "../../../../utils/log.js";
import AppConstants from "../../../../appConstants.js";

const log = mozlog("controllers.auth");

interface FxaProfile {
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
}

export const authOptions: AuthOptions = {
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    {
      // As per https://mozilla.slack.com/archives/C4D36CAJW/p1683642497940629?thread_ts=1683642325.465929&cid=C4D36CAJW,
      // we should file a ticket against SVCSE with the `fxa` component to add
      // a redirect URL of /api/auth/callback/fxa for Firefox Monitor,
      // for every environment we deploy to:
      id: "fxa",
      name: "Firefox Accounts",
      type: "oauth",
      authorization: {
        url: AppConstants.OAUTH_AUTHORIZATION_URI,
        params: {
          scope: "profile",
          access_type: "offline",
          action: "email",
          prompt: "login",
          max_age: 0,
        },
      },
      token: AppConstants.OAUTH_TOKEN_URI,
      userinfo: {
        request: async (context) => {
          const response = await fetch(AppConstants.OAUTH_PROFILE_URI, {
            headers: { Authorization: `Bearer ${context.tokens.access_token}` },
          });
          const userInfo = await response.json();
          return userInfo;
        },
      },
      clientId: AppConstants.OAUTH_CLIENT_ID,
      clientSecret: AppConstants.OAUTH_CLIENT_SECRET,
      profile: async (profile: FxaProfile) => {
        return {
          id: profile.uid,
          email: profile.email,
          avatar: profile.avatar,
          avatarDefault: profile.avatarDefault,
          twoFactorAuthentication: profile.twoFactorAuthentication,
          metricsEnabled: profile.metricsEnabled,
          locale: profile.locale,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, account, profile, trigger }) {
      if (profile) {
        token.locale = profile.locale;
        token.twoFactorAuthentication = profile.twoFactorAuthentication;
        token.metricsEnabled = profile.metricsEnabled;
        token.avatar = profile.avatar;
        token.avatarDefault = profile.avatarDefault;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.locale = token.locale;
      session.user.twoFactorAuthentication = token.twoFactorAuthentication;
      session.user.metricsEnabled = token.metricsEnabled;
      session.user.avatar = token.avatar;
      session.user.avatarDefault = token.avatarDefault;
      return session;
    },
  },
  events: {
    signIn(message) {
      log.debug("fxa-confirmed-profile-data", message.user);
    },
    signOut(message) {
      log.debug("logout", message.token.email ?? undefined);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
