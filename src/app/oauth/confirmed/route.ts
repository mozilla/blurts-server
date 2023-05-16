/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { FxAOAuthClient, getProfileData, getSha1 } from "../../../utils/fxa.js";
import {
  getSubscriberByEmail,
  updateFxAData,
} from "../../../db/tables/subscribers.js";
import { addSubscriber } from "../../../db/tables/emailAddresses.js";
import { getSession } from "../../functions/server/getSession";
import { getEmailCtaHref, sendEmail } from "../../../utils/email.js";
import mozlog from "../../../utils/log.js";
import { UnauthorizedError } from "../../../utils/error.js";
import { getTemplate } from "../../../views/emails/email2022.js";
import { signupReportEmailPartial } from "../../../views/emails/emailSignupReport.js";
import { getL10n, getLocale } from "../../functions/server/l10n";
import {
  getBreachIcons,
  getBreaches,
} from "../../functions/server/getBreaches";
import { getBreachesForEmail } from "../../../utils/hibp.js";

const log = mozlog("controllers.auth");

export async function GET(request: Request) {
  const returnURL = new URL("user/breaches", process.env.SERVER_URL);
  const response = new NextResponse("", {
    status: 302,
    headers: { Location: returnURL.pathname + returnURL.search },
  });
  const session = await getSession(request, response);
  const oauthState = session.oauthState;
  const l10n = getL10n();
  if (!oauthState) {
    log.error("oauth-invalid-session", "req.session.state missing");
    throw new UnauthorizedError(l10n.getString("oauth-invalid-session"));
  }

  const url = new URL(request.url);
  if (oauthState !== url.searchParams.get("state")) {
    log.error("oauth-invalid-session", "req.session does not match req.query");
    throw new UnauthorizedError(l10n.getString("oauth-invalid-session"));
  }

  const client = FxAOAuthClient;
  const fxaUser = await client.code.getToken(request.url, {
    state: oauthState,
  });
  // Clear the session.state to clean up and avoid any replays
  delete session.oauthState;
  log.debug("fxa-confirmed-fxaUser", fxaUser);
  const fxaProfileData = (await getProfileData(fxaUser.accessToken)) as string;
  log.debug("fxa-confirmed-profile-data", fxaProfileData);
  const email = JSON.parse(fxaProfileData).email;

  const existingUser = await getSubscriberByEmail(email);
  session.user = existingUser;
  await session.save();

  const originalURL = new URL(request.url, process.env.SERVER_URL);

  for (const [key, value] of originalURL.searchParams.entries()) {
    if (key.startsWith("utm_")) returnURL.searchParams.append(key, value);
  }

  // Check if user is signing up or signing in,
  // then add new users to db and send email.
  if (!existingUser) {
    const signupLanguage = getLocale();
    const verifiedSubscriber = await addSubscriber(
      email,
      signupLanguage,
      fxaUser.accessToken,
      fxaUser.refreshToken,
      fxaProfileData
    );

    // Get breaches for email the user signed-up with
    const allBreaches = await getBreaches();
    const unsafeBreachesForEmail = await getBreachesForEmail(
      getSha1(email),
      allBreaches,
      true
    );

    // Send report email
    const utmCampaignId = "report";
    const subject = unsafeBreachesForEmail?.length
      ? l10n.getString("email-subject-found-breaches")
      : l10n.getString("email-subject-no-breaches");

    const breachLogos = await getBreachIcons(allBreaches);
    const data = {
      breachedEmail: email,
      breachLogos: breachLogos,
      ctaHref: getEmailCtaHref(utmCampaignId, "dashboard-cta"),
      heading: l10n.getString("email-breach-summary"),
      recipientEmail: email,
      subscriberId: verifiedSubscriber,
      unsafeBreachesForEmail,
      utmCampaign: utmCampaignId,
    };
    const emailTemplate = getTemplate(data, signupReportEmailPartial);

    await sendEmail(data.recipientEmail, subject, emailTemplate);

    session.user = verifiedSubscriber;
    await session.save();

    return response;
  }
  // Update existing user's FxA data
  const { accessToken, refreshToken } = fxaUser;
  await updateFxAData(existingUser, accessToken, refreshToken, fxaProfileData);

  return response;
}
