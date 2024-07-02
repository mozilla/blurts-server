/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";

export function errorIfProduction() {
  //checks that the environment isnt production
  return errorIfEnv("production");
}

export function errorIfStage() {
  //checks that the environment isnt stage
  return errorIfEnv("stage");
}

export function errorIfEnv(which: string) {
  //checks that the environment isnt 'which'
  if (process.env.APP_ENV === which) {
    return NextResponse.json(
      { error: `Endpoint not available in ${which} environment` },
      { status: 403 },
    );
  }
  return null;
}
