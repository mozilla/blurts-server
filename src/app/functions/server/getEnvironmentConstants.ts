/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FeatureFlagName } from "../../../db/tables/featureFlags";
import { getSubscriptionBillingAmount, getPremiumSubscriptionUrl } from "./getPremiumSubscriptionInfo";


type SubscriptionInfo = { url: string; billingAmount: number; };
export type EnvironmentConstants = {
  subscriptionInfo: {
    monthly: SubscriptionInfo;
    yearly: SubscriptionInfo;
  };
  fxaSettingsUrl: string;
};
export function getEnvironmentConstants(enabledFeatureFlags: FeatureFlagName[]): EnvironmentConstants {
  const billingAmounts = getSubscriptionBillingAmount();

  return {
    subscriptionInfo: {
      monthly: {
        url: getPremiumSubscriptionUrl({ type: "monthly", enabledFeatureFlags: enabledFeatureFlags }),
        billingAmount: billingAmounts.monthly,
      },
      yearly: {
        url: getPremiumSubscriptionUrl({ type: "yearly", enabledFeatureFlags: enabledFeatureFlags }),
        billingAmount: billingAmounts.monthly,
      },
    },
    fxaSettingsUrl: process.env.FXA_SETTINGS_URL!,
  };
}
