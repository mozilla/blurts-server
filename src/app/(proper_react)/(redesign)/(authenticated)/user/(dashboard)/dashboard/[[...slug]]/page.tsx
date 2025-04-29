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
  getScansCountForProfile,
} from "../../../../../../../../db/tables/onerep_scans";
import {
  getOnerepProfileId,
  getSignInCount,
} from "../../../../../../../../db/tables/subscribers";

import {
  activateAndOptoutProfile,
  getProfilesStats,
  isEligibleForFreeScan,
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
import { getExperimentationId } from "../../../../../../../functions/server/getExperimentationId";
import { getElapsedTimeInDaysSinceInitialScan } from "../../../../../../../functions/server/getElapsedTimeInDaysSinceInitialScan";
import { getExperiments } from "../../../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../../../functions/l10n/serverComponents";
import { getDataBrokerRemovalTimeEstimates } from "../../../../../../../functions/server/getDataBrokerRemovalTimeEstimates";
import { initializeUserAnnouncements } from "../../../../../../../../db/tables/user_announcements";

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
  const searchParams = await props.searchParams;
  const params = await props.params;
  const session = await getServerSession();
  if (!checkSession(session) || !session?.user?.subscriber?.id) {
    return redirect("/auth/logout");
  }

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

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const hasRunScan = typeof profileId === "number";
  const isNewUser = !isPrePlusUser(session.user);

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
        countryCode,
      }))
  ) {
    return redirect("/user/welcome");
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  const useMockedScans =
    enabledFeatureFlags.includes("CustomDataBrokers") &&
    process.env.APP_ENV !== "production";

  const scanResults = useMockedScans
    ? await getMockedScanResults(profileId)
    : await getScanResultsWithBroker(profileId, hasPremium(session.user));

  const scanCount =
    typeof profileId === "number"
      ? await getScansCountForProfile(profileId)
      : 0;
  const subBreaches = await getSubscriberBreaches({
    fxaUid: session.user.subscriber.fxa_uid,
    countryCode,
  });

  const userIsEligibleForFreeScan = await isEligibleForFreeScan(
    session.user,
    countryCode,
  );
  const userIsEligibleForPremium = isEligibleForPremium(countryCode);

  const experimentationId = await getExperimentationId(session.user);
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: getLocale(getL10n(await getAcceptLangHeaderInServerComponents())),
  });

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({
    type: "monthly",
    enabledFeatureFlags,
  });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({
    type: "yearly",
    enabledFeatureFlags,
  });
  const fxaSettingsUrl = process.env.FXA_SETTINGS_URL!;
  const profileStats = await getProfilesStats();
  const additionalSubplatParams = await getAttributionsFromCookiesOrDb(
    session.user.subscriber.id,
  );
  const additionalSubplatParamsString =
    additionalSubplatParams.size > 0
      ? // SubPlat2 subscription links already have the UTM parameter `?plan` appended.
        `${enabledFeatureFlags.includes("SubPlat3") ? "?" : "&"}${additionalSubplatParams.toString()}`
      : "";
  const elapsedTimeInDaysSinceInitialScan =
    await getElapsedTimeInDaysSinceInitialScan(session.user);

  const hasFirstMonitoringScan = profileId
    ? typeof (await getLatestScanForProfileByReason(
        profileId,
        "monitoring",
      )) !== "undefined"
    : false;
  const signInCount = await getSignInCount(session.user.subscriber.id);

  const userAnnouncements = await initializeUserAnnouncements(
    session.user.subscriber,
  );

  return (
    <View
      user={session.user}
      isEligibleForPremium={userIsEligibleForPremium}
      isEligibleForFreeScan={userIsEligibleForFreeScan}
      userScanData={scanResults}
      userBreaches={subBreaches}
      enabledFeatureFlags={enabledFeatureFlags}
      monthlySubscriptionUrl={`${monthlySubscriptionUrl}${additionalSubplatParamsString}`}
      yearlySubscriptionUrl={`${yearlySubscriptionUrl}${additionalSubplatParamsString}`}
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
      autoOpenUpsellDialog={searchParams.dialog === "subscriptions"}
      removalTimeEstimates={getDataBrokerRemovalTimeEstimates(scanResults)}
      userAnnouncements={userAnnouncements}
    />
  );
}
