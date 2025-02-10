/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  try {
    // NOTE: the email address passed here cannot
    // be trusted, we must also check that the
    // `subscriptions` claim on the FxA token contains
    // "monitor", or call the auth server API to confirm.
    const { searchParams } = new URL(req.url);
    const _email = searchParams.get("email");

    return NextResponse.redirect(
      `${process.env.SERVER_URL ?? ""}/user/breaches`,
      302,
    );
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
