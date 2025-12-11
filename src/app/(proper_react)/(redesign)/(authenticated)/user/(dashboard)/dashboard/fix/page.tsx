/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import {
  getNextGuidedStep,
  StepDeterminationData,
} from "../../../../../../../functions/server/getRelevantGuidedSteps";
import { getCountryCode } from "../../../../../../../functions/server/getCountryCode";
import { getSubscriberBreaches } from "../../../../../../../functions/server/getSubscriberBreaches";
import { getOnerepProfileId } from "../../../../../../../../db/tables/subscribers";
import { getScanResultsWithBroker } from "../../../../../../../../db/tables/onerep_scans";
import { getServerSession } from "../../../../../../../functions/server/getServerSession";
import { refreshStoredScanResults } from "../../../../../../../functions/server/refreshStoredScanResults";
import { hasPremium } from "../../../../../../../functions/universal/user";
import { getEnabledFeatureFlags } from "../../../../../../../../db/tables/featureFlags";

export default async function FixPage() {
  const session = await getServerSession();
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const countryCode = getCountryCode(await headers());
  const breaches = await getSubscriberBreaches({
    fxaUid: session.user.subscriber.fxa_uid,
    countryCode,
  });
  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  if (typeof profileId === "number") {
    await refreshStoredScanResults(profileId);
  }
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  const scanData = await getScanResultsWithBroker(
    profileId,
    hasPremium(session.user),
  );
  const stepDeterminationData: StepDeterminationData = {
    countryCode,
    user: session.user,
    subscriberBreaches: breaches,
    latestScanData: scanData,
  };

  const nextStep = getNextGuidedStep(
    stepDeterminationData,
    enabledFeatureFlags,
  );
  redirect(nextStep.href);
}
