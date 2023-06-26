/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

import { createProfile } from "../../../../functions/server/onerep";
import type { ProfileData } from "../../../../functions/server/onerep.d";
import AppConstants from "../../../../../appConstants";
// import { getL10n } from "../../../../functions/server/l10n";
import {
  getSubscriberByEmail,
  setOnerepProfileId,
} from "../../../../../db/tables/subscribers";

export async function POST(req: NextRequest) {
  const token = await getToken({ req });
  const params = new URLSearchParams(await req.text());

  if (!params.has("firstname")) {
    throw new Error("First name is required");
  } else if (!params.has("lastname")) {
    throw new Error("Last name is required");
  } else if (!params.has("city")) {
    throw new Error("City is required");
  } else if (!params.has("state")) {
    throw new Error("State is required");
  } else if (!params.has("dob")) {
    throw new Error("Date of Birth is required");
  }

  const profileData: ProfileData = {
    first_name: params.get("firstname") || "",
    last_name: params.get("lastname") || "",
    city: params.get("city") || "",
    state: "CA", // FIXME
    birth_date: params.get("dob") || "",
  };

  if (typeof token?.email === "string") {
    try {
      const subscriber = await getSubscriberByEmail(token.email);
      // FIXME check if scan has already been performed and return early if so.

      if (!subscriber.onerep_profile_id) {
        const profileId = await createProfile(profileData);
        await setOnerepProfileId(subscriber, profileId);
      }

      return NextResponse.redirect(
        `${AppConstants.SERVER_URL}/redesign/user/welcome/scanning`,
        301
      );
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(AppConstants.SERVER_URL, 302);
  }
}
