/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

import { logger } from "../../../../functions/server/logging";
import {
  getSubscriberByFxaUid,
  deleteResolutionsWithEmail,
} from "../../../../../db/tables/subscribers";
import {
  removeOneSecondaryEmail,
  getEmailById,
} from "../../../../../db/tables/emailAddresses";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../functions/l10n/serverComponents";
import { config } from "../../../../../config";

interface EmailDeleteRequest {
  emailId: number;
}

export async function POST(req: NextRequest) {
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());
  const token = await getToken({ req });

  if (typeof token?.subscriber?.fxa_uid === "string") {
    try {
      const { emailId }: EmailDeleteRequest = await req.json();
      const subscriber = await getSubscriberByFxaUid(token.subscriber?.fxa_uid);
      if (!subscriber) {
        throw new Error("No subscriber found for current session.");
      }
      const existingEmail = await getEmailById(emailId);

      if (existingEmail?.subscriber_id !== subscriber.id) {
        return NextResponse.json(
          {
            success: false,
            message: l10n.getString("error-not-subscribed"),
          },
          { status: 400 },
        );
      }

      await removeOneSecondaryEmail(emailId, subscriber.id);
      await deleteResolutionsWithEmail(
        existingEmail.subscriber_id,
        existingEmail.email,
      );
      return NextResponse.redirect(config.serverUrl + "/user/settings", 301);
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
