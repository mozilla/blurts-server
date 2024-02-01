/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getLatestOnerepScanResults } from "../../../../../../../../../../db/tables/onerep_scans";
import { authOptions } from "../../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../../db/tables/subscribers";
import { ViewDataBrokersView } from "./View";
import { StepDeterminationData } from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getCountryCode } from "../../../../../../../../../functions/server/getCountryCode";
import { getSubscriberBreaches } from "../../../../../../../../../functions/server/getUserBreaches";
import { getSubscriberEmails } from "../../../../../../../../../functions/server/getSubscriberEmails";
import { getL10n } from "../../../../../../../../../functions/server/l10n";

export default async function ViewDataBrokers() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.subscriber?.id) {
    redirect("/user/dashboard/");
  }

  const profileId = await getOnerepProfileId(session.user.subscriber.id);
  const latestScan = await getLatestOnerepScanResults(profileId);
  const data: StepDeterminationData = {
    countryCode: getCountryCode(headers()),
    user: session.user,
    latestScanData: latestScan ?? null,
    subscriberBreaches: await getSubscriberBreaches(session.user),
  };
  const subscriberEmails = await getSubscriberEmails(session.user);

  return (
    <ViewDataBrokersView
      data={data}
      subscriberEmails={subscriberEmails}
      l10n={getL10n()}
    />
  );
}
