/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { getBillingAndSubscriptions } from "../../../utils/fxa";
import { getSubscriberByFxaUid } from "../../../db/tables/subscribers";
import { logger } from "./logging";

/* c8 ignore start */
export type SubscriptionType = "yearly" | "monthly" | "bundle";

export async function getUserSubscriptionType(
  user: Session["user"],
): Promise<SubscriptionType | undefined> {
  const fxaUid = user.subscriber?.fxa_uid;
  if (!fxaUid) {
    console.error("FXA UID not set");
    return;
  }

  const subscriber = await getSubscriberByFxaUid(fxaUid);
  if (!subscriber?.fxa_access_token) {
    logger.error("FXA access token not set");
    return;
  }

  const billingAndSubscriptionInfo = await getBillingAndSubscriptions(
    subscriber.fxa_access_token,
  );
  if (!billingAndSubscriptionInfo) {
    logger.error("Billing and subscription info is null");
    return;
  }

  const monthlyPlanId = process.env.PREMIUM_PLAN_ID_MONTHLY_US;
  const yearlyPlanId = process.env.PREMIUM_PLAN_ID_YEARLY_US;
  const bundlePlanId = process.env.SUBPLAT_BUNDLE_PRICE_ID;

  if (!monthlyPlanId || !yearlyPlanId || !bundlePlanId) {
    logger.error("One or more plan IDs are not set in environment variables");
    return;
  }

  const planIds = billingAndSubscriptionInfo.subscriptions.map(
    (sub) => sub.plan_id,
  );

  if (planIds.includes(yearlyPlanId)) return "yearly";
  if (planIds.includes(bundlePlanId)) return "bundle";
  if (planIds.includes(monthlyPlanId)) return "monthly";

  return;
}
/* c8 ignore stop */
