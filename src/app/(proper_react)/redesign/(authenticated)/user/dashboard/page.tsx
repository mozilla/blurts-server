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
import {
  getSubscriberBreaches,
  guidedExperienceBreaches,
} from "../../../../../functions/server/getUserBreaches";
import { getLocale } from "../../../../../functions/server/l10n";
import { canSubscribeToPremium } from "../../../../../functions/universal/user";
import { getLatestOnerepScan } from "../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../db/tables/subscribers";

import { isFlagEnabled } from "../../../../../functions/server/featureFlags";
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

  const scanResult = await getLatestOnerepScan(profileId);
  const scanResultItems = scanResult?.onerep_scan_results?.data ?? [];
  const subBreaches = await getSubscriberBreaches(session.user);
  const summary = dashboardSummary(scanResultItems, subBreaches);
  const guidedBreaches = guidedExperienceBreaches(subBreaches);
  console.log(JSON.stringify(guidedBreaches));
  const locale = getLocale();

  const FreeBrokerScan = await isFlagEnabled("FreeBrokerScan", session.user);
  const PremiumBrokerRemoval = await isFlagEnabled(
    "PremiumBrokerRemoval",
    session.user
  );
  const featureFlagsEnabled = { FreeBrokerScan, PremiumBrokerRemoval };

  return (
    <View
      user={session.user}
      userScannedResults={scanResultItems}
      userBreaches={subBreaches}
      locale={locale}
      bannerData={summary}
      featureFlagsEnabled={featureFlagsEnabled}
    />
  );
}
