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
  getLatestOnerepScanResults,
  getScansCountForProfile,
} from "../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../db/tables/subscribers";

import {
  activateAndOptoutProfile,
  getProfilesStats,
  isEligibleForFreeScan,
  isEligibleForPremium,
} from "../../../../../../../functions/server/onerep";
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
import { getL10n } from "../../../../../../../functions/l10n/serverComponents";

const dashboardTabSlugs = ["action-needed", "fixed"];

type Props = {
  params: {
    slug: string[] | undefined;
  };
};

export default async function DashboardPage({ params }: Props) {
  const session = await getServerSession();
  if (!checkSession(session) || !session?.user?.subscriber?.id) {
    return redirect("/");
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

  const headersList = headers();
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

  const latestScan = await getLatestOnerepScanResults(profileId);
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
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });
  const userIsEligibleForPremium = isEligibleForPremium(
    countryCode,
    enabledFeatureFlags,
  );

  const experimentationId = getExperimentationId(session.user);
  const experimentData = await getExperiments({
    experimentationId: experimentationId,
    countryCode: countryCode,
    locale: getLocale(getL10n()),
  });

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });
  const fxaSettingsUrl = process.env.FXA_SETTINGS_URL!;
  const profileStats = await getProfilesStats();
  const additionalSubplatParams = await getAttributionsFromCookiesOrDb(
    session.user.subscriber.id,
  );
  const elapsedTimeInDaysSinceInitialScan =
    await getElapsedTimeInDaysSinceInitialScan(session.user);

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
      isNewUser={isNewUser}
      elapsedTimeInDaysSinceInitialScan={elapsedTimeInDaysSinceInitialScan}
      experimentationId={experimentationId}
      experimentData={experimentData}
      activeTab={activeTab}
    />
  );
}
