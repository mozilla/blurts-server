/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "../../../../../../../functions/server/getServerSession";
import { TabType, View } from "../View";
import { getCountryCode } from "../../../../../../../functions/server/getCountryCode";
import { getSubscriberBreaches } from "../../../../../../../functions/server/getSubscriberBreaches";
import {
  canSubscribeToPremium,
  hasPremium,
} from "../../../../../../../functions/universal/user";
import {
  getLatestScanForProfileByReason,
  getMockedScanResults,
  getScanResultsWithBroker,
  getScansCountForProfile as getScansCountForOnerepProfile,
} from "../../../../../../../../db/tables/onerep_scans";
import {
  getOnerepProfileId,
  getSignInCount,
  getSubscriberByFxaUid,
} from "../../../../../../../../db/tables/subscribers";

import {
  activateAndOptoutProfile,
  getProfilesStats,
  isEligibleForFreeScan as isEligibleForFreeOnerepScan,
} from "../../../../../../../functions/server/onerep";
import { isEligibleForPremium } from "../../../../../../../functions/universal/premium";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../../../../../functions/server/getPremiumSubscriptionInfo";
import { refreshStoredScanResults } from "../../../../../../../functions/server/refreshStoredScanResults";
import { getEnabledFeatureFlags } from "../../../../../../../../db/tables/featureFlags";
import { getAttributionsFromCookiesOrDb } from "../../../../../../../functions/server/attributions";
import { checkSession } from "../../../../../../../functions/server/checkSession";
import { isPrePlusUser } from "../../../../../../../functions/server/isPrePlusUser";
import { getExperimentationIdFromUserSession } from "../../../../../../../functions/server/getExperimentationId";
import { getElapsedTimeInDaysSinceInitialScan } from "../../../../../../../functions/server/getElapsedTimeInDaysSinceInitialScan";
import { getExperiments } from "../../../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../../../functions/l10n/serverComponents";
import { getDataBrokerRemovalTimeEstimates } from "../../../../../../../functions/server/getDataBrokerRemovalTimeEstimates";
import { initializeUserAnnouncements } from "../../../../../../../../db/tables/user_announcements";
import { connection } from "next/server";
import { getPlusShutdownState } from "../../../../../../../functions/server/getPlusShutdownState";

const dashboardTabSlugs = ["action-needed", "fixed"];

type Props = {
  params: Promise<{
    slug: string[] | undefined;
  }>;
  searchParams: Promise<{
    dialog?: "subscriptions";
  }>;
};

