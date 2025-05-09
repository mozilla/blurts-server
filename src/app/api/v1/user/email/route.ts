/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

import { getSubscriberByFxaUid } from "../../../../../db/tables/subscribers";
import { addSubscriberUnverifiedEmailHash } from "../../../../../db/tables/emailAddresses";

import { sendVerificationEmail } from "../../../utils/email";

import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../functions/l10n/serverComponents";
import { initEmail } from "../../../../../utils/email";
import {
  CONST_MAX_NUM_ADDRESSES,
  CONST_MAX_NUM_ADDRESSES_PLUS,
} from "../../../../../constants";
import { validateEmailAddress } from "../../../../../utils/emailAddress";
import { hasPremium } from "../../../../functions/universal/user";

interface EmailAddRequest {
  email: string;
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());

  if (typeof token?.subscriber?.fxa_uid === "string") {
    try {
      const body: EmailAddRequest = await req.json();
      const subscriber = await getSubscriberByFxaUid(token.subscriber?.fxa_uid);
      if (!subscriber) {
        throw new Error("No subscriber found for current session.");
      }
      const emailCount = 1 + (subscriber.email_addresses?.length ?? 0); // primary + verified + unverified emails
      const validatedEmail = validateEmailAddress(body.email);

      if (validatedEmail === null) {
        return NextResponse.json(
          {
            success: false,
            message: l10n.getString("user-add-invalid-email"),
          },
          { status: 400 },
        );
      }

      const maxNumEmailAddresses = hasPremium(subscriber)
        ? CONST_MAX_NUM_ADDRESSES_PLUS
        : CONST_MAX_NUM_ADDRESSES;
      if (emailCount >= maxNumEmailAddresses) {
        return NextResponse.json(
          {
            success: false,
            message: l10n.getString("user-add-too-many-emails"),
          },
          { status: 400 },
        );
      }

      // checkForDuplicateEmail
      const emailLowerCase = validatedEmail.email.toLowerCase();
      if (emailLowerCase === subscriber.primary_email.toLowerCase()) {
        return NextResponse.json(
          {
            success: false,
            message: l10n.getString("user-add-duplicate-email"),
          },
          { status: 400 },
        );
      }

      for (const secondaryEmail of subscriber.email_addresses) {
        if (emailLowerCase === secondaryEmail.email.toLowerCase()) {
          return NextResponse.json(
            {
              success: false,
              message: l10n.getString("user-add-duplicate-email"),
            },
            { status: 400 },
          );
        }
      }

      const unverifiedSubscriber = await addSubscriberUnverifiedEmailHash(
        subscriber,
        validatedEmail.email,
      );

      await initEmail();
      await sendVerificationEmail(subscriber, unverifiedSubscriber.id);

      return NextResponse.json({
        success: true,
        newEmailCount: emailCount + 1,
        message: "Sent the verification email",
      });
    } catch (e: unknown) {
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
    // Not Signed in, redirect to home
    return NextResponse.redirect(process.env.SERVER_URL ?? "/", 301);
  }
}
