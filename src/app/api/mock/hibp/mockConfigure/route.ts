/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { logger } from "../../../../functions/server/logging";

export function GET() {
  const { APP_ENV, HIBP_KANON_API_ROOT, HIBP_KANON_API_ROOT_TRUE } =
    process.env;
  if (APP_ENV === "production") {
    logger.info("Attempt to access environment variable HIBP_KANON_API_ROOT");
    return NextResponse.json(
      { error: "Endpoint not available in production environment" },
      { status: 403 },
    );
  }
  return NextResponse.json({
    message: `HIBP endpoint is ${HIBP_KANON_API_ROOT === HIBP_KANON_API_ROOT_TRUE ? "REAL" : "FAKE"}`,
  });
}

export async function PUT(req: NextRequest) {
  //TODO: make new environemnt variable to use for real vs mock endpoint

  const {
    APP_ENV,
    HIBP_KANON_API_ROOT_TRUE,
    HIBP_KANON_API_SUFFIX_FAKE,
    SERVER_URL,
  } = process.env;

  if (HIBP_KANON_API_SUFFIX_FAKE === undefined || SERVER_URL === undefined) {
    return NextResponse.json(
      {
        error:
          "Server environment not configured correctly: suffix_fake or server_url is undefined",
      },
      { status: 500 },
    );
  }

  const reqJson = await req.json();
  const useMock = reqJson.useMock;

  // Check if APP_ENV is set to production
  if (APP_ENV === "production") {
    logger.info(
      "Attempt to change environment variable HIBP_KANON_API_ROOT in production environment",
    );
    return NextResponse.json(
      { error: "Endpoint not available in production environment" },
      { status: 403 },
    );
  }
  let msg =
    "Environment variable HIBP_KANON_API_ROOT has been updated to use mock API";
  // Set the HIBP_KANON_API_ROOT environment variable
  if (useMock) {
    process.env.HIBP_KANON_API_ROOT = SERVER_URL + HIBP_KANON_API_SUFFIX_FAKE;
  } else {
    process.env.HIBP_KANON_API_ROOT = HIBP_KANON_API_ROOT_TRUE;
    msg =
      "Environment variable HIBP_KANON_API_ROOT has been updated to use true API";
  }
  logger.info(msg);

  // Return a success response
  return NextResponse.json({
    message: msg,
  });
}
