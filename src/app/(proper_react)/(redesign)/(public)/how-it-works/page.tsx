/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { HowItWorksView } from "./HowItWorksView";
import { getCountryCode } from "../../../../functions/server/getCountryCode";
import { redirect } from "next/navigation";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../functions/l10n/serverComponents";
import {
  getProfilesStats,
  monthlySubscribersQuota,
} from "../../../../functions/server/onerep";
import { isEligibleForPremium } from "../../../../functions/universal/premium";
import { CONST_DAY_MILLISECONDS } from "../../../../../constants";
import { getEnabledFeatureFlags } from "../../../../../db/tables/featureFlags";

export default async function Page() {
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);

  if (countryCode !== "us") {
    return redirect("/");
  }

  const eligibleForPremium = isEligibleForPremium(countryCode);
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());

  // request the profile stats for the last 30 days
  const profileStats = await getProfilesStats(
    new Date(Date.now() - 30 * CONST_DAY_MILLISECONDS),
  );
  const oneRepActivations = profileStats?.total_active;
  const scanLimitReached =
    typeof oneRepActivations === "undefined" ||
    oneRepActivations > monthlySubscribersQuota;

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    isSignedOut: true,
  });

  return (
    <HowItWorksView
      l10n={l10n}
      eligibleForPremium={eligibleForPremium}
      scanLimitReached={scanLimitReached}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
