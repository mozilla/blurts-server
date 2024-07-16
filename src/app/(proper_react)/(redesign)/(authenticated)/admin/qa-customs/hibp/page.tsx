/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "../../../../../../functions/server/getServerSession";
import { notFound } from "next/navigation";
import { isAdmin } from "../../../../../../api/utils/auth";
import ConfigPage from "./hibpConfig";
// import { getBreaches } from "../../../../../../functions/server/getBreaches.ts";

export default async function DevPage() {
  const session = await getServerSession();
  // const allBreaches = (await getBreaches()).filter(
  //   (breach) =>
  //     !breach.IsRetired &&
  //     !breach.IsSpamList &&
  //     !breach.IsFabricated &&
  //     breach.IsVerified &&
  //     breach.Domain !== "",
  // );

  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV !== "local" ||
    !session?.user?.subscriber?.primary_sha1
  ) {
    return notFound();
  }

  return (
    <ConfigPage
      emailHashPrefix={session.user.subscriber.primary_sha1.slice(0, 6)}
    />
  );
}
