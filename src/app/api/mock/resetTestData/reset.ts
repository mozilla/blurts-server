/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  deleteScanResultsForProfile,
  deleteSomeScansForProfile,
} from "../../../../db/tables/onerep_scans";
import {
  getOnerepProfileId,
  unresolveAllBreaches,
} from "../../../../db/tables/subscribers";
import { logger } from "../../../functions/server/logging";

export async function resetData(
  subscriberId: number,
  resetHibp: boolean,
  resetOneRep: boolean,
): Promise<[success: boolean, msg?: string | undefined]> {
  const onerepProfileId = await getOnerepProfileId(subscriberId);
  if (!onerepProfileId) return [false, "Unable to fetch OneRep profile ID"];
  if (resetHibp) await unresolveAllBreaches(onerepProfileId);
  if (resetOneRep) {
    await deleteSomeScansForProfile(onerepProfileId, 1);
    await deleteScanResultsForProfile(onerepProfileId);
  }
  const oneRepMsg = `${resetOneRep ? "attempted to delete all but 1 scans" : ""}`;
  const hibpMsg = `${resetHibp ? "attempted to unresolve all breaches" : ""}`;
  const loggerMsg =
    `${oneRepMsg}${resetOneRep && resetHibp ? ", " : ""}${hibpMsg}` ||
    "no action done";
  logger.info(`Mock Data Reset endpoint: ${loggerMsg}`);
  return [true];
}

export function brokerOverwriteOneRep() {
  //modify json file
}

export function breachOverwriteHibp() {
  //modify json file
}

export function brokerAddOneRep() {
  //modify json file
}

export function breachAddeHibp() {
  //modify json file
}
