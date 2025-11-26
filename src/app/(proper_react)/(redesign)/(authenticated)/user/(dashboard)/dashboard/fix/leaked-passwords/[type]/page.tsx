/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getSubscriberBreaches";
import { LeakedPasswordsLayout } from "../LeakedPasswordsLayout";
import {
  LeakedPasswordsTypes,
  leakedPasswordTypes,
} from "../leakedPasswordsData";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { isEligibleForPremium } from "../../../../../../../../../functions/universal/premium";
import { logger } from "../../../../../../../../../functions/server/logging";
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";

interface LeakedPasswordsProps {
  params: Promise<{
    type: LeakedPasswordsTypes;
  }>;
}

export default async function LeakedPasswords(props: LeakedPasswordsProps) {
  const params = await props.params;
  const session = await getServerSession();
  if (!session?.user?.subscriber?.id) {
    logger.error("user_not_subscribed", {
      page: "leaked-passwords",
    });
    return redirect("/");
  }
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });
  const countryCode = getCountryCode(await headers());
  const breaches = await getSubscriberBreaches({
    fxaUid: session.user.subscriber.fxa_uid,
    countryCode,
  });
  const subscriberEmails = await getSubscriberEmails(session.user);

  const { type } = params;
  if (!leakedPasswordTypes.includes(type)) {
    redirect("/user/dashboard");
  }
  return (
    <LeakedPasswordsLayout
      subscriberEmails={subscriberEmails}
      type={type}
      data={{
        countryCode,
        subscriberBreaches: breaches,
        user: session.user,
      }}
      isEligibleForPremium={isEligibleForPremium(countryCode)}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
