/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "../../../../../../functions/server/getServerSession";
import { notFound } from "next/navigation";
import { isAdmin } from "../../../../../../api/utils/auth";
import ConfigPage from "./onerepConfig";
import { getOnerepProfileId } from "../../../../../../../db/tables/subscribers";

export default async function DevPage() {
  const session = await getServerSession();
  let onerepProfileId = -1;

  const profileIdNonExistent = async () => {
    if (!session?.user.subscriber) return true;
    const profileId = await getOnerepProfileId(session.user.subscriber.id);
    if (!profileId) return true;
    onerepProfileId = profileId;
    return false;
  };

  if (
    !session?.user?.email ||
    (!isAdmin(session.user.email) &&
      session.user.email !== process.env.E2E_TEST_ACCOUNT_EMAIL) ||
    process.env.APP_ENV !== "local" ||
    (await profileIdNonExistent())
  ) {
    return notFound();
  }

  return <ConfigPage onerepProfileId={onerepProfileId} />;
}
