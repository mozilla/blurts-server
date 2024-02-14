/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { View } from "./View";
import { authOptions } from "../../../../../../api/utils/auth";
import { getCountryCode } from "../../../../../../functions/server/getCountryCode";
import { getSubscriberBreaches } from "../../../../../../functions/server/getUserBreaches";
import {
  canSubscribeToPremium,
  hasPremium,
} from "../../../../../../functions/universal/user";
import {
  getLatestOnerepScanResults,
  getScansCountForProfile,
} from "../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../db/tables/subscribers";

import {
  activateAndOptoutProfile,
  getProfilesStats,
  isEligibleForFreeScan,
  isEligibleForPremium,
} from "../../../../../../functions/server/onerep";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../../../../functions/server/getPremiumSubscriptionInfo";
import { refreshStoredScanResults } from "../../../../../../functions/server/refreshStoredScanResults";
import { getEnabledFeatureFlags } from "../../../../../../../db/tables/featureFlags";
import { parseIso8601Datetime } from "../../../../../../../utils/parse";
import { getAttributionsFromCookiesOrDb } from "../../../../../../functions/server/attributions";
import { checkSession } from "../../../../../../functions/server/checkSession";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!checkSession(session) || !session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const headersList = headers();
  const countryCode = getCountryCode(headersList);

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const brokerScanReleaseDateParts = (
    process.env.BROKER_SCAN_RELEASE_DATE ?? ""
  ).split("-");
  if (brokerScanReleaseDateParts[0] === "") {
    brokerScanReleaseDateParts[0] = "2023";
  }
  const brokerScanReleaseDate = new Date(
    Date.UTC(
      Number.parseInt(brokerScanReleaseDateParts[0], 10),
      Number.parseInt(brokerScanReleaseDateParts[1] ?? "12", 10) - 1,
      Number.parseInt(brokerScanReleaseDateParts[2] ?? "05", 10),
    ),
  );

  const hasRunScan = typeof profileId === "number";
  const isNewUser =
    (parseIso8601Datetime(session.user.subscriber.created_at)?.getTime() ?? 0) >
    brokerScanReleaseDate.getTime();
  const isPremiumUser = hasPremium(session.user);

  if (hasRunScan) {
    await refreshStoredScanResults(profileId);

    // If the current user is a subscriber and their OneRep profile is not
    // activated: Most likely we were not able or failed to kick-off the
    // auto-removal process.
    // Let’s make sure the users OneRep profile is activated:
    if (isPremiumUser) {
      await activateAndOptoutProfile({ profileId });
    }
  } else if (
    isPremiumUser ||
    (isNewUser &&
      canSubscribeToPremium({
        user: session.user,
        countryCode: countryCode,
      }))
  ) {
    return redirect("/user/welcome/");
  }

  const latestScan = await getLatestOnerepScanResults(profileId);
  const scanCount =
    typeof profileId === "number"
      ? await getScansCountForProfile(profileId)
      : 0;
  const subBreaches = await getSubscriberBreaches(session.user);

  const userIsEligibleForFreeScan = await isEligibleForFreeScan(
    session.user,
    countryCode,
  );
  const enabledFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });
  const userIsEligibleForPremium = isEligibleForPremium(
    countryCode,
    enabledFlags,
  );

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });
  const fxaSettingsUrl = process.env.FXA_SETTINGS_URL!;
  const profileStats = await getProfilesStats();
  const additionalSubplatParams = await getAttributionsFromCookiesOrDb(
    session.user.subscriber.id,
  );

  return (
    <View
      user={session.user}
      isEligibleForPremium={userIsEligibleForPremium}
      isEligibleForFreeScan={userIsEligibleForFreeScan}
      userScanData={latestScan}
      userBreaches={subBreaches}
      enabledFeatureFlags={enabledFeatureFlags}
      monthlySubscriptionUrl={`${monthlySubscriptionUrl}&${additionalSubplatParams.toString()}`}
      yearlySubscriptionUrl={`${yearlySubscriptionUrl}&${additionalSubplatParams.toString()}`}
      subscriptionBillingAmount={getSubscriptionBillingAmount()}
      fxaSettingsUrl={fxaSettingsUrl}
      scanCount={scanCount}
      totalNumberOfPerformedScans={profileStats?.total}
    />
  );
}
