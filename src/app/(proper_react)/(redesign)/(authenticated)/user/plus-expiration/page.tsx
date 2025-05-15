/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound } from "next/navigation";
import { getSubscriberByFxaUid } from "../../../../../../db/tables/subscribers";
import { AutoSignIn } from "../../../../../components/client/AutoSignIn";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { View } from "./View";
import { logger } from "../../../../../functions/server/logging";
import { checkChurnCouponCode } from "../../../../../functions/server/applyCoupon";
import { applyRenewalCoupon } from "./actions";
import { getUpcomingChurns } from "../../../../../../db/tables/subscriber_churns";

export default async function PlusExpirationPage() {
  const session = await getServerSession();
  if (!session) {
    return <AutoSignIn />;
  }

  if (typeof session.user.subscriber?.fxa_uid !== "string") {
    logger.warn("plus_expiration_no_subscriber_in_session");
    return notFound();
  }

  const subscriber = await getSubscriberByFxaUid(
    session.user.subscriber?.fxa_uid,
  );
  if (!subscriber) {
    logger.warn("plus_expiration_no_subscriber_found_for_session");
    return notFound();
  }

  const couponCheckResult = await checkChurnCouponCode(subscriber);
  const expiringSubscriptions = await getUpcomingChurns();

  return (
    <View
      subscriber={subscriber}
      couponCheckResult={couponCheckResult}
      applyCouponAction={applyRenewalCoupon}
      manageSubscriptionsUrl={process.env.FXA_SUBSCRIPTIONS_URL!}
      isOnExpirationList={
        typeof expiringSubscriptions.find(
          (expiringSubscription) =>
            expiringSubscription.userid === subscriber.fxa_uid,
        ) !== "undefined"
      }
    />
  );
}
