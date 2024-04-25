/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../functions/server/getServerSession";
import { SettingsView } from "./View";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../../../../functions/server/getPremiumSubscriptionInfo";
import { getL10n } from "../../../../../../functions/l10n/serverComponents";
import { getUserEmails } from "../../../../../../../db/tables/emailAddresses";
import { getBreaches } from "../../../../../../functions/server/getBreaches";
import { getBreachesForEmail } from "../../../../../../../utils/hibp";
import { getSha1 } from "../../../../../../../utils/fxa";
import { getAttributionsFromCookiesOrDb } from "../../../../../../functions/server/attributions";
import { getEnabledFeatureFlags } from "../../../../../../../db/tables/featureFlags";
import { getLatestOnerepScan } from "../../../../../../../db/tables/onerep_scans";
import { getUserId } from "../../../../../../functions/server/getUserId";
import { getExperiments } from "../../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../../functions/universal/getLocale";
import { getCountryCode } from "../../../../../../functions/server/getCountryCode";

export default async function SettingsPage() {
  const session = await getServerSession();
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const emailAddresses = await getUserEmails(session.user.subscriber.id);

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });
  const fxaSettingsUrl = process.env.FXA_SETTINGS_URL!;
  const fxaSubscriptionsUrl = process.env.FXA_SUBSCRIPTIONS_URL!;
  const additionalSubplatParams = await getAttributionsFromCookiesOrDb(
    session.user.subscriber.id,
  );
  const allBreaches = await getBreaches();
  const breachCountByEmailAddress: Record<string, number> = {};
  const emailAddressStrings = emailAddresses.map(
    (emailAddress) => emailAddress.email,
  );
  emailAddressStrings.push(session.user.email);
  for (const emailAddress of emailAddressStrings) {
    const breaches = await getBreachesForEmail(
      getSha1(emailAddress),
      allBreaches,
      true,
    );
    breachCountByEmailAddress[emailAddress] = breaches.length;
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    ignoreAllowlist: false,
    email: session.user.email,
  });

  const headersList = headers();
  const countryCode = getCountryCode(headersList);
  const experimentationId = getUserId(session.user);
  const experimentData = await getExperiments({
    experimentationId: experimentationId,
    countryCode: countryCode,
    locale: getLocale(getL10n()),
  });

  const lastOneRepScan = await getLatestOnerepScan(
    session.user.subscriber.onerep_profile_id,
  );

  return (
    <SettingsView
      l10n={getL10n()}
      user={session.user}
      emailAddresses={emailAddresses}
      breachCountByEmailAddress={breachCountByEmailAddress}
      fxaSettingsUrl={fxaSettingsUrl}
      fxaSubscriptionsUrl={fxaSubscriptionsUrl}
      monthlySubscriptionUrl={`${monthlySubscriptionUrl}&${additionalSubplatParams.toString()}`}
      yearlySubscriptionUrl={`${yearlySubscriptionUrl}&${additionalSubplatParams.toString()}`}
      subscriptionBillingAmount={getSubscriptionBillingAmount()}
      enabledFeatureFlags={enabledFeatureFlags}
      experimentData={experimentData}
      lastScanDate={lastOneRepScan?.created_at}
    />
  );
}
