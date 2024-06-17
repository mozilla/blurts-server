/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { logger } from "../../../../../../functions/server/logging";
import { getSha1 } from "../../../../../../../utils/fxa";
import fakeBreaches from "../../../data/fakeBreaches.json";
import type { BinaryLike } from "crypto";

type BreachedAccountResponse = {
  hashSuffix: string;
  websites: string[];
}[];

export function GET() {
  const { APP_ENV } = process.env;

  console.log("huesos0");

  // Check if APP_ENV is set to production
  if (APP_ENV === "production") {
    return NextResponse.json(
      { error: "Endpoint not available in production environment" },
      { status: 403 },
    );
  }
  console.log("huesos1");
  // Mock data for test email, can be randomized
  const userEmail = process.env.E2E_TEST_ACCOUNT_EMAIL;
  //TODO: getServerSession doesn't work here for some reason
  const currentUserSha = getSha1(userEmail as BinaryLike);
  logger.info("Mock endpoint: /breachedaccount/range/");

  let data = fakeBreaches.data as BreachedAccountResponse;
  console.log("huesos2");
  data = data.map((elem) => ({
    ...elem,
    hashSuffix: currentUserSha.slice(6).toUpperCase(),
  }));
  console.log("huesos3");
  return NextResponse.json(data);
}
