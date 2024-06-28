/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";

export function errorIfProduction() {
  //checks that the environment isnt prod
  if (process.env.APP_ENV === "production") {
    return NextResponse.json(
      { error: "Endpoint not available in production environment" },
      { status: 403 },
    );
  }
  return null;
}
