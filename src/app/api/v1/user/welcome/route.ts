/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import AppConstants from "../../../../../appConstants";
// import { getL10n } from "../../../../functions/server/l10n";
import {
  getSubscriberByEmail,
  setOnerepProfileId,
} from "../../../../../db/tables/subscribers";

async function callOneRep(method: string, path: string, body: string) {
  const bearerToken = process.env.ONEREP_API_KEY;
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  };
  if (method !== "GET" && method !== "HEAD") {
    //@ts-ignore FIXME
    options.body = body;
  }
  const result = await fetch(`${process.env.ONEREP_API_BASE}/${path}`, options);
  if (!result.ok) {
    throw new Error(
      `Error connecting to provider: ${JSON.stringify(await result.json())}`
    );
  }
  return await result.json();
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });
  const params = new URLSearchParams(await req.text());

  if (!params.has("firstname")) {
    throw new Error("First name is required");
  } else if (!params.has("lastname")) {
    throw new Error("Last name is required");
  } else if (!params.has("citystate")) {
    throw new Error("City and State is required");
  } else if (!params.has("dob")) {
    throw new Error("Date of Birth is required");
  }

  // FIXME depends on address lookup service, mock for now.
  const address = {
    state: "CA",
    city: "San Francisco",
    zip: "94016",
    address_line: "123 Battery Street",
  };

  const body = JSON.stringify({
    first_name: params.get("firstname"),
    last_name: params.get("lastname"),
    addresses: [address],
    birth_date: params.get("dob"),
  });

  if (typeof token?.email === "string") {
    try {
      const subscriber = await getSubscriberByEmail(token.email);
      if (!subscriber.onerep_profile_id) {
        const profile = await callOneRep("POST", "profiles", body);
        setOnerepProfileId(subscriber, profile.id);
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
    return NextResponse.redirect(AppConstants.SERVER_URL, 301);
  }
}
