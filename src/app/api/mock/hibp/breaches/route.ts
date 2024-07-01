/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { logger } from "../../../../functions/server/logging";
import mockAllBreaches from "../data/mockAllBreaches.json";
import { errorIfProduction } from "../../utils/errorThrower";
import { getBreaches } from "../../../../functions/server/getBreaches";
import { Breach } from "../../../../functions/universal/breach";
import { HibpLikeDbBreach } from "../../../../../utils/hibp";

type BreachesListResponse = (Breach | HibpLikeDbBreach)[];

export async function GET() {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  logger.info("Mock endpoint: /breaches");

  // This fails when creating a PR
  // let allBreaches = await getBreaches();
  // if (allBreaches.length === 0) {
  //   allBreaches = mockAllBreaches.data as BreachesListResponse;
  // }

  try {
    let allBreaches = await getBreaches();
    if (allBreaches.length === 0) {
      allBreaches = mockAllBreaches.data as BreachesListResponse;
    }
    return NextResponse.json(allBreaches);
  } catch {
    return NextResponse.json(mockAllBreaches.data as BreachesListResponse);
  }
}
