/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { HighRiskBreachLayout } from "../HighRiskBreachLayout";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { redirect } from "next/navigation";
import {
  getSubscriberBreaches,
  guidedExperienceBreaches,
} from "../../../../../../../../functions/server/getUserBreaches";

export default async function pinDataBreach() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  const breaches = await getSubscriberBreaches(session.user);
  const guidedExperience = guidedExperienceBreaches(breaches);

  return (
    <div>
      <HighRiskBreachLayout typeOfBreach="PIN" breachData={guidedExperience} />
    </div>
  );
}
