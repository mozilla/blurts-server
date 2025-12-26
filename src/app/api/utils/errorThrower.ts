/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { config } from "../../../config";

export function errorIfProduction() {
  //checks that the environment isnt production
  if (config.appEnv === "production") {
    return error403("Endpoint not available in prod environment");
  }
  return null;
}

export function errorIfStage() {
  //checks that the environment isnt stage
  if (config.appEnv === "stage") {
    return error403("Endpoint not available in stage environment");
  }
  return null;
}

export function errorIfNotLocal() {
  if (config.appEnv !== "local") {
    return error403("Endpoint not available in non-local environment");
  }
  return null;
}

function error403(msg: string) {
  return NextResponse.json({ error: msg }, { status: 403 });
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
    { status: 500 },
  );
}
