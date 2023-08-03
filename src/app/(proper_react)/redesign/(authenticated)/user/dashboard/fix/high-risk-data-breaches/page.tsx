/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { getUserBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { authOptions } from "../../../../../../../api/utils/auth";
import { redirect } from "next/navigation";
import { View } from "./View";

export default async function HighRiskDataBreaches() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const breaches = await getUserBreaches({ user: session.user });

  //TODO: Add logic to check completion between high risk states
  return <View breaches={breaches} />;
}
