/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";

export function errorIfProduction() {
  //checks that the environment isnt production
  return errorIfEnvCond("production", false);
}

export function errorIfStage() {
  //checks that the environment isnt stage
  return errorIfEnvCond("stage", false);
}

export function errorIfNotLocal() {
  return errorIfEnvCond("local", true);
}

export function errorIfNotENv(which: string) {
  return errorIfEnvCond(which, true);
}

export function errorIfEnvCond(which: string, isEqualToWhich: boolean) {
  //checks that the app environment satisfies the 'isEqualToWhich' condition with 'which'
  if (isEqualToWhich !== (process.env.APP_ENV === which)) {
    return NextResponse.json(
      { error: `Endpoint not available in ${which} environment` },
      { status: 403 },
    );
  }
  return null;
}

export function unauthError() {
  return NextResponse.json(
    { error: "Unauthorized to access the endpoint" },
    { status: 401 },
  );
}

export function internalServerError(
  description: string = "something went wrong!",
) {
  return NextResponse.json(
    { error: `Internal server error: ${description}` },
    { status: 401 },
  );
}
