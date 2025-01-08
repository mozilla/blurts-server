/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

import { logger } from "../../../../functions/server/logging";
import { getSubscriberByFxaUid } from "../../../../../db/tables/subscribers";
import { getUserEmails } from "../../../../../db/tables/emailAddresses";
import { sendVerificationEmail } from "../../../utils/email";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../functions/l10n/serverComponents";
import { initEmail } from "../../../../../utils/email";

interface EmailResendRequest {
  emailId: string;
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());

  if (typeof token?.subscriber?.fxa_uid === "string") {
    try {
      const { emailId }: EmailResendRequest = await req.json();
      const parsedEmailId = Number.parseInt(emailId, 10);
      if (Number.isNaN(parsedEmailId)) {
        throw new Error("No valid email address given.");
      }
      const subscriber = await getSubscriberByFxaUid(token.subscriber?.fxa_uid);
      if (!subscriber) {
        throw new Error("No subscriber found for current session.");
      }
      const existingEmail = await getUserEmails(subscriber.id);

      const filteredEmail = existingEmail.filter(
        (a) => a.email === emailId && a.subscriber_id === subscriber.id,
      );

      if (!filteredEmail) {
        return NextResponse.json(
          {
            success: false,
            message: l10n.getString("user-verify-token-error"),
          },
          { status: 500 },
        );
      }

      await initEmail();
      await sendVerificationEmail(subscriber, parsedEmailId);

      return NextResponse.json({
        success: true,
        message: "Sent the verification email",
      });
    } catch (e) {
      logger.error(e);
      if (
        e instanceof Error &&
        e.message === "error-email-validation-pending"
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Verification email recently sent, try again later",
          },
          { status: 429 },
        );
      }
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
