/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "../../../functions/server/getServerSession";
import { getCountryCode } from "../../../functions/server/getCountryCode";
import {
  isEligibleForPremium,
  getProfilesStats,
  monthlySubscribersQuota,
} from "../../../functions/server/onerep";
import { getEnabledFeatureFlags } from "../../../../db/tables/featureFlags";
import { getL10n } from "../../../functions/l10n/serverComponents";
import { View } from "./LandingView";
import {
  CONST_DAY_MILLISECONDS,
  CONST_URL_MONITOR_LANDING_PAGE_ID,
} from "../../../../constants";
import { getExperimentationId } from "../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../functions/server/getExperiments";
import { getLocale } from "../../../functions/universal/getLocale";
import { AccountsMetricsFlowProvider } from "../../../../contextProviders/accounts-metrics-flow";

type Props = {
  searchParams: {
    nimbus_web_preview?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const session = await getServerSession();
  if (typeof session?.user.subscriber?.fxa_uid === "string") {
    return redirect("/user/dashboard");
  }
  const enabledFlags = await getEnabledFeatureFlags({ ignoreAllowlist: true });
  const countryCode = getCountryCode(headers());
  const eligibleForPremium = isEligibleForPremium(countryCode);

  const experimentationId = getExperimentationId(session?.user ?? null);
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: getLocale(getL10n()),
    previewMode: searchParams.nimbus_web_preview === "true",
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
      enabled={experimentData["landing-page-free-scan-cta"].enabled}
      metricsFlowParams={{
        entrypoint: CONST_URL_MONITOR_LANDING_PAGE_ID,
        entrypoint_experiment: "landing-page-free-scan-cta",
        entrypoint_variation:
          experimentData["landing-page-free-scan-cta"].variant,
        form_type:
          experimentData["landing-page-free-scan-cta"].variant ===
          "ctaWithEmail"
            ? "email"
            : "button",
        service: process.env.OAUTH_CLIENT_ID as string,
      }}
    >
      <View
        eligibleForPremium={eligibleForPremium}
        l10n={getL10n()}
        countryCode={countryCode}
        scanLimitReached={scanLimitReached}
        enabledFlags={enabledFlags}
        experimentData={experimentData}
      />
    </AccountsMetricsFlowProvider>
  );
}
