/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import NextAuth, { AuthOptions } from "next-auth";
import mozlog from "../../../../utils/log.js";
import AppConstants from "../../../../appConstants.js";
import {
  getSubscriberByEmail,
  updateFxAData,
} from "../../../../db/tables/subscribers.js";
import { addSubscriber } from "../../../../db/tables/emailAddresses.js";
import {
  getBreaches,
  getBreachIcons,
} from "../../../functions/server/getBreaches";
import { getBreachesForEmail } from "../../../../utils/hibp.js";
import { getSha1 } from "../../../../utils/fxa.js";
import {
  getEmailCtaHref,
  initEmail,
  sendEmail,
} from "../../../../utils/email.js";
import { getTemplate } from "../../../../views/emails/email2022.js";
import { signupReportEmailPartial } from "../../../../views/emails/emailSignupReport.js";
import { getL10n } from "../../../functions/server/l10n";

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
  session: {
    strategy: "jwt",
  },
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
      // Parse data returned by FxA's /userinfo/
      profile: async (profile: FxaProfile) => {
        log.debug("fxa-confirmed-profile-data", profile);
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
        token.fxa = {
          locale: profile.locale,
          twoFactorAuthentication: profile.twoFactorAuthentication,
          metricsEnabled: profile.metricsEnabled,
          avatar: profile.avatar,
          avatarDefault: profile.avatarDefault,
        };
      }
      if (account) {
        // We're signing in with FxA; store user in database if not present yet.
        log.debug("fxa-confirmed-fxaUser", account);

        // Note: we could create an [Adapter](https://next-auth.js.org/tutorials/creating-a-database-adapter)
        //       to store the user in the database, but by doing it in the callback,
        //       we can also store FxA account data. We also don't have to worry
        //       about model mismatches (i.e. Next-Auth expecting one User to have
        //       multiple Accounts at multiple providers).
        const email = profile?.email;
        const existingUser = await getSubscriberByEmail(email);

        if (existingUser) {
          token.subscriber = existingUser;
          if (account.access_token && account.refresh_token) {
            await updateFxAData(
              existingUser,
              account.access_token,
              account.refresh_token,
              JSON.stringify(profile)
            );
          }
        }
        if (!existingUser && email) {
          const verifiedSubscriber = await addSubscriber(
            email,
            profile.locale,
            account.access_token,
            account.refresh_token,
            JSON.stringify(profile)
          );
          token.subscriber = verifiedSubscriber;

          const allBreaches = await getBreaches();
          const unsafeBreachesForEmail = await getBreachesForEmail(
            getSha1(email),
            allBreaches,
            true
          );

          // Send report email
          const utmCampaignId = "report";
          const l10n = getL10n();
          const subject = unsafeBreachesForEmail?.length
            ? l10n.getString("email-subject-found-breaches")
            : l10n.getString("email-subject-no-breaches");

          const breachLogos = await getBreachIcons(allBreaches);
          const data = {
            breachedEmail: email,
            breachLogos: breachLogos,
            ctaHref: getEmailCtaHref(utmCampaignId, "dashboard-cta"),
            heading: "email-breach-summary",
            recipientEmail: email,
            subscriberId: verifiedSubscriber,
            unsafeBreachesForEmail,
            utmCampaign: utmCampaignId,
          };
          const emailTemplate = getTemplate(
            data,
            signupReportEmailPartial,
            l10n
          );

          await initEmail(process.env.SMTP_URL);
          await sendEmail(data.recipientEmail, subject, emailTemplate);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.fxa) {
        session.user.fxa = {
          locale: token.fxa.locale,
          twoFactorAuthentication: token.fxa.twoFactorAuthentication,
          metricsEnabled: token.fxa.metricsEnabled,
          avatar: token.fxa.avatar,
          avatarDefault: token.fxa.avatarDefault,
        };
      }
      if (token.subscriber) {
        session.user.subscriber = token.subscriber;
      }
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
