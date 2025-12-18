/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { notFound } from "next/navigation";
import { getAttachedClients } from "../../../../../../utils/fxa";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { isAdmin } from "../../../../../api/utils/auth";
import { logger } from "@sentry/core";
import { captureException } from "@sentry/node";
import { getSubscriberByFxaUid } from "../../../../../../db/tables/subscribers";

export async function getAttachedClientsAction() {
  const session = await getServerSession();

  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV === "production" ||
    typeof session?.user?.subscriber?.fxa_uid !== "string"
  ) {
    return notFound();
  }

  const subscriber = await getSubscriberByFxaUid(
    session.user.subscriber.fxa_uid,
  );
  if (!subscriber) {
    logger.error("admin_fxa_no_subscriber_found");
    return notFound();
  }

  try {
    const attachedClients = await getAttachedClients(
      subscriber.fxa_access_token ?? "",
    );
    return attachedClients;
  } catch (error) {
    captureException(error);
    logger.error("Could not get attached clients", {
      error: JSON.stringify(error),
    });
  }
}
