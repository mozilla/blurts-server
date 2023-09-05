/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getOnerepProfileId } from "../../../../../../../db/tables/subscribers";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../api/utils/auth";
import {
  activateProfile,
  optoutProfile,
} from "../../../../../../functions/server/onerep";
import Script from "next/script";
import { isUserSubscribed } from "../../../../../../functions/server/isUserSubscribed";

export function generateMetadata() {
  return {
    title: "Welcome - Results",
  };
}

export default async function UserWelcomeRemove() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    throw new Error("No session");
  }

  if (
    process.env.NEXT_PUBLIC_PREMIUM_ENABLED !== "true" ||
    !(await isUserSubscribed())
  ) {
    return (
      <Script id="redirect">window.location = &quot;results&quot;;</Script>
    );
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  await activateProfile(profileId);
  await optoutProfile(profileId);

  return (
    <main>
      <h2>Profile activated and removal has started</h2>
    </main>
  );
}
