/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { logger } from "../../../../../../functions/server/logging";
import { getSha1 } from "../../../../../../../utils/fxa";
import fakeBreaches from "../../../data/fakeBreaches.json";
import type { BinaryLike } from "crypto";
import { errorIfProduction } from "../../../../utils/errorThrower";

type BreachedAccountResponse = {
  hashSuffix: string;
  websites: string[];
}[];

export function GET() {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  // Mock data for test email, can be randomized
  const userEmail = process.env.E2E_TEST_ACCOUNT_EMAIL;
  //TODO: getServerSession doesn't work here for some reason
  const currentUserSha = getSha1(userEmail as BinaryLike);
  logger.info("Mock endpoint: /range/search/");

  let data = fakeBreaches.data as BreachedAccountResponse;

  data = data.map((elem) => ({
    ...elem,
    hashSuffix: currentUserSha.slice(6).toUpperCase(),
  }));
  const res = NextResponse.json(data);
  return res;
}
