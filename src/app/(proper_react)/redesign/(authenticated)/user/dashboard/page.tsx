/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import {
  canSubscribeToPremium,
  hasSetupOnerep,
} from "../../../../../functions/universal/user";
import { redirect } from "next/navigation";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { View } from "./View";
import { getUserBreaches } from "../../../../../functions/server/getUserBreaches";
import { getLocale } from "../../../../../functions/server/l10n";

export default async function DashboardPage() {
  const session = await getServerSession();
  const headersList = headers();
  const countryCode = getCountryCode(headersList);

  if (
    !hasSetupOnerep(session?.user) &&
    canSubscribeToPremium({ user: session?.user, countryCode: countryCode })
  ) {
    return redirect("/user/welcome/");
  }

  if (!session?.user) {
    return redirect("/");
  }

  const breaches = await getUserBreaches({ user: session.user });
  const locale = getLocale();

  return <View user={session.user} userBreaches={breaches} locale={locale} />;
}
