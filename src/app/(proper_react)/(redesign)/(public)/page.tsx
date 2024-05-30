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
import { CONST_DAY_MILLISECONDS } from "../../../../constants";

export default async function Page() {
  const session = await getServerSession();
  if (typeof session?.user.subscriber?.fxa_uid === "string") {
    return redirect("/user/dashboard");
  }
  const enabledFlags = await getEnabledFeatureFlags({ ignoreAllowlist: true });
  const countryCode = getCountryCode(headers());
  const eligibleForPremium = isEligibleForPremium(countryCode);

  // request the profile stats for the last 30 days
  const profileStats = await getProfilesStats(
    new Date(Date.now() - 30 * CONST_DAY_MILLISECONDS),
  );
  const oneRepActivations = profileStats?.total_active;
  const scanLimitReached =
    typeof oneRepActivations === "undefined" ||
    oneRepActivations > monthlySubscribersQuota;
  return (
    <View
      eligibleForPremium={eligibleForPremium}
      l10n={getL10n()}
      countryCode={countryCode}
      scanLimitReached={scanLimitReached}
      enabledFlags={enabledFlags}
    />
  );
}
