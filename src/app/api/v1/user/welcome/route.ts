/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import AppConstants from "../../../../../appConstants";
import { getL10n } from "../../../../functions/server/l10n";
import {
  getSubscriberByEmail,
  setOnerepProfileId,
} from "../../../../../db/tables/subscribers";

const body = JSON.stringify({
  first_name: "Test",
  last_name: "User",
  addresses: [
    {
      state: "NY",
      city: "New York",
      zip: "11111",
      address_line: "1st Ave 1 Apt 1",
    },
  ],
});

async function callOneRep(method: string, path: string) {
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
    throw new Error("Error connecting to provider");
  }
  return result.json();
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (typeof token?.email === "string") {
    try {
      const profile = await callOneRep("POST", "profiles");
      const subscriber = await getSubscriberByEmail(token.email);
      setOnerepProfileId(subscriber, profile.id);

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
