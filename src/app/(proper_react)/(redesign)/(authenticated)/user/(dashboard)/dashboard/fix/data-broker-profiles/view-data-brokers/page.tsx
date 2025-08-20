/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";
import { getScanResultsWithBroker } from "../../../../../../../../../../db/tables/onerep_scans";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { ViewDataBrokersView } from "./View";
import { StepDeterminationData } from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getSubscriberBreaches";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../../../../../functions/l10n/serverComponents";
import { hasPremium } from "../../../../../../../../../functions/universal/user";
import { getEnabledFeatureFlags } from "../../../../../../../../../../db/tables/featureFlags";
import { getScanAndResults } from "../../../../../../../../../functions/server/moscary";
import { getExperimentationIdFromUserSession } from "../../../../../../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../../../../../functions/universal/getLocale";

export default async function ViewDataBrokers() {
  const session = await getServerSession();

  if (!session?.user?.subscriber?.id) {
    redirect("/user/dashboard");
  }

  const countryCode = getCountryCode(await headers());

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

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const latestScan =
    enabledFeatureFlags.includes("Moscary") ||
    experimentData["Features"]["moscary"].enabled
      ? session.user.subscriber.moscary_id
        ? await getScanAndResults(session.user.subscriber.moscary_id)
        : undefined
      : await getScanResultsWithBroker(profileId, hasPremium(session.user));

  const data: StepDeterminationData = {
    countryCode,
    user: session.user,
    latestScanData: latestScan ?? null,
    subscriberBreaches: await getSubscriberBreaches({
      fxaUid: session.user.subscriber.fxa_uid,
      countryCode,
    }),
  };
  const subscriberEmails = await getSubscriberEmails(session.user);

  return (
    <ViewDataBrokersView
      data={data}
      subscriberEmails={subscriberEmails}
      l10n={getL10n(await getAcceptLangHeaderInServerComponents())}
      enabledFeatureFlags={enabledFeatureFlags}
    />
  );
}
