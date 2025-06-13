/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import {
  getPremiumSubscriptionUrl,
  type SubscriptionPeriod,
  subscriptionPlanIds,
} from "../../../functions/server/getPremiumSubscriptionInfo";
import { getEnabledFeatureFlags } from "../../../../db/tables/featureFlags";
import { logger } from "../../../functions/server/logging";

type RequestParams = {
  params: Promise<{
    slug: string;
  }>;
};

// The intent of this route is to forward external links to a matching SubPlat
// subscription plan: If the slug is invalid we fallback to Monitors
// publicly available subscription plans page.
export async function GET(req: NextRequest, { params }: RequestParams) {
  const { slug: subscriptionPlanId } = await params;
  logger.info("link_subscribe_start", { subscriptionPlanId });

  if (!subscriptionPlanIds.includes(subscriptionPlanId as SubscriptionPeriod)) {
    logger.info("link_subscribe_fallback", { subscriptionPlanId });
    return NextResponse.redirect("/subscription-plans", 302);
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    isSignedOut: true,
  });
  const subscriptionUrl = getPremiumSubscriptionUrl({
    type: subscriptionPlanId as SubscriptionPeriod,
    enabledFeatureFlags,
  });

  // restore incoming search parameters
  const redirectUrl = new URL(subscriptionUrl);
  const searchParams = req.nextUrl.searchParams;
  for (const [key, value] of searchParams.entries()) {
    redirectUrl.searchParams.append(key, value);
  }

  logger.info("link_subscribe_redirect", {
    subscriptionPlanId,
    redirectUrl,
  });

  return NextResponse.redirect(redirectUrl.toString(), 302);
}
