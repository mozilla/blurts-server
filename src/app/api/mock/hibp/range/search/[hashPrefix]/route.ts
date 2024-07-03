/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { logger } from "../../../../../../functions/server/logging";
import mockBreaches from "../../../data/mockBreaches.json";
import { errorIfProduction } from "../../../../../utils/errorThrower";
import { MOCK_HIBP_COMPUTE_SHA1 } from "../../../config/defaults";

type BreachedAccountResponse = {
  hashSuffix: string;
  websites: string[];
}[];

export function GET() {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  logger.info("HIBP Mock endpoint: /range/search/");
  if (process.env.E2E_TEST_ACCOUNT_EMAIL === undefined) {
    return NextResponse.json({
      error: 500,
      message: "HIBP Mock endpoint: E2E test account isn't set up!",
    });
  }

  const sha1Sliced = MOCK_HIBP_COMPUTE_SHA1(process.env.E2E_TEST_ACCOUNT_EMAIL);
  let data = mockBreaches.data as BreachedAccountResponse;

  data = data.map((elem) => ({
    ...elem,
    hashSuffix: sha1Sliced,
  }));
  const res = NextResponse.json(data);
  return res;
}
