/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest } from "next/server";
import { AuthOptions, Profile as FxaProfile, User } from "next-auth";
import { SubscriberRow } from "knex/types/tables";
import { logger } from "../../functions/server/logging";

import AppConstants from "../../../appConstants.js";
import {
  getSubscriberByFxaUid,
  updateFxAData,
} from "../../../db/tables/subscribers.js";
import { addSubscriber } from "../../../db/tables/emailAddresses.js";
import { getBreaches } from "../../functions/server/getBreaches";
import { getBreachesForEmail } from "../../../utils/hibp.js";
import { getSha1 } from "../../../utils/fxa.js";
import { getEmailCtaHref, initEmail, sendEmail } from "../../../utils/email.js";
import { getTemplate } from "../../../emails/email2022.js";
import { signupReportEmailPartial } from "../../../emails/emailSignupReport.js";
import { getL10n } from "../../functions/server/l10n";
import { OAuthConfig } from "next-auth/providers/oauth.js";
import { SerializedSubscriber } from "../../../next-auth.js";

const fxaProviderConfig: OAuthConfig<FxaProfile> = {
  // As per https://mozilla.slack.com/archives/C4D36CAJW/p1683642497940629?thread_ts=1683642325.465929&cid=C4D36CAJW,
  // we should file a ticket against SVCSE with the `fxa` component to add
  // a redirect URL of /api/auth/callback/fxa for Mozilla Monitor,
  // for every environment we deploy to:
  id: "fxa",
  name: "Mozilla accounts",
  type: "oauth",
  authorization: {
    url: AppConstants.OAUTH_AUTHORIZATION_URI,
    params: {
      scope: "profile https://identity.mozilla.com/account/subscriptions",
      access_type: "offline",
      action: "email",
      prompt: "login",
      max_age: 0,
    },
  },
  token: AppConstants.OAUTH_TOKEN_URI,
  // userinfo: AppConstants.OAUTH_PROFILE_URI,
  userinfo: {
    request: async (context) => {
      const response = await fetch(AppConstants.OAUTH_PROFILE_URI, {
        headers: {
          Authorization: `Bearer ${context.tokens.access_token ?? ""}`,
        },
      });
      return (await response.json()) as FxaProfile;
    },
  },
  clientId: AppConstants.OAUTH_CLIENT_ID,
  clientSecret: AppConstants.OAUTH_CLIENT_SECRET,
  // Parse data returned by FxA's /userinfo/
  profile: (profile) => {
    return convertFxaProfile(profile);
  },
};

