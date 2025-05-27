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
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { getScanResultsWithBroker } from "../../../../../../../../../../db/tables/onerep_scans";
import { isEligibleForPremium } from "../../../../../../../../../functions/universal/premium";
import { logger } from "../../../../../../../../../functions/server/logging";
import { hasPremium } from "../../../../../../../../../functions/universal/user";
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";
import { getScanAndResults } from "../../../../../../../../../functions/server/moscary";

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

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const scanData = enabledFeatureFlags.includes("Moscary")
    ? session.user.subscriber.moscary_id
      ? await getScanAndResults(session.user.subscriber.moscary_id)
      : { scan: null, results: [] }
    : await getScanResultsWithBroker(profileId, hasPremium(session.user));

  return (
    <LeakedPasswordsLayout
      subscriberEmails={subscriberEmails}
      type={type}
      data={{
        countryCode,
        subscriberBreaches: breaches,
        user: session.user,
        latestScanData: scanData,
      }}
      isEligibleForPremium={isEligibleForPremium(countryCode)}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
