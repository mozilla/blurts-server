/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "../../../functions/server/getServerSession";
import {
  errorIfProduction,
  internalServerError,
  unauthError,
} from "../../utils/errorThrower";
import {
  getOnerepProfileId,
  unresolveAllBreaches,
} from "../../../../db/tables/subscribers";
import {
  deleteScanResultsForProfile,
  deleteSomeScansForProfile,
} from "../../../../db/tables/onerep_scans";
import { logger } from "../../../functions/server/logging";
import { isTestEmail } from "../../utils/mockUtils";

export async function GET(req: NextRequest) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const session = await getServerSession();
  const email = session?.user.email;
  const subscriberId = session?.user.subscriber?.id;
  if (!session || !email || !isTestEmail(email) || !subscriberId)
    return unauthError();

  const hibp = req.nextUrl.searchParams.get("hibp") === "true";
  const onerep = req.nextUrl.searchParams.get("onerep") === "true";

  const onerepProfileId = await getOnerepProfileId(subscriberId);
  if (!onerepProfileId)
    return internalServerError("Unable to fetch OneRep profile ID");
  if (onerep) {
    await deleteScanResultsForProfile(onerepProfileId);
    await deleteSomeScansForProfile(onerepProfileId, 1);
  }
  if (hibp) await unresolveAllBreaches(subscriberId);
  logger.info(
    "Mock OneRep endpoint: attempted to delete all but 1 scans, attempted to unresolve all breaches",
  );

  return NextResponse.json(
    { message: "Requested reached successfully" },
    { status: 200 },
  );
}
