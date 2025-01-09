/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { logger } from "../../../../../../functions/server/logging";
import { errorIfProduction } from "../../../../../utils/errorThrower";
import { getBreachesForHash } from "../../../config/defaults";
import { BreachedAccountResponse } from "../../../../../../../utils/hibp";

export async function GET(
  _: NextRequest,
  props: { params: Promise<{ hashPrefix: string }> },
) {
  const params = await props.params;
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  logger.info("HIBP Mock endpoint: /range/search/");

  const hashPrefix = params.hashPrefix;
  const breachesList = getBreachesForHash(hashPrefix);

  const data: BreachedAccountResponse = [
    {
      hashSuffix: "", //hibp.ts ignores hashSuffix if a mock endpoint is used.
      websites: breachesList,
    },
  ];
  return NextResponse.json(data);
}
