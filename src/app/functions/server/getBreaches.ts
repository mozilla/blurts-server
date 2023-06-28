/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import mozlog from "../../../utils/log.js";
import {
  formatDataClassesArray,
  getAllBreachesFromDb,
  req,
} from "../../../utils/hibp.js";
import { upsertBreaches } from "../../../db/tables/breaches.js";
import { Breach } from "../../(nextjs_migration)/(authenticated)/user/breaches/breaches.js";

const log = mozlog("hibp");
let breaches: Breach[];

export async function getBreaches() {
  if (breaches) {
    return breaches;
  }
  breaches = await getAllBreachesFromDb();
  log.debug(
    "loadBreachesIntoApp",
    `loaded breaches from database: ${breaches.length}`
  );

  // if "breaches" table does not return results, fall back to HIBP request
  if (breaches?.length < 1) {
    const breachesResponse = await req("/breaches");
    log.debug(
      "loadBreachesIntoApp",
      `loaded breaches from HIBP: ${breachesResponse.length}`
    );

    for (const breach of breachesResponse) {
      breach.DataClasses = formatDataClassesArray(breach.DataClasses);
      breach.LogoPath = /[^/]*$/.exec(breach.LogoPath)?.[0];
      breaches.push(breach);
    }

    // sync the "breaches" table with the latest from HIBP
    await upsertBreaches(breaches);
  }

  return breaches;
}

export type LogoMap = Map<string, string>;

export function getBreachIcons(breaches: Breach[]): LogoMap {
  const logoMap: LogoMap = new Map();
  const breachDomains = breaches
    .map((breach) => breach.Domain)
    .filter((breachDomain) => breachDomain.length > 0);
  breachDomains.forEach((breachDomain) =>
    logoMap.set(
      breachDomain,
      `https://s3.amazonaws.com/${
        process.env.S3_BUCKET
      }/${breachDomain.toLowerCase()}.ico`
    )
  );
  return logoMap;
}
