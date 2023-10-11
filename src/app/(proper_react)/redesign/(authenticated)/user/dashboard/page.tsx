/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { View } from "./View";
import { authOptions } from "../../../../../api/utils/auth";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { getSubscriberBreaches } from "../../../../../functions/server/getUserBreaches";
import {
  canSubscribeToPremium,
  hasPremium,
} from "../../../../../functions/universal/user";
import { getLatestOnerepScanResults } from "../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../db/tables/subscribers";

import { isFlagEnabled } from "../../../../../functions/server/featureFlags";
import {
  isEligibleForFreeScan,
  isEligibleForPremium,
} from "../../../../../functions/server/onerep";
import getPremiumSubscriptionUrl from "../../../../../functions/server/getPremiumSubscriptionUrl";
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

  const userIsEligibleForFreeScan = await isEligibleForFreeScan(
    session.user,
    countryCode
  );
  const userIsEligibleForPremium = await isEligibleForPremium(
    session.user,
    countryCode
  );
  const isPremiumUser = hasPremium(session.user);

  const FreeBrokerScan = await isFlagEnabled("FreeBrokerScan", session.user);
  const PremiumBrokerRemoval = await isFlagEnabled(
    "PremiumBrokerRemoval",
    session.user
  );
  const featureFlagsEnabled = { FreeBrokerScan, PremiumBrokerRemoval };

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });

  return (
    <View
      user={session.user}
      isEligibleForPremium={userIsEligibleForPremium}
      isEligibleForFreeScan={userIsEligibleForFreeScan}
      isPremiumUser={isPremiumUser}
      userScanData={latestScan}
      userBreaches={subBreaches}
      featureFlagsEnabled={featureFlagsEnabled}
      monthlySubscriptionUrl={monthlySubscriptionUrl}
      yearlySubscriptionUrl={yearlySubscriptionUrl}
    />
  );
}
