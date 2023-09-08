/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { View } from "./View";
import { authOptions } from "../../../../../api/utils/auth";
import { dashboardSummary } from "../../../../../functions/server/dashboard";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { getSubscriberBreaches } from "../../../../../functions/server/getUserBreaches";
import { getLocale } from "../../../../../functions/server/l10n";
import { canSubscribeToPremium } from "../../../../../functions/universal/user";
import { getLatestOnerepScanResults } from "../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../db/tables/subscribers";

import { isFlagEnabled } from "../../../../../functions/server/featureFlags";
import { isEligibleForFreeScan } from "../../../../../functions/server/onerep";
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const headersList = headers();
  const countryCode = getCountryCode(headersList);

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  if (
    !profileId &&
    canSubscribeToPremium({ user: session?.user, countryCode: countryCode })
  ) {
    return redirect("/redesign/user/welcome/");
  }

  const latestScan = await getLatestOnerepScanResults(profileId);
  const subBreaches = await getSubscriberBreaches(session.user);
  const summary = dashboardSummary(latestScan.results, subBreaches);
  const locale = getLocale();

  const userIsEligibleForFreeScan = await isEligibleForFreeScan(
    session.user,
    countryCode
  );

  const FreeBrokerScan = await isFlagEnabled("FreeBrokerScan", session.user);
  const PremiumBrokerRemoval = await isFlagEnabled(
    "PremiumBrokerRemoval",
    session.user
  );
  const featureFlagsEnabled = { FreeBrokerScan, PremiumBrokerRemoval };

  return (
    <View
      countryCode={countryCode}
      user={session.user}
      isEligibleForFreeScan={userIsEligibleForFreeScan}
      userScannedResults={latestScan.results}
      userBreaches={subBreaches}
      locale={locale}
      bannerData={summary}
      featureFlagsEnabled={featureFlagsEnabled}
    />
  );
}
