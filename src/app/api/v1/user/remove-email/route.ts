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
  removeOneSecondaryEmail,
  getEmailById,
} from "../../../../../db/tables/emailAddresses.js";
import { getL10n } from "../../../../functions/server/l10n";

interface EmailDeleteRequest {
  emailId: string;
}

export async function POST(req: NextRequest) {
  const l10n = getL10n();
  const token = await getToken({ req });

  if (token) {
    try {
      const { emailId }: EmailDeleteRequest = await req.json();
      const subscriber = await getSubscriberByEmail(token.email);
      const existingEmail = await getEmailById(emailId);

      if (existingEmail?.subscriber_id !== subscriber.id) {
        return NextResponse.json(
          {
            success: false,
            message: l10n.getString("error-not-subscribed"),
          },
          { status: 400 }
        );
      }

      await removeOneSecondaryEmail(emailId);
      deleteResolutionsWithEmail(
        existingEmail.subscriber_id,
        existingEmail.email
      );
      return NextResponse.redirect(
        AppConstants.SERVER_URL + "/user/settings",
        301
      );
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(AppConstants.SERVER_URL, 301);
  }
}
