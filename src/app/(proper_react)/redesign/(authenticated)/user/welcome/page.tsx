/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { SignInButton } from "../../../../../(nextjs_migration)/components/client/SignInButton";
import { redirect } from "next/navigation";
import { isEligibleForFreeScan } from "../../../../../functions/server/onerep";
import { View } from "./View";
import { getAllBreachesCount } from "../../../../../../db/tables/breaches";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { authOptions } from "../../../../../api/utils/auth";

export default async function Onboarding() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <SignInButton autoSignIn={true} />;
  }

  const userIsEligible = await isEligibleForFreeScan(
    session.user,
    getCountryCode(headers()),
  );
  if (!userIsEligible) {
    return redirect("/");
  }

  const allBreachesCount = await getAllBreachesCount();

  return (
    <View
      user={session.user}
      dataBrokerCount={parseInt(
        process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
        10,
      )}
      breachesTotalCount={allBreachesCount}
    />
  );
}
