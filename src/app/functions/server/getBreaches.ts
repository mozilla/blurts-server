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

export async function getBreaches(): Promise<HibpLikeDbBreach[]> {
  let breaches: Array<HibpLikeDbBreach>;
  breaches = await getAllBreachesFromDb();
  logger.debug("loaded_breaches_from_database", {
    breachesLength: breaches.length,
  });

  // An empty result means an empty table or a failed read. Both re seed from HIBP
  if (breaches?.length < 1) {
    const breachesResponse = await fetchHibpBreaches();
    logger.debug(`loaded breaches from HIBP: ${breachesResponse.length}`);

    // sync the "breaches" table with the latest from HIBP
    await upsertBreaches(breachesResponse);
    breaches = await getAllBreachesFromDb();
  }

  return breaches;
}
