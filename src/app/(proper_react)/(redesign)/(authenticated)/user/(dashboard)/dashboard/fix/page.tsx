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
import { getScanAndResults } from "../../../../../../../functions/server/moscary";
import { getExperimentationIdFromUserSession } from "../../../../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import { getL10n } from "../../../../../../../functions/l10n/storybookAndJest";
import { getAcceptLangHeaderInServerComponents } from "../../../../../../../functions/l10n/serverComponents";

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

  const experimentationId = await getExperimentationIdFromUserSession(
    session.user,
  );
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: getLocale(getL10n(await getAcceptLangHeaderInServerComponents())),
  });

  const scanData =
    enabledFeatureFlags.includes("Moscary") ||
    experimentData["Features"]["moscary"].enabled
      ? session.user.subscriber.moscary_id
        ? await getScanAndResults(session.user.subscriber.moscary_id)
        : { scan: null, results: [] }
      : await getScanResultsWithBroker(profileId, hasPremium(session.user));
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
