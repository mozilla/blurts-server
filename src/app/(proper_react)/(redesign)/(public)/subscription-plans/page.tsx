/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { SubscriptionPlansView } from "./SubscriptionPlansView";
import { getCountryCode } from "../../../../functions/server/getCountryCode";
import { redirect } from "next/navigation";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../functions/l10n/serverComponents";
import { isEligibleForPremium } from "../../../../functions/universal/premium";
import { getEnabledFeatureFlags } from "../../../../../db/tables/featureFlags";
import {
  getProfilesStats,
  monthlySubscribersQuota,
} from "../../../../functions/server/onerep";
import { CONST_DAY_MILLISECONDS } from "../../../../../constants";
import { getExperimentationId } from "../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../functions/server/getExperiments";
import { getLocale } from "../../../../functions/universal/getLocale";
import {
  getPremiumSubscriptionUrl,
  getSubscriptionBillingAmount,
} from "../../../../functions/server/getPremiumSubscriptionInfo";
import { getServerSession } from "../../../../functions/server/getServerSession";

export default async function Page() {
  const session = await getServerSession();
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);

  if (countryCode !== "us") {
    return redirect("/");
  }

  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());
  const eligibleForPremium = isEligibleForPremium(countryCode);
  const enabledFeatureFlags = await getEnabledFeatureFlags(
    typeof session?.user.subscriber?.fxa_uid === "string"
      ? {
          isSignedOut: false,
          email: session.user.email,
        }
      : { isSignedOut: true },
  );

  if (!eligibleForPremium) {
    return redirect("/");
  }

  const experimentationId = await getExperimentationId(session?.user ?? null);
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: getLocale(l10n),
  });

  // request the profile stats for the last 30 days
  const profileStats = await getProfilesStats(
    new Date(Date.now() - 30 * CONST_DAY_MILLISECONDS),
  );
  const oneRepActivations = profileStats?.total_active;
  const scanLimitReached =
    typeof oneRepActivations === "undefined" ||
    oneRepActivations > monthlySubscribersQuota ||
    (enabledFeatureFlags.includes("DisableOneRepScans") && eligibleForPremium);

  return (
    <SubscriptionPlansView
      eligibleForPremium={eligibleForPremium}
      l10n={l10n}
      countryCode={countryCode}
      scanLimitReached={scanLimitReached}
      experimentData={experimentData["Features"]}
      enabledFeatureFlags={enabledFeatureFlags}
      bundleProductUrl={{
        relay: process.env.FIREFOX_RELAY_LANDING_URL ?? "",
        vpn: process.env.MOZILLA_VPN_LANDING_URL ?? "",
      }}
      premiumSubscriptionUrl={{
        monthly: getPremiumSubscriptionUrl({
          type: "monthly",
          enabledFeatureFlags,
        }),
        yearly: getPremiumSubscriptionUrl({
          type: "yearly",
          enabledFeatureFlags,
        }),
        bundle: getPremiumSubscriptionUrl({
          type: "bundle",
          enabledFeatureFlags,
        }),
      }}
      subscriptionBillingAmount={getSubscriptionBillingAmount()}
    />
  );
}
