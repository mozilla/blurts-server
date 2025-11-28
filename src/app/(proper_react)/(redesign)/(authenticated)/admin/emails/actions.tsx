/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { isAdmin } from "../../../../../api/utils/auth";
import { initEmail, sendEmail } from "../../../../../../utils/email";
import { renderEmail } from "../../../../../../emails/renderEmail";
import { VerifyEmailAddressEmail } from "../../../../../../emails/templates/verifyEmailAddress/VerifyEmailAddressEmail";
import { sanitizeSubscriberRow } from "../../../../../functions/server/sanitize";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../functions/l10n/serverComponents";
import { getSubscriberByFxaUid } from "../../../../../../db/tables/subscribers";
import { ReactNode } from "react";
import { SubscriberRow } from "knex/types/tables";
import { getUserEmails } from "../../../../../../db/tables/emailAddresses";
import { getDashboardSummary } from "../../../../../functions/server/dashboard";
import { getSubscriberBreaches } from "../../../../../functions/server/getSubscriberBreaches";
import { FirstDataBrokerRemovalFixed } from "../../../../../../emails/templates/firstDataBrokerRemovalFixed/FirstDataBrokerRemovalFixed";
import {
  createRandomHibpListing,
  createRandomScanResult,
} from "../../../../../../apiMocks/mockData";
import { BreachAlertEmail } from "../../../../../../emails/templates/breachAlert/BreachAlertEmail";
import { SignupReportEmail } from "../../../../../../emails/templates/signupReport/SignupReportEmail";
import { getBreachesForEmail } from "../../../../../../utils/hibp";
import { getSha1 } from "../../../../../../utils/fxa";
import { getBreaches } from "../../../../../functions/server/getBreaches";
import { getSignupLocaleCountry } from "../../../../../../emails/functions/getSignupLocaleCountry";
import { refreshStoredScanResults } from "../../../../../functions/server/refreshStoredScanResults";
import { getExperimentationIdFromUserSession } from "../../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../functions/universal/getLocale";
import { UTM_CAMPAIGN_ID_BREACH_ALERT } from "../../../../../../constants";

async function getAdminSubscriber(): Promise<SubscriberRow | null> {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    !session.user.subscriber?.fxa_uid
  ) {
    return null;
  }

  const subscriber = await getSubscriberByFxaUid(
    session.user.subscriber?.fxa_uid,
  );

  return subscriber ?? null;
}

async function send(
  emailAddress: string,
  subject: string,
  template: ReactNode,
  plaintextVersion?: string,
) {
  const subscriber = await getAdminSubscriber();
  if (!subscriber) {
    return false;
  }

  const emailAddresses = await getUserEmails(subscriber.id);
  if (
    subscriber.primary_email !== emailAddress &&
    !emailAddresses.find((addressRow) => addressRow.email === emailAddress)
  ) {
    return false;
  }

  await initEmail();
  return sendEmail(
    emailAddress,
    "Test email: " + subject,
    await renderEmail(template),
    plaintextVersion,
  );
}

export async function triggerSignupReportEmail(emailAddress: string) {
  const subscriber = await getAdminSubscriber();
  if (!subscriber) {
    return false;
  }

  const acceptLangHeader = await getAcceptLangHeaderInServerComponents();
  const l10n = getL10n(acceptLangHeader);
  const breaches = await getBreachesForEmail(
    getSha1(emailAddress),
    await getBreaches(),
    true,
  );
  await send(
    emailAddress,
    breaches.length > 0
      ? l10n.getString("email-subject-found-breaches")
      : l10n.getString("email-subject-no-breaches"),
    <SignupReportEmail
      l10n={l10n}
      breaches={breaches}
      breachedEmailAddress={emailAddress}
    />,
  );
}

export async function triggerVerificationEmail(emailAddress: string) {
  const subscriber = await getAdminSubscriber();
  if (!subscriber) {
    return false;
  }

  const acceptLangHeader = await getAcceptLangHeaderInServerComponents();
  const l10n = getL10n(acceptLangHeader);
  await send(
    emailAddress,
    l10n.getString("email-subject-verify"),
    <VerifyEmailAddressEmail
      verificationUrl="https://example.com"
      subscriber={sanitizeSubscriberRow(subscriber)}
      l10n={l10n}
      utmCampaignId="verified-subscribers"
    />,
  );
}

export async function triggerBreachAlert(emailAddress: string) {
  const session = await getServerSession();
  const subscriber = await getAdminSubscriber();
  if (!subscriber || !session?.user) {
    return false;
  }

  const acceptLangHeader = await getAcceptLangHeaderInServerComponents();
  const l10n = getL10n(acceptLangHeader);

  const assumedCountryCode = getSignupLocaleCountry(subscriber);

  if (typeof subscriber.onerep_profile_id === "number") {
    await refreshStoredScanResults(subscriber.onerep_profile_id);
  }
  const experimentationId = await getExperimentationIdFromUserSession(
    session.user,
  );
  const experimentData = await getExperiments({
    experimentationId,
    countryCode: assumedCountryCode,
    locale: getLocale(l10n),
  });
  const allSubscriberBreaches = await getSubscriberBreaches({
    fxaUid: subscriber.fxa_uid,
    countryCode: assumedCountryCode,
  });

  await send(
    emailAddress,
    l10n.getString("email-breach-alert-all-subject"),
    <BreachAlertEmail
      subscriber={subscriber}
      breachedEmail={emailAddress}
      breach={createRandomHibpListing()}
      utmCampaignId={UTM_CAMPAIGN_ID_BREACH_ALERT}
      l10n={l10n}
      dataSummary={getDashboardSummary(allSubscriberBreaches)}
      experimentData={experimentData["Features"]}
    />,
  );
}

export async function triggerFirstDataBrokerRemovalFixed(emailAddress: string) {
  const acceptLangHeader = await getAcceptLangHeaderInServerComponents();
  const l10n = getL10n(acceptLangHeader);
  const randomScanResult = createRandomScanResult({ status: "removed" });

  await send(
    emailAddress,
    l10n.getString("email-first-broker-removal-fixed-subject"),
    <FirstDataBrokerRemovalFixed
      data={{
        dataBrokerName: randomScanResult.data_broker,
        dataBrokerLink: `${process.env.SERVER_URL}/user/dashboard/fixed`,
        removalDate: randomScanResult.updated_at,
      }}
      l10n={l10n}
    />,
  );
}
