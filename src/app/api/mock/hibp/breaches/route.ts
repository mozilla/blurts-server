/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { logger } from "../../../../functions/server/logging";
import mockAllBreaches from "../mockData/mockAllBreaches.json";
import { errorIfProduction } from "../../../utils/errorThrower";
import { HibpGetBreachesResponse } from "../../../../../utils/hibp";

export function GET() {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  logger.info("Mock endpoint: /breaches");

  return NextResponse.json(mockAllBreaches.data as HibpGetBreachesResponse);
}
