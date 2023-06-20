/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // NOTE: the email address passed here cannot
    // be trusted, we must also check that the
    // `subscriptions` claim on the FxA token contains
    // "monitor".

    const { searchParams } = new URL(req.url);
    const _email = searchParams.get("email");

    // TODO: The user either needs to be signed in again, or the
    // JWT from FxA refreshed, in order to read the latest
    // subscriptions.
    //
    // For now, redirect to the built-in sign-out, which will then
    // send the user to the dashboard.

    return NextResponse.redirect(
      `${process.env.SERVER_URL}/api/auth/signout?callbackUrl=/user/breaches`,
      302
    );
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
