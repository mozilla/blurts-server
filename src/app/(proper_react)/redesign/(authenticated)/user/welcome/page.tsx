/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { SignInButton } from "../../../../../(nextjs_migration)/components/client/SignInButton";
import { redirect } from "next/navigation";
import { isEligible } from "../../../../../functions/server/onerep";
import { View } from "./View";

export default async function Onboarding() {
  const session = await getServerSession();
  if (!session) {
    return <SignInButton autoSignIn={true} />;
  }

  const userIsEligible = await isEligible();
  if (!userIsEligible) {
    return redirect("/redesign/user/dashboard/");
  }

  return <View user={session.user} />;
}
