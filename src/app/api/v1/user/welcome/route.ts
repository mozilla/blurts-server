/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { authOptions } from "../../../../api/utils/auth";
import { NextRequest, NextResponse } from "next/server";

import { createProfile, isEligible } from "../../../../functions/server/onerep";
import type { ProfileData } from "../../../../functions/server/onerep";
import AppConstants from "../../../../../appConstants";
import {
  getOnerepProfileId,
  getSubscriberByEmail,
} from "../../../../../db/tables/subscribers";

import {
  getLatestOnerepScan,
  setOnerepProfileId,
} from "../../../../../db/tables/onerep_scans";
import { setProfileDetails } from "../../../../../db/tables/onerep_profiles";
import { StateAbbr } from "../../../../../utils/states";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const eligible = await isEligible();
  if (!eligible) {
    throw new Error("User has no more manual scans left");
  }

  const params = await req.json();

  const requiredParams = [
    "firstName",
    "lastName",
    "city",
    "state",
    "dateOfBirth",
  ];
  requiredParams.forEach((param) => {
    if (!params[param]) {
      throw new Error(`${param} is required`);
    }
  });

  const { firstName, lastName, city, state, dateOfBirth } = params;
  const profileData: ProfileData = {
    first_name: firstName,
    last_name: lastName,
    addresses: [{ city: city as string, state: state as StateAbbr }],
    birth_date: dateOfBirth,
  };

  if (typeof session?.user?.email === "string") {
    try {
      const subscriber = await getSubscriberByEmail(session.user.email);
      // FIXME check if scan has already been performed and return early if so.

      if (!subscriber.onerep_profile_id) {
        const profileId = await createProfile(profileData);
        await setOnerepProfileId(subscriber, profileId);
        await setProfileDetails(profileId, profileData);
      }

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(AppConstants.SERVER_URL, 302);
  }
}

export async function GET(_req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (typeof session?.user?.email === "string") {
    try {
      const subscriber = await getSubscriberByEmail(session.user.email);
      const profileId = (await getOnerepProfileId(subscriber.id))[0][
        "onerep_profile_id"
      ] as number;

      const scanResults = await getLatestOnerepScan(profileId);
      return NextResponse.json(
        { success: true, scan_results: scanResults },
        { status: 200 }
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
