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

type SubscriptionPeriod = "monthly" | "yearly" | "bundle";

export type BundleBillingAmount = {
  monthly: number;
  individual: number;
};

interface GetPremiumSubscriptionUrlParams {
  type: SubscriptionPeriod;
  enabledFeatureFlags: FeatureFlagName[];
}

export function getPremiumSubscriptionUrl({
  type,
  enabledFeatureFlags,
}: GetPremiumSubscriptionUrlParams): string {
  const bundleOfferingId = process.env.SUBPLAT_BUNDLE_OFFERING_ID as string;
  const subscriptionUrlSp3 = process.env.SUBPLAT_SUBSCRIPTIONS_URL as string;
  if (enabledFeatureFlags.includes("SubPlat3")) {
    if (type === "bundle") {
      return `${subscriptionUrlSp3}/${bundleOfferingId}/landing?spVersion=3`;
    }
    const monitorOfferingId = process.env.SUBPLAT_MONITOR_OFFERING_ID as string;
    return `${subscriptionUrlSp3}/${monitorOfferingId}/${type}/landing`;
  }

  const subscriptionUrlSp2 = process.env.FXA_SUBSCRIPTIONS_URL as string;
  const productId = process.env.PREMIUM_PRODUCT_ID as string;
  let planId = "";
  switch (type) {
    case "monthly":
      planId = process.env.PREMIUM_PLAN_ID_MONTHLY_US as string;
      break;
    case "yearly":
      planId = process.env.PREMIUM_PLAN_ID_YEARLY_US as string;
      break;
    case "bundle":
      return `${subscriptionUrlSp3}/${bundleOfferingId}/landing?spVersion=2`;
  }

  return `${subscriptionUrlSp2}/products/${productId}?plan=${planId}`;
}

type SubscriptionBillingAmount = Record<
  Exclude<SubscriptionPeriod, "bundle">,
  number
> &
  Record<"bundle", BundleBillingAmount>;

export function getSubscriptionBillingAmount(): SubscriptionBillingAmount {
  return {
    yearly: parseFloat(
      process.env.SUBSCRIPTION_BILLING_AMOUNT_YEARLY_US as string,
    ),
    monthly: parseFloat(
      process.env.SUBSCRIPTION_BILLING_AMOUNT_MONTHLY_US as string,
    ),
    bundle: {
      individual: parseFloat(
        process.env
          .SUBSCRIPTION_BILLING_AMOUNT_BUNDLE_INDIVIDUAL_MONTHLY_US as string,
      ),
      monthly: parseFloat(
        process.env.SUBSCRIPTION_BILLING_AMOUNT_BUNDLE_MONTHLY_US as string,
      ),
    },
  };
}
