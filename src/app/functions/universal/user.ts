/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { ISO8601DateString } from "../../../utils/parse.js";
import { getBillingAndSubscriptions } from "../../../utils/fxa.js";

// TODO: Add unit test when changing this code:
/* c8 ignore start */
export function hasPremium(user?: Session["user"]): boolean {
  return user?.fxa?.subscriptions?.includes("monitor") ?? false;
}
/* c8 ignore stop */

// TODO: Add unit test when changing this code:
export function canSubscribeToPremium(params: {
  user?: Session["user"];
  countryCode: string;
}): boolean {
  return !hasPremium(params.user) && params.countryCode.toLowerCase() === "us";
}

// TODO: Add unit test when changing this code:
/* c8 ignore start */
export function hasSetupOnerep(
  user?: Session["user"],
): user is Session["user"] & { subscriber: { onerep_profile_id: number } } {
  return typeof user?.subscriber?.onerep_profile_id === "number";
}
/* c8 ignore stop */

// Users need to be at least 13 years or older.
const USER_MIN_AGE = 13;
export function meetsAgeRequirement(dateOfBirth: ISO8601DateString): boolean {
  const dateNow = new Date();
  const dateBirth = new Date(dateOfBirth);
  const dateDelta = new Date(dateNow.valueOf() - dateBirth.valueOf());
  const unixStartDate = new Date(0);
  const age = dateDelta.getUTCFullYear() - unixStartDate.getUTCFullYear();

  return age >= USER_MIN_AGE;
}

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
