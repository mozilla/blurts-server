/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers, cookies } from "next/headers";
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
import {
  addAttributionForSubscriber,
  getLatestAttributionForSubscriberWithType,
} from "../../../../../../../db/tables/attributions";
import { getUserId } from "../../../../../../functions/server/getUserId";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const headersList = headers();
  const cookiesList = cookies();
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

  if (
    !hasRunScan &&
    (isPremiumUser ||
      (isNewUser &&
        canSubscribeToPremium({
          user: session.user,
          countryCode: countryCode,
        })))
  ) {
    return redirect("/user/welcome/");
  }

  await refreshStoredScanResults(profileId);

  // If the current user is a subscriber and their OneRep profile is not
  // activated: Most likely we were not able or failed to kick-off the
  // auto-removal process.
  // Let’s make sure the users OneRep profile is activated:
  if (isPremiumUser) {
    await activateAndOptoutProfile({ profileId });
  }

  const latestScan = await getLatestOnerepScanResults(profileId);
  const scanCount = await getScansCountForProfile(profileId);
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
  let additionalSubplatParams = new URLSearchParams(
    cookiesList.get("attributionsLastTouch")?.value,
  );

  // store utm attributions if present in cookies
  if (cookiesList.get("attributionsFirstTouch")?.value) {
    const searchParams = new URLSearchParams(
      cookiesList.get("attributionsFirstTouch")?.value,
    );
    const attribution = {
      type: "firstTouch",
      entrypoint: searchParams.get("entrypoint") ?? "",
      utm_campaign: searchParams.get("utm_campaign") ?? "",
      utm_medium: searchParams.get("utm_medium") ?? "",
      utm_source: searchParams.get("utm_source") ?? "",
      utm_term: searchParams.get("utm_term") ?? "",
    };
    try {
      await addAttributionForSubscriber(
        session.user.subscriber.id,
        attribution,
      );
    } catch (e) {
      //ignore
    }
  }

  if (additionalSubplatParams.size > 0) {
    const attribution = {
      type: "lastTouch",
      entrypoint: additionalSubplatParams.get("entrypoint") ?? "",
      utm_campaign: additionalSubplatParams.get("utm_campaign") ?? "",
      utm_medium: additionalSubplatParams.get("utm_medium") ?? "",
      utm_source: additionalSubplatParams.get("utm_source") ?? "",
      utm_term: additionalSubplatParams.get("utm_term") ?? "",
    };
    try {
      await addAttributionForSubscriber(
        session.user.subscriber.id,
        attribution,
      );
    } catch (e) {
      //ignore
    }
  } else {
    // if "attributionsLastTouch" cookie isn't present, try to load the attribution from the db
    const attributionLastTouch =
      await getLatestAttributionForSubscriberWithType(
        session.user.subscriber.id,
        "lastTouch",
      );
    if (attributionLastTouch) {
      additionalSubplatParams = new URLSearchParams(
        attributionLastTouch as Record<string, string>,
      );
    }
  }

  return (
    <View
      user={session.user}
      userId={getUserId(session)}
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
      isNewUser={isNewUser}
    />
  );
}
