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
import { MonthlyActivityPlusEmail } from "../../../../../../emails/templates/monthlyActivityPlus/MonthlyActivityPlusEmail";
import { getDashboardSummary } from "../../../../../functions/server/dashboard";
import { getSubscriberBreaches } from "../../../../../functions/server/getSubscriberBreaches";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { FirstDataBrokerRemovalFixed } from "../../../../../../emails/templates/firstDataBrokerRemovalFixed/FirstDataBrokerRemovalFixed";
import {
  createRandomHibpListing,
  createRandomScanResult,
} from "../../../../../../apiMocks/mockData";
import { RedesignedBreachAlertEmail } from "../../../../../../emails/templates/breachAlert/BreachAlertEmail";
import { SignupReportEmail } from "../../../../../../emails/templates/signupReport/SignupReportEmail";
import { getBreachesForEmail } from "../../../../../../utils/hibp";
import { getSha1 } from "../../../../../../utils/fxa";
import { getBreaches } from "../../../../../functions/server/getBreaches";
import { getSignupLocaleCountry } from "../../../../../../emails/functions/getSignupLocaleCountry";
import { refreshStoredScanResults } from "../../../../../functions/server/refreshStoredScanResults";
import { hasPremium } from "../../../../../functions/universal/user";
import { isEligibleForPremium } from "../../../../../functions/universal/premium";
import { MonthlyActivityFreeEmail } from "../../../../../../emails/templates/monthlyActivityFree/MonthlyActivityFreeEmail";
import { getMonthlyActivityFreeUnsubscribeLink } from "../../../../../../app/functions/cronjobs/unsubscribeLinks";
import { getScanResultsWithBroker } from "../../../../../../db/tables/onerep_scans";
import {
  getUnstyledUpcomingExpirationEmail,
  UpcomingExpirationEmail,
} from "../../../../../../emails/templates/upcomingExpiration/UpcomingExpirationEmail";
import { CONST_DAY_MILLISECONDS } from "../../../../../../constants";

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

export async function triggerMonthlyActivityFree(emailAddress: string) {
  const session = await getServerSession();
  const subscriber = await getAdminSubscriber();
  if (!subscriber || !session?.user) {
    return false;
  }

  const acceptLangHeader = await getAcceptLangHeaderInServerComponents();
  const l10n = getL10n(acceptLangHeader);

  if (typeof subscriber.onerep_profile_id === "number") {
    await refreshStoredScanResults(subscriber.onerep_profile_id);
  }
  const latestScan = await getScanResultsWithBroker(
    subscriber.onerep_profile_id,
    hasPremium(session.user),
  );
  const data = getDashboardSummary(
    latestScan.results,
    await getSubscriberBreaches({
      fxaUid: session.user.subscriber?.fxa_uid,
      countryCode: getCountryCode(await headers()),
    }),
  );

  const unsubscribeLink =
    await getMonthlyActivityFreeUnsubscribeLink(subscriber);

  await send(
    emailAddress,
    l10n.getString("email-monthly-free-subject"),
    <MonthlyActivityFreeEmail
      subscriber={sanitizeSubscriberRow(subscriber)}
      l10n={l10n}
      dataSummary={data}
      unsubscribeLink={unsubscribeLink as string}
    />,
  );
}

export async function triggerMonthlyActivityPlus(emailAddress: string) {
  const session = await getServerSession();
  const subscriber = await getAdminSubscriber();
  if (!subscriber || !session?.user) {
    return false;
  }

  const acceptLangHeader = await getAcceptLangHeaderInServerComponents();
  const l10n = getL10n(acceptLangHeader);

  if (typeof subscriber.onerep_profile_id === "number") {
    await refreshStoredScanResults(subscriber.onerep_profile_id);
  }
  const latestScan = await getScanResultsWithBroker(
    subscriber.onerep_profile_id,
    hasPremium(session.user),
  );
  const data = getDashboardSummary(
    latestScan.results,
    await getSubscriberBreaches({
      fxaUid: session.user.subscriber?.fxa_uid,
      countryCode: getCountryCode(await headers()),
    }),
  );

  await send(
    emailAddress,
    l10n.getString("email-monthly-plus-auto-subject"),
    <MonthlyActivityPlusEmail
      subscriber={sanitizeSubscriberRow(subscriber)}
      l10n={l10n}
      data={data}
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
  const scanData = await getScanResultsWithBroker(
    subscriber.onerep_profile_id,
    hasPremium(session.user),
  );
  const allSubscriberBreaches = await getSubscriberBreaches({
    fxaUid: subscriber.fxa_uid,
    countryCode: assumedCountryCode,
  });

  await send(
    emailAddress,
    l10n.getString("email-breach-alert-all-subject"),
    <RedesignedBreachAlertEmail
      subscriber={subscriber}
      breach={createRandomHibpListing()}
      breachedEmail={emailAddress}
      utmCampaignId="breach-alert"
      l10n={l10n}
      dataSummary={
        isEligibleForPremium(assumedCountryCode) && !hasPremium(subscriber)
          ? getDashboardSummary(scanData.results, allSubscriberBreaches)
          : undefined
      }
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

export async function triggerPlusExpirationEmail(emailAddress: string) {
  const subscriber = await getAdminSubscriber();
  if (!subscriber) {
    return false;
  }

  const acceptLangHeader = await getAcceptLangHeaderInServerComponents();
  const l10n = getL10n(acceptLangHeader);
  await send(
    emailAddress,
    l10n.getString("email-plus-expiration-subject"),
    <UpcomingExpirationEmail
      subscriber={sanitizeSubscriberRow(subscriber)}
      // Always pretend that the user's account expires in 7 days for the test email:
      expirationDate={new Date(Date.now() + 7 * CONST_DAY_MILLISECONDS)}
      l10n={l10n}
    />,
    getUnstyledUpcomingExpirationEmail({
      subscriber: sanitizeSubscriberRow(subscriber),
      expirationDate: new Date(Date.now() + 7 * CONST_DAY_MILLISECONDS),
      l10n: l10n,
    }),
  );
}
