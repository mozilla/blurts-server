/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { notFound } from "next/navigation";
import { getAttachedClients } from "../../../../../../utils/fxa";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { isAdmin } from "../../../../../api/utils/auth";
import { logger } from "@sentry/utils";
import { captureException } from "@sentry/node";

export async function getAttachedClientsAction() {
  const session = await getServerSession();

  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV === "production"
  ) {
    return notFound();
  }

  try {
    const attachedClients = await getAttachedClients(
      session?.user.subscriber?.fxa_access_token ?? "",
    );
    return attachedClients;
  } catch (error) {
    captureException(error);
    logger.error("Could not get attached clients", {
      error: JSON.stringify(error),
    });
  }
}
