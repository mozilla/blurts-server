/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
import {
  getNextGuidedStep,
  StepDeterminationData,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import {
  getMockedScanResults,
  getMockedScanResultsWithBrokerUnderMaintenance,
  getScanResultsWithBroker,
  getScanResultsWithBrokerUnderMaintenance,
} from "../../../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getSubscriberBreaches";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { RemovalUnderMaintenanceView } from "./RemovalUnderMaintenanceView";
import { hasPremium } from "../../../../../../../../../functions/universal/user";
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";

export default async function RemovalUnderMaintenance() {
  const session = await getServerSession();
  const countryCode = getCountryCode(await headers());

  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  if (
    !hasPremium(session.user) ||
    !enabledFeatureFlags.includes("EnableRemovalUnderMaintenanceStep")
  ) {
    redirect("/user/dashboard");
  }

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const useMockedScans =
    enabledFeatureFlags.includes("CustomDataBrokers") &&
    process.env.NODE_ENV !== "production";

  const scanResultsWithRemovalUnderMaintenance = useMockedScans
    ? await getMockedScanResultsWithBrokerUnderMaintenance()
    : await getScanResultsWithBrokerUnderMaintenance(profileId);

  const scanResults = useMockedScans
    ? await getMockedScanResults(profileId)
    : await getScanResultsWithBroker(profileId, hasPremium(session.user));

  const data: StepDeterminationData = {
    countryCode,
    user: session.user,
    latestScanData: scanResults ?? null,
    subscriberBreaches: await getSubscriberBreaches({
      fxaUid: session.user.subscriber.fxa_uid,
      countryCode,
    }),
  };

  const getNextStep = getNextGuidedStep(
    data,
    enabledFeatureFlags,
    "DataBrokerManualRemoval",
  );

  if (
    scanResultsWithRemovalUnderMaintenance?.results.length === 0 ||
    !scanResultsWithRemovalUnderMaintenance
  ) {
    redirect(getNextStep.href);
  }

  const subscriberEmails = await getSubscriberEmails(session.user);

  return (
    <RemovalUnderMaintenanceView
      stepDeterminationData={data}
      data={scanResultsWithRemovalUnderMaintenance}
      subscriberEmails={subscriberEmails}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
