/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "../../../functions/server/getServerSession";
import { getCountryCode } from "../../../functions/server/getCountryCode";
import {
  getProfilesStats,
  monthlySubscribersQuota,
} from "../../../functions/server/onerep";
import { isEligibleForPremium } from "../../../functions/universal/premium";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../functions/l10n/serverComponents";
import { View as LandingView } from "./LandingView";
import { View as LandingViewRedesign } from "./LandingViewRedesign";
import {
  CONST_DAY_MILLISECONDS,
  CONST_URL_MONITOR_LANDING_PAGE_ID,
} from "../../../../constants";
import { getExperimentationId } from "../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../functions/server/getExperiments";
import { getLocale } from "../../../functions/universal/getLocale";
import { AccountsMetricsFlowProvider } from "../../../../contextProviders/accounts-metrics-flow";
import { getEnabledFeatureFlags } from "../../../../db/tables/featureFlags";

export default async function Page() {
  const session = await getServerSession();
  if (typeof session?.user.subscriber?.fxa_uid === "string") {
    return redirect("/user/dashboard");
  }
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());
  const countryCode = getCountryCode(await headers());
  const eligibleForPremium = isEligibleForPremium(countryCode);

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    isSignedOut: true,
  });
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
    oneRepActivations > monthlySubscribersQuota;
  return (
    <AccountsMetricsFlowProvider
      enabled={experimentData["Features"]["landing-page-free-scan-cta"].enabled}
      metricsFlowParams={{
        entrypoint: CONST_URL_MONITOR_LANDING_PAGE_ID,
        entrypoint_experiment: "landing-page-free-scan-cta",
        entrypoint_variation:
          experimentData["Features"]["landing-page-free-scan-cta"].variant,
        form_type:
          experimentData["Features"]["landing-page-free-scan-cta"].variant ===
          "ctaWithEmail"
            ? "email"
            : "button",
        service: process.env.OAUTH_CLIENT_ID as string,
      }}
    >
      {enabledFeatureFlags.includes("LandingPageRedesign") &&
      experimentData["Features"][
        "landing-page-redesign-plus-eligible-experiment"
      ].enabled &&
      experimentData["Features"][
        "landing-page-redesign-plus-eligible-experiment"
      ].variant === "redesign" ? (
        <LandingViewRedesign
          eligibleForPremium={eligibleForPremium}
          l10n={l10n}
          countryCode={countryCode}
          scanLimitReached={scanLimitReached}
          experimentData={experimentData["Features"]}
        />
      ) : (
        <LandingView
          eligibleForPremium={eligibleForPremium}
          l10n={l10n}
          countryCode={countryCode}
          scanLimitReached={scanLimitReached}
          experimentData={experimentData["Features"]}
        />
      )}
    </AccountsMetricsFlowProvider>
  );
}
