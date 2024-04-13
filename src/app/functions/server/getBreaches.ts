/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { logger } from "./logging";
import {
  HibpLikeDbBreach,
  formatDataClassesArray,
  getAllBreachesFromDb,
  req,
} from "../../../utils/hibp.js";
import { upsertBreaches } from "../../../db/tables/breaches.js";
import { Breach } from "../universal/breach.js";

let breaches: Array<Breach | HibpLikeDbBreach>;

export async function getBreaches() {
  if (breaches) {
    return breaches;
  }
  breaches = await getAllBreachesFromDb();
  logger.debug(
    "loadBreachesIntoApp",
    `loaded breaches from database: ${breaches.length}`,
  );

  // if "breaches" table does not return results, fall back to HIBP request
  if (breaches?.length < 1) {
    const breachesResponse = (await req("/breaches")) as Breach[];
    logger.debug(
      "loadBreachesIntoApp",
      `loaded breaches from HIBP: ${breachesResponse.length}`,
    );

    for (const breach of breachesResponse) {
      breach.DataClasses = formatDataClassesArray(breach.DataClasses);
      breaches.push(breach);
    }

    // sync the "breaches" table with the latest from HIBP
    await upsertBreaches(breaches);
  }

  return breaches;
}
