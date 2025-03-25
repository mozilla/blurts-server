/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FeatureFlagName } from "../../../db/tables/featureFlags";

// We need access to environment variables that are only available on the
// server-side, because they're set by the server environment (but in
// Storybook this is fine to run; the URLs don't need to work there):
if (!process.env.STORYBOOK) {
  import("./notInClientComponent");
}

type SubscriptionPeriod = "monthly" | "yearly";

interface GetPremiumSubscriptionUrlParams {
  type: SubscriptionPeriod;
  enabledFeatureFlags: FeatureFlagName[];
}

export function getPremiumSubscriptionUrl({
  type,
  enabledFeatureFlags,
}: GetPremiumSubscriptionUrlParams): string {
  if (enabledFeatureFlags.includes("SubPlat3")) {
    const subscriptionUrl = process.env.SUBPLAT_SUBSCRIPTIONS_URL as string;
    const offeringId = process.env.SUBPLAT_MONITOR_OFFERING_ID as string;
    return `${subscriptionUrl}/${offeringId}/${type}/landing`;
  }

  const subscriptionUrl = process.env.FXA_SUBSCRIPTIONS_URL as string;
  const productId = process.env.PREMIUM_PRODUCT_ID as string;
  const planId = (
    type === "monthly"
      ? process.env.PREMIUM_PLAN_ID_MONTHLY_US
      : process.env.PREMIUM_PLAN_ID_YEARLY_US
  ) as string;

  return `${subscriptionUrl}/products/${productId}?plan=${planId}`;
}

type SubscriptionBillingAmount = Record<SubscriptionPeriod, number>;

export function getSubscriptionBillingAmount(): SubscriptionBillingAmount {
  return {
    yearly: parseFloat(
      process.env.SUBSCRIPTION_BILLING_AMOUNT_YEARLY_US as string,
    ),
    monthly: parseFloat(
      process.env.SUBSCRIPTION_BILLING_AMOUNT_MONTHLY_US as string,
    ),
  };
}
