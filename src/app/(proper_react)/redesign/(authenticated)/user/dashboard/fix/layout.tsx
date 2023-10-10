/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../api/utils/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { getOnerepProfileId } from "../../../../../../../db/tables/subscribers";
import { canSubscribeToPremium } from "../../../../../../functions/universal/user";
import { getCountryCode } from "../../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const headersList = headers();
  const countryCode = getCountryCode(headersList);
  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  if (
    !profileId &&
    canSubscribeToPremium({ user: session?.user, countryCode: countryCode })
  ) {
    return redirect("/redesign/user/welcome/");
  }

  return <>{children}</>;
}
