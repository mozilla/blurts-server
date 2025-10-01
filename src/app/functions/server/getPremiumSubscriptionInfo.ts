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

export const subscriptionPlanIds = ["monthly", "yearly", "bundle"] as const;

export type SubscriptionPeriod = (typeof subscriptionPlanIds)[number];

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
  if (enabledFeatureFlags.includes("SubPlat3")) {
    const subscriptionUrlSp3 = process.env.SUBPLAT_SUBSCRIPTIONS_URL as string;
    if (type === "bundle") {
      const bundleOfferingId = process.env.SUBPLAT_BUNDLE_OFFERING_ID as string;
      return `${subscriptionUrlSp3}/${bundleOfferingId}/landing`;
    }
    const monitorOfferingId = process.env.SUBPLAT_MONITOR_OFFERING_ID as string;
    return `${subscriptionUrlSp3}/${monitorOfferingId}/${type}/landing`;
  }

  const subscriptionUrlSp2 = process.env.FXA_SUBSCRIPTIONS_URL as string;
  const productId = process.env.PREMIUM_PRODUCT_ID as string;
  let planId = "";
  switch (type) {
    case "monthly": {
      planId = process.env.PREMIUM_PLAN_ID_MONTHLY_US as string;
      break;
    }
    case "yearly": {
      planId = process.env.PREMIUM_PLAN_ID_YEARLY_US as string;
      break;
    }
    case "bundle": {
      const productId = process.env.SUBPLAT_BUNDLE_PRODUCT_ID as string;
      const planId = process.env.SUBPLAT_BUNDLE_PRICE_ID as string;
      return `${subscriptionUrlSp2}/products/${productId}?plan=${planId}`;
    }
  }

  return `${subscriptionUrlSp2}/products/${productId}?plan=${planId}`;
}

type SubscriptionBillingAmount = Record<
  Exclude<SubscriptionPeriod, "bundle" | "yearly">,
  number
> &
  Record<"bundle", BundleBillingAmount>;

export function getSubscriptionBillingAmount(): SubscriptionBillingAmount {
  return {
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
