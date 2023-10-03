/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { ViewDataBrokersView } from "./View";

export default async function ViewDataBrokers() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.subscriber?.id) {
    redirect("/redesign/user/dashboard/");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const latestScan = await getLatestOnerepScanResults(profileId);

  return <ViewDataBrokersView scanData={latestScan} />;
}