export const authOptions: AuthOptions = {
  debug: process.env.NODE_ENV !== "production",
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [fxaProviderConfig],
  callbacks: {
    // Unused arguments also listed to show what's available:
    async jwt({ token, account, profile, trigger }) {
      if (trigger === "update") {
        // Refresh the user data from FxA, in case e.g. new subscriptions got added:
        const subscriberFromDb = await getSubscriberByFxaUid(
          token.subscriber?.fxa_uid ?? "",
        );

        if (subscriberFromDb) {
          profile = subscriberFromDb.fxa_profile_json as FxaProfile;

          // MNTOR-2599 The breach_resolution object can get pretty big,
          // causing the session token cookie to balloon in size,
          // eventually resulting in a 400 Bad Request due to headers being too large.
          delete (subscriberFromDb as Partial<SubscriberRow>).breach_resolution;
          token.subscriber =
            subscriberFromDb as unknown as SerializedSubscriber;
        }
      }
      if (profile) {
        token.fxa = {
          locale: profile.locale,
          twoFactorAuthentication: profile.twoFactorAuthentication,
          metricsEnabled: profile.metricsEnabled,
          avatar: profile.avatar,
          avatarDefault: profile.avatarDefault,
          subscriptions: profile.subscriptions ?? [],
        };
      }

      if (!account) {
        return token;
      }

      if (typeof profile?.uid === "string") {
        // We're signing in with FxA; store user in database if not present yet.

        // Note: we could create an [Adapter](https://next-auth.js.org/tutorials/creating-a-database-adapter)
        //       to store the user in the database, but by doing it in the callback,
        //       we can also store FxA account data. We also don't have to worry
        //       about model mismatches (i.e. Next-Auth expecting one User to have
        //       multiple Accounts at multiple providers).
        const existingUser = await getSubscriberByFxaUid(profile.uid);

        if (existingUser) {
          // MNTOR-2599 The breach_resolution object can get pretty big,
          // causing the session token cookie to balloon in size,
          // eventually resulting in a 400 Bad Request due to headers being too large.
          delete (existingUser as Partial<SubscriberRow>).breach_resolution;
          token.subscriber = existingUser as unknown as SerializedSubscriber;
          if (account.access_token && account.refresh_token) {
            const updatedUser = await updateFxAData(
              existingUser,
              account.access_token,
              account.refresh_token,
              JSON.stringify(profile),
            );
            // MNTOR-2599 The breach_resolution object can get pretty big,
            // causing the session token cookie to balloon in size,
            // eventually resulting in a 400 Bad Request due to headers being too large.
            delete updatedUser.breach_resolution;
            token.subscriber = updatedUser;
          }
        } else if (!existingUser && profile.email) {
          const verifiedSubscriber = await addSubscriber(
            profile.email,
            profile.locale,
            account.access_token,
            account.refresh_token,
            JSON.stringify(profile),
          );
          // The date fields of `verifiedSubscriber` get converted to an ISO 8601
          // date string when serialised in the token, hence the type assertion:
          token.subscriber =
            verifiedSubscriber as unknown as SerializedSubscriber;

          const allBreaches = await getBreaches();
          const unsafeBreachesForEmail = await getBreachesForEmail(
            getSha1(profile.email),
            allBreaches,
            true,
          );

          // Send report email
          const utmCampaignId = "report";
          const l10n = getL10n();
          const subject = unsafeBreachesForEmail?.length
            ? l10n.getString("email-subject-found-breaches")
            : l10n.getString("email-subject-no-breaches");

          const data = {
            breachedEmail: profile.email,
            ctaHref: getEmailCtaHref(utmCampaignId, "dashboard-cta"),
            heading: "email-breach-summary",
            recipientEmail: profile.email,
            subscriberId: verifiedSubscriber,
            unsafeBreachesForEmail,
            utmCampaign: utmCampaignId,
          };
          const emailTemplate = getTemplate(
            data,
            signupReportEmailPartial,
            l10n,
          );

          await initEmail(process.env.SMTP_URL);
          await sendEmail(data.recipientEmail, subject, emailTemplate);
        } else {
          logger.warn("no_existing_user_or_email", {
            token,
            account,
            profile,
            trigger,
          });
        }
      } else {
        logger.warn("profile_email_not_string", {
          token,
          account,
          profile,
          trigger,
        });
      }
      return token;
    },
    session({ session, token }) {
      if (token.fxa) {
        session.user.fxa = {
          locale: token.fxa.locale,
          twoFactorAuthentication: token.fxa.twoFactorAuthentication,
          metricsEnabled: token.fxa.metricsEnabled,
          avatar: token.fxa.avatar,
          avatarDefault: token.fxa.avatarDefault,
          subscriptions: token.fxa.subscriptions,
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
      logger.debug("fxa-confirmed-profile-data", message.user.id);
    },
    signOut(message) {
      logger.debug("logout", message.token.subscriber?.id ?? undefined);
    },
  },
};

/**
 * Converts an FxAProfile to a Next-Auth user object
 *
 * @param profile
 */
function convertFxaProfile(profile: FxaProfile): User {
  return {
    id: profile.uid,
    email: profile.email!,
    avatar: profile.avatar,
    avatarDefault: profile.avatarDefault,
    twoFactorAuthentication: profile.twoFactorAuthentication,
    metricsEnabled: profile.metricsEnabled,
    locale: profile.locale,
    subscriptions: profile.subscriptions ?? [],
  };
}

export function bearerToken(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.get("authorization");
  const authHeader = requestHeaders.get("authorization");

  // Require an auth header
  if (!authHeader) {
    throw new Error("No auth header found");
  }

  // Extract the first portion which should be 'Bearer'
  const headerType = authHeader.substring(0, authHeader.indexOf(" "));
  if (headerType !== "Bearer") {
    throw new Error("Invalid auth type");
  }

  // The remaining portion, which should be the token
  return authHeader.substring(authHeader.indexOf(" ") + 1);
}

export function isAdmin(email: string) {
  const admins = AppConstants.ADMINS?.split(",") ?? [];
  return admins.includes(email);
}
