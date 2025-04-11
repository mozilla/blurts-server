/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../../functions/server/getServerSession";
import { SettingsView, TabType } from "../View";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../../../../../functions/server/getPremiumSubscriptionInfo";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../../../functions/l10n/serverComponents";
import { getUserEmails } from "../../../../../../../../db/tables/emailAddresses";
import { getBreaches } from "../../../../../../../functions/server/getBreaches";
import { getBreachesForEmail } from "../../../../../../../../utils/hibp";
import { getSha1 } from "../../../../../../../../utils/fxa";
import { getAttributionsFromCookiesOrDb } from "../../../../../../../functions/server/attributions";
import { getEnabledFeatureFlags } from "../../../../../../../../db/tables/featureFlags";
import { getLatestOnerepScan } from "../../../../../../../../db/tables/onerep_scans";
import { getExperimentationId } from "../../../../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import { getCountryCode } from "../../../../../../../functions/server/getCountryCode";
import { getSubscriberById } from "../../../../../../../../db/tables/subscribers";
import { checkSession } from "../../../../../../../functions/server/checkSession";
import { checkUserHasMonthlySubscription } from "../../../../../../../functions/server/user";
import { getEmailPreferenceForPrimaryEmail } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { CONST_SETTINGS_TAB_SLUGS } from "../../../../../../../../constants";
import getDataBrokerScanProfile from "../../../../../../../functions/server/getDataBrokerScanProfile";
import { canSubscribeToPremium } from "../../../../../../../functions/universal/user";
import { initializeUserAnnouncements } from "../../../../../../../../db/tables/user_announcements";

type Props = {
  params: Promise<{
    slug: string[] | undefined;
  }>;
};

export default async function SettingsPage(props: Props) {
  const params = await props.params;
  const session = await getServerSession();

  if (!session?.user?.subscriber?.id || !checkSession(session)) {
    return redirect("/auth/logout");
  }

  const { slug } = params;
  const defaultTab = CONST_SETTINGS_TAB_SLUGS[0];
  const activeTab = (slug?.[0] ?? defaultTab) as TabType;
  // Only allow the tab slugs. Otherwise: Redirect to the default settings route.
  if (
    typeof slug !== "undefined" &&
    (!CONST_SETTINGS_TAB_SLUGS.includes(activeTab) || slug.length >= 2)
  ) {
    return redirect(`/user/settings/${defaultTab}`);
  }

  const emailAddresses = await getUserEmails(session.user.subscriber.id);
  const isMonthlySubscriber = await checkUserHasMonthlySubscription(
    session.user,
  );

  const fxaSettingsUrl = process.env.FXA_SETTINGS_URL!;
  const fxaSubscriptionsUrl = process.env.FXA_SUBSCRIPTIONS_URL!;
  const allBreaches = await getBreaches();
  const breachCountByEmailAddress: Record<string, number> = {};
  const emailAddressStrings = emailAddresses.map(
    (emailAddress) => emailAddress.email,
  );
  emailAddressStrings.push(session.user.email);
  for (const emailAddress of emailAddressStrings) {
    const breaches = await getBreachesForEmail(
      getSha1(emailAddress),
      allBreaches,
      true,
    );
    breachCountByEmailAddress[emailAddress] = breaches.length;
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    isSignedOut: false,
    email: session.user.email,
  });

  const additionalSubplatParams = await getAttributionsFromCookiesOrDb(
    session.user.subscriber.id,
  );
  const additionalSubplatParamsString =
    additionalSubplatParams.size > 0
      ? // SubPlat2 subscription links already have the UTM parameter `?plan` appended.
        `${enabledFeatureFlags.includes("SubPlat3") ? "?" : "&"}${additionalSubplatParams.toString()}`
      : "";

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({
    type: "monthly",
    enabledFeatureFlags,
  });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({
    type: "yearly",
    enabledFeatureFlags,
  });

  const headersList = await headers();
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());
  const countryCode = getCountryCode(headersList);
  const experimentationId = await getExperimentationId(session.user);

  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: getLocale(l10n),
  });

  const lastOneRepScan = await getLatestOnerepScan(
    session.user.subscriber.onerep_profile_id,
  );

  const userData = await getSubscriberById(session.user.subscriber.id);
  if (!userData) {
    return redirect("/");
  }

  const settingsData = await getEmailPreferenceForPrimaryEmail(
    session.user.email,
  );
  const profileData =
    session.user.subscriber.onerep_profile_id &&
    (await getDataBrokerScanProfile(session.user.subscriber.onerep_profile_id));
  const isEligibleForPremium = canSubscribeToPremium({
    user: session.user,
    countryCode,
  });

  const userAnnouncements = await initializeUserAnnouncements(
    session.user.subscriber,
  );

  return (
    <SettingsView
      l10n={l10n}
      user={session.user}
      subscriber={userData}
      data={settingsData}
      emailAddresses={emailAddresses}
      breachCountByEmailAddress={breachCountByEmailAddress}
      fxaSettingsUrl={fxaSettingsUrl}
      fxaSubscriptionsUrl={fxaSubscriptionsUrl}
      monthlySubscriptionUrl={`${monthlySubscriptionUrl}${additionalSubplatParamsString}`}
      yearlySubscriptionUrl={`${yearlySubscriptionUrl}${additionalSubplatParamsString}`}
      subscriptionBillingAmount={getSubscriptionBillingAmount()}
      enabledFeatureFlags={enabledFeatureFlags}
      experimentData={experimentData["Features"]}
      lastScanDate={lastOneRepScan?.created_at}
      isMonthlySubscriber={isMonthlySubscriber}
      activeTab={activeTab}
      isEligibleForPremium={isEligibleForPremium}
      userAnnouncements={userAnnouncements}
      {...(profileData && { profileData })}
    />
  );
}
