/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { notFound } from "next/navigation";
import { getSubscribersByHashes } from "../../../../../../db/tables/subscribers";
import { isAdmin } from "../../../../../api/utils/auth";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { config } from "../../../../../../config";

export async function lookupFxaUid(emailHash: string) {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    config.appEnv === "production"
  ) {
    return notFound();
  }

  const subscriber = await getSubscribersByHashes([emailHash]);
  if (subscriber.length) {
    return subscriber[0].fxa_uid;
  }
}
