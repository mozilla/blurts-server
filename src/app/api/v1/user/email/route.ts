/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import AppConstants from "../../../../../appConstants";

import {
  getSubscriberByEmail,
  deleteResolutionsWithEmail,
} from "../../../../../db/tables/subscribers";
import {
  addSubscriberUnverifiedEmailHash,
  removeOneSecondaryEmail,
  getEmailById,
} from "../../../../../db/tables/emailAddresses.js";

import { sendVerificationEmail } from "../../../util/email";

import { validateEmailAddress } from "../../../../../utils/emailAddress";
import { getL10n } from "../../../../functions/server/l10n";
const l10n = getL10n();

interface EmailAddRequest {
  email: string;
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (token) {
    try {
      const body: EmailAddRequest = await req.json();
      const subscriber = await getSubscriberByEmail(token.email);
      const emailCount = 1 + (subscriber.email_addresses?.length ?? 0); // primary + verified + unverified emails
      const validatedEmail = validateEmailAddress(body.email);

      if (validatedEmail === null) {
        return NextResponse.json({
          success: false,
          status: 400,
          message: l10n.getString("user-add-invalid-email"),
        });
      }

      if (emailCount >= AppConstants.MAX_NUM_ADDRESSES) {
        return NextResponse.json({
          success: false,
          status: 400,
          message: l10n.getString("user-add-too-many-emails"),
        });
      }

      // checkForDuplicateEmail
      const emailLowerCase = validatedEmail.email.toLowerCase();
      if (emailLowerCase === subscriber.primary_email.toLowerCase()) {
        return NextResponse.json({
          success: false,
          status: 400,
          message: l10n.getString("user-add-duplicate-email"),
        });
      }

      for (const secondaryEmail of subscriber.email_addresses) {
        if (emailLowerCase === secondaryEmail.email.toLowerCase()) {
          return NextResponse.json({
            success: false,
            status: 400,
            message: l10n.getString("user-add-duplicate-email"),
          });
        }
      }

      const unverifiedSubscriber = await addSubscriberUnverifiedEmailHash(
        subscriber,
        validatedEmail.email
      );

      await sendVerificationEmail(subscriber, unverifiedSubscriber.id);

      return NextResponse.json({
        success: true,
        newEmailCount: emailCount + 1,
        message: "Sent the verification email",
      });
      return NextResponse.json("ok");
    } catch (e) {
      console.error(e);
      if (e.message === "error-email-validation-pending") {
        return NextResponse.json(
          {
            success: false,
            message: "Verification email recently sent, try again later",
          },
          { status: 429 }
        );
      }
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(AppConstants.SERVER_URL, 301);
  }
}

interface EmailDeleteRequest {
  emailId: string;
}

export async function DELETE(req: NextRequest) {
  const token = await getToken({ req });

  if (token) {
    try {
      const { emailId }: EmailDeleteRequest = await req.json();
      const subscriber = await getSubscriberByEmail(token.email);
      const existingEmail = await getEmailById(emailId);

      if (existingEmail?.subscriber_id !== subscriber.id) {
        return NextResponse.json({
          success: false,
          status: 400,
          message: l10n.getString("error-not-subscribed"),
        });
      }

      await removeOneSecondaryEmail(emailId);
      deleteResolutionsWithEmail(
        existingEmail.subscriber_id,
        existingEmail.email
      );
      return NextResponse.redirect("/user/settings", 301);
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(AppConstants.SERVER_URL, 301);
  }
}
