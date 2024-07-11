/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { logger } from "../../../../../../functions/server/logging";
import { errorIfProduction } from "../../../../../utils/errorThrower";
import { getBreachesForHash } from "../../../config/defaults";
import mockOvewrite from "../../../mockData/mockOverwrite.json";

type BreachedAccountResponse = {
  hashSuffix: string;
  websites: string[];
}[];

export function GET(
  _: NextRequest,
  { params }: { params: { hashPrefix: string } },
) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const envIsLocal = process.env.APP_ENV === "local";

  logger.info("HIBP Mock endpoint: /range/search/");

  let breachesList = [];

  if (envIsLocal && mockOvewrite.doOvewrite) {
    breachesList = mockOvewrite.breachesOverwrite;
  } else {
    const hashPrefix = params.hashPrefix;
    breachesList = getBreachesForHash(hashPrefix);
  }

  if (envIsLocal) breachesList = breachesList.concat(mockOvewrite.breachesAdd);

  const data: BreachedAccountResponse = [
    {
      hashSuffix: "", //hibp.js ignores hashSuffix if a mock endpoint is used.
      websites: breachesList,
    },
  ];
  const res = NextResponse.json(data);
  return res;
}
