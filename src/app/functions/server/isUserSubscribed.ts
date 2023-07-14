/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { authOptions } from "../../api/utils/auth";

type FxaSubscriptionResponse = {
  subscriptions: Array<{
    product_id: string;
    plan_id: string;
    status: "active";
  }>;
};

export const isUserSubscribed = async () => {
  // Fetch list of subscriptions.
  let subscriptions: FxaSubscriptionResponse;

  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    throw new Error("No session");
  }

  const bearerToken = session?.user.subscriber?.fxa_access_token;
  if (bearerToken) {
    const url = `${
      process.env.OAUTH_API_URI ?? ""
    }/oauth/mozilla-subscriptions/customer/billing-and-subscriptions`;
    const result = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${bearerToken}`,
      },
    });
    if (result.ok) {
      subscriptions = await result.json();
      for (const subscription of subscriptions.subscriptions) {
        if (
          subscription.product_id === process.env.PREMIUM_PRODUCT_ID &&
          subscription.plan_id === process.env.PREMIUM_PLAN_ID_US &&
          subscription.status === "active"
        ) {
          return true;
        }
      }
      return false;
    }
  } else {
    console.error("User has no bearer token");
  }
};
