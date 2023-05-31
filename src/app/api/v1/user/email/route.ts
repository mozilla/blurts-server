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
  getUserEmails,
  resetUnverifiedEmailAddress,
  addSubscriberUnverifiedEmailHash,
  removeOneSecondaryEmail,
  getEmailById,
  verifyEmailHash,
} from "../../../../../db/tables/emailAddresses.js";

import { validateEmailAddress } from "../../../../../utils/emailAddress";
import { sendEmail, getVerificationUrl } from "../../../../../utils/email";
import { getL10n } from "../../../../functions/server/l10n";
const l10n = getL10n();

function checkForDuplicateEmail(sessionUser, email: string) {
  const emailLowerCase = email.toLowerCase();
  if (emailLowerCase === sessionUser.primary_email.toLowerCase()) {
    return NextResponse.json({
      success: false,
      status: 400,
      message: l10n.getString("user-add-duplicate-email"),
    });
  }

  for (const secondaryEmail of sessionUser.email_addresses) {
    if (emailLowerCase === secondaryEmail.email.toLowerCase()) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: l10n.getString("user-add-duplicate-email"),
      });
    }
  }
}

async function sendVerificationEmail(user, emailId) {
  try {
    const unverifiedEmailAddressRecord = await resetUnverifiedEmailAddress(
      emailId
    );
    const recipientEmail = unverifiedEmailAddressRecord.email;
    const data = {
      recipientEmail,
      ctaHref: getVerificationUrl(unverifiedEmailAddressRecord),
      utmCampaign: "email_verify",
      heading: l10n.getString("email-verify-heading"),
      subheading: l10n.getString("email-verify-subhead"),
      partial: { name: "verify" },
    };
    await sendEmail(
      recipientEmail,
      l10n.getString("email-subject-verify"),
      getTemplate(data, verifyPartial)
    );
  } catch (err) {
    if (err.message === "error-email-validation-pending") {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Verification email recently sent, try again later",
      });
    } else {
      throw err;
    }
  }
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (token) {
    try {
      const reqBody = await req.json();
      const subscriber = await getSubscriberByEmail(token.email);
      const emailCount = 1 + (subscriber.email_addresses?.length ?? 0); // primary + verified + unverified emails
      const validatedEmail = validateEmailAddress(reqBody.email);

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

      checkForDuplicateEmail(subscriber, validatedEmail.email);

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
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(AppConstants.SERVER_URL, 301);
  }
}

export async function DELETE(req: NextRequest) {
  const token = await getToken({ req });

  if (token) {
    try {
      const { emailId } = await req.json();
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
