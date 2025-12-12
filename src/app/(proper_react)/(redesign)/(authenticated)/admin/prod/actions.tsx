/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { notFound } from "next/navigation";
import { getSubscribersByHashes } from "../../../../../../db/tables/subscribers";
import { isAdmin } from "../../../../../api/utils/auth";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { isMozMail } from "../../../../../functions/universal/isMozMail";

export async function lookupFxaUid(emailHash: string) {
  const session = await getServerSession();
  if (!session?.user?.email || !isAdmin(session.user.email)) {
    return notFound();
  }

  const subscriber = await getSubscribersByHashes([emailHash]);
  if (
    // On production, only allow looking up Mozilla email addresses
    process.env.APP_ENV !== "stage" &&
    process.env.APP_ENV !== "local" &&
    !isMozMail(subscriber[0].primary_email)
  ) {
    return notFound();
  }
  if (subscriber.length) {
    return subscriber[0].fxa_uid;
  }
}
