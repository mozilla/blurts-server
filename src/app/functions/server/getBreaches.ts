/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { get } from "node:https";
import { createWriteStream } from "node:fs";
import { dirname, resolve as pathResolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readdir } from "node:fs/promises";
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
let logoMap: LogoMap;
let isFetchingIcons = false;
export async function getBreachIcons(breaches: Breach[]): Promise<LogoMap> {
  if (logoMap) {
    return logoMap;
  }
  if (isFetchingIcons) {
    return new Map();
  }
  isFetchingIcons = true;
  const breachDomains = breaches
    .map((breach) => breach.Domain)
    .filter((breachDomain) => breachDomain.length > 0);
  const logoFolder = pathResolve(
    dirname(fileURLToPath(import.meta.url)),
    "../../../../public/logo_cache/"
  );
  try {
    await mkdir(logoFolder);
  } catch {
    // Do nothing; if the directory already exists, that's fine.
  }
  const existingLogos = await readdir(logoFolder);
  // TODO: Batch to limit memory use?
  const logoMapElems = (await Promise.all(
    breachDomains.map((breachDomain) => {
      return new Promise((resolve, reject) => {
        const logoFilename = breachDomain.toLowerCase() + ".ico";
        const logoPath = pathResolve(logoFolder, logoFilename);
        if (existingLogos.includes(logoFilename)) {
          resolve([breachDomain, `/logo_cache/${logoFilename}`]);
          return;
        }
        get(
          `https://icons.duckduckgo.com/ip3/${breachDomain}.ico`,
          (response) => {
            if (response.statusCode !== 200) {
              resolve(null);
              return;
            }

            const file = createWriteStream(logoPath);
            response.pipe(file);
            file.on("finish", () => {
              file.close();
              resolve([
                breachDomain,
                `/logo_cache/${breachDomain.toLowerCase()}.ico`,
              ]);
            });
            file.on("error", (error) => reject(error));
          }
        ).on("error", (_error) => {
          resolve(null);
        });
      });
    })
  )) as Array<[string, string] | null>;

  logoMap = new Map(logoMapElems.filter(isNotNull));
  return logoMap;
}

function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}
