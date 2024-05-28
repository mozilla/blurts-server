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
import { getL10n } from "../../../../../functions/l10n/serverComponents";
import { getSubscriberByFxaUid } from "../../../../../../db/tables/subscribers";
import { ReactNode } from "react";
import { SubscriberRow } from "knex/types/tables";
import { getUserEmails } from "../../../../../../db/tables/emailAddresses";
import { getLocale } from "../../../../../functions/universal/getLocale";
import { MonthlyActivityEmail } from "../../../../../../emails/templates/monthlyActivity/MonthlyActivityEmail";
import { getDashboardSummary } from "../../../../../functions/server/dashboard";
import { getSubscriberBreaches } from "../../../../../functions/server/getSubscriberBreaches";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { getLatestOnerepScanResults } from "../../../../../../db/tables/onerep_scans";

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
    renderEmail(template),
  );
}

export async function triggerVerificationEmail(emailAddress: string) {
  const subscriber = await getAdminSubscriber();
  if (!subscriber) {
    return false;
  }

  const l10n = getL10n();
  await send(
    emailAddress,
    l10n.getString("email-subject-verify"),
    <VerifyEmailAddressEmail
      verificationUrl="https://example.com"
      subscriber={sanitizeSubscriberRow(subscriber)}
      l10n={l10n}
    />,
  );
}

export async function triggerMonthlyActivity(emailAddress: string) {
  const session = await getServerSession();
  const subscriber = await getAdminSubscriber();
  if (!subscriber || !session?.user) {
    return false;
  }

  const l10n = getL10n();
  const dateFormatter = new Intl.DateTimeFormat(getLocale(l10n), {
    month: "long",
  });

  const latestScan = await getLatestOnerepScanResults(
    subscriber.onerep_profile_id,
  );
  const data = getDashboardSummary(
    latestScan.results,
    await getSubscriberBreaches({
      fxaUid: session.user.subscriber?.fxa_uid,
      countryCode: getCountryCode(headers()),
    }),
  );

  await send(
    emailAddress,
    l10n.getString("email-monthly-plus-auto-subject", {
      month: dateFormatter.format(new Date(Date.now())),
    }),
    <MonthlyActivityEmail
      subscriber={sanitizeSubscriberRow(subscriber)}
      l10n={l10n}
      data={data}
    />,
  );
}