export default async function DashboardPage(props: Props) {
  // Calling `connection` forces everything below it to be excluded from
  // prerendering. Technically the page was already dynamic,
  // but interestingly enough this change seemed to fix the cache-like
  // behavior we saw in MNTOR-4908.
  await connection();
  const searchParams = await props.searchParams;
  if (searchParams.dialog === "subscriptions") {
    return redirect("/subscription-plans");
  }

  const session = await getServerSession();
  if (!checkSession(session) || !session?.user?.subscriber?.fxa_uid) {
    return redirect("/auth/logout");
  }

  const subscriber = await getSubscriberByFxaUid(
    session.user.subscriber.fxa_uid,
  );
  if (!subscriber) {
    redirect("/auth/logout");
  }

  const params = await props.params;
  const { slug } = params;
  const isPremiumUser = hasPremium(session.user);
  const defaultTab = isPremiumUser ? "fixed" : "action-needed";
  const activeTab = (slug?.[0] ?? defaultTab) as TabType;
  // Only allow the tab slugs. Otherwise: Redirect to the default dashboard route.
  if (
    typeof slug !== "undefined" &&
    (!(activeTab && dashboardTabSlugs.includes(activeTab)) || slug.length >= 2)
  ) {
    return redirect(`/user/dashboard/${defaultTab}`);
  }

  const headersList = await headers();
  const countryCode = getCountryCode(headersList);

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  const experimentationId = await getExperimentationIdFromUserSession(
    session.user,
  );
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: getLocale(getL10n(await getAcceptLangHeaderInServerComponents())),
  });

  let hasRunScan = false;
  const onerepProfileId: number | null = await getOnerepProfileId(
    subscriber.id,
  );
  if (typeof onerepProfileId === "number") {
    hasRunScan = true;
    await refreshStoredScanResults(onerepProfileId);

    // If the current user is a subscriber and their OneRep profile is not
    // activated: Most likely we were not able or failed to kick-off the
    // auto-removal process.
    // Let’s make sure the users OneRep profile is activated:
    if (isPremiumUser) {
      await activateAndOptoutProfile({ profileId: onerepProfileId });
    }
  }

  const isNewUser = !isPrePlusUser(session.user);

  if (
    !hasRunScan &&
    (isPremiumUser ||
      (isNewUser &&
        canSubscribeToPremium({
          user: session.user,
          countryCode,
          enabledFeatureFlags,
        })))
  ) {
    return redirect("/user/welcome");
  }

  const subBreaches = await getSubscriberBreaches({
    fxaUid: subscriber.fxa_uid,
    countryCode,
  });

  const userIsEligibleForFreeScan = await isEligibleForFreeOnerepScan(
    session.user,
    countryCode,
    enabledFeatureFlags,
  );
  const userIsEligibleForPremium =
    isEligibleForPremium(countryCode) &&
    (!enabledFeatureFlags.includes("FreeOnly") || isPremiumUser);

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({
    type: "monthly",
    enabledFeatureFlags,
  });
  const fxaSettingsUrl = process.env.FXA_SETTINGS_URL!;
  const profileStats = await getProfilesStats();
  const additionalSubplatParams = await getAttributionsFromCookiesOrDb(
    subscriber.id,
  );
  const additionalSubplatParamsString =
    additionalSubplatParams.size > 0
      ? // SubPlat2 subscription links already have the UTM parameter `?plan` appended.
        `${enabledFeatureFlags.includes("SubPlat3") ? "?" : "&"}${additionalSubplatParams.toString()}`
      : "";
  const elapsedTimeInDaysSinceInitialScan =
    await getElapsedTimeInDaysSinceInitialScan(subscriber);

  const userAnnouncements = await initializeUserAnnouncements(session.user);

  const signInCount = await getSignInCount(subscriber.id);

  const useMockedScans =
    enabledFeatureFlags.includes("CustomDataBrokers") &&
    process.env.APP_ENV !== "production";

  const scanResults = useMockedScans
    ? await getMockedScanResults(onerepProfileId)
    : await getScanResultsWithBroker(onerepProfileId, hasPremium(session.user));

  const scanCount =
    typeof onerepProfileId === "number"
      ? await getScansCountForOnerepProfile(onerepProfileId)
      : 0;

  const hasFirstMonitoringScan = onerepProfileId
    ? typeof (await getLatestScanForProfileByReason(
        onerepProfileId,
        "monitoring",
      )) !== "undefined"
    : false;

  const shutdownState = getPlusShutdownState(subscriber);

  return (
    <View
      user={session.user}
      isEligibleForPremium={userIsEligibleForPremium}
      isEligibleForFreeScan={userIsEligibleForFreeScan}
      countryCode={countryCode}
      shutdownState={shutdownState}
      userScanData={scanResults}
      userBreaches={subBreaches}
      enabledFeatureFlags={enabledFeatureFlags}
      monthlySubscriptionUrl={`${monthlySubscriptionUrl}${additionalSubplatParamsString}`}
      subscriptionBillingAmount={getSubscriptionBillingAmount()}
      fxaSettingsUrl={fxaSettingsUrl}
      scanCount={scanCount}
      totalNumberOfPerformedScans={profileStats?.total}
      isNewUser={isNewUser}
      elapsedTimeInDaysSinceInitialScan={elapsedTimeInDaysSinceInitialScan}
      experimentData={experimentData["Features"]}
      activeTab={activeTab}
      hasFirstMonitoringScan={hasFirstMonitoringScan}
      signInCount={signInCount}
      removalTimeEstimates={getDataBrokerRemovalTimeEstimates(scanResults)}
      userAnnouncements={userAnnouncements}
    />
  );
}
