/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { getBillingAndSubscriptions } from "../../../utils/fxa";

/* c8 ignore start */
export async function checkUserHasMonthlySubscription(user: Session["user"]) {
  if (!user.subscriber?.fxa_access_token) {
    console.error("FXA token not set");
    return false;
  }

  if (!process.env.PREMIUM_PLAN_ID_MONTHLY_US) {
    console.error("Monthly Plan ID not set");
    return false;
  }

  const billingAndSubscriptionInfo = await getBillingAndSubscriptions(
    user.subscriber.fxa_access_token,
  );

  if (billingAndSubscriptionInfo === null) {
    return false;
  }

  const monthlyPlanId = process.env.PREMIUM_PLAN_ID_MONTHLY_US;
  const yearlyPlanId = process.env.PREMIUM_PLAN_ID_YEARLY_US ?? "";

  const subscriptions = billingAndSubscriptionInfo.subscriptions;

  const planIds: string[] = [];
  subscriptions.forEach((subscription) => {
    planIds.push(subscription.plan_id);
  });

  if (planIds.includes(yearlyPlanId)) {
    console.error("User has yearly plan set");
    return false;
  }

  return planIds.includes(monthlyPlanId);
}
/* c8 ignore stop */
