/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

interface GetPremiumSubscriptionUrlParams {
  type: "monthly" | "yearly";
}

function getPremiumSubscriptionUrl({
  type,
}: GetPremiumSubscriptionUrlParams): string {
  const subscriptionUrl = process.env.FXA_SUBSCRIPTIONS_URL as string;
  const productId = process.env.PREMIUM_PRODUCT_ID as string;
  const planId = (
    type === "monthly"
      ? process.env.PREMIUM_PLAN_ID_MONTHLY_US
      : process.env.PREMIUM_PLAN_ID_YEARLY_US
  ) as string;

  return `${subscriptionUrl}/products/${productId}?plan=${planId}`;
}

export default getPremiumSubscriptionUrl;
