/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { logger } from "./logging";
import {
  HibpLikeDbBreach,
  getAllBreachesFromDb,
  fetchHibpBreaches,
} from "../../../utils/hibp";
import { upsertBreaches } from "../../../db/tables/breaches";

let breaches: Array<HibpLikeDbBreach>;

export async function getBreaches(): Promise<HibpLikeDbBreach[]> {
  if (breaches) {
    return breaches;
  }
  breaches = await getAllBreachesFromDb();
  logger.debug("loaded_breaches_from_database", {
    breachesLength: breaches.length,
  });

  // if "breaches" table does not return results, fall back to HIBP request
  if (breaches?.length < 1) {
    const breachesResponse = await fetchHibpBreaches();
    logger.debug(`loaded breaches from HIBP: ${breachesResponse.length}`);

    // sync the "breaches" table with the latest from HIBP
    await upsertBreaches(breachesResponse);
    breaches = await getAllBreachesFromDb();
  }

  return breaches;
}
