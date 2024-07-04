/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { getServerSession } from "../../../../functions/server/getServerSession";
import {
  errorIfProduction,
  internalServerError,
  unauthError,
} from "../../../utils/errorThrower";
import { getOnerepProfileId } from "../../../../../db/tables/subscribers";
import {
  deleteScanResultsForProfile,
  deleteSomeScansForProfile,
} from "../../../../../db/tables/onerep_scans";
import { logger } from "../../../../functions/server/logging";

function isTestEmail(email: string) {
  if (!email) return false;
  const testEmailKeys = Object.keys(process.env).filter((key) =>
    key.startsWith("E2E_TEST_ACCOUNT_EMAIL"),
  );
  const testEmails = testEmailKeys.map((key) => process.env[key]);
  return testEmails.includes(email);
}

export async function GET() {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const session = await getServerSession();
  const email = session?.user.email;
  const subscriberId = session?.user.subscriber?.id;
  if (!session || !email || !isTestEmail(email) || !subscriberId)
    return unauthError();

  const onerepProfileId = await getOnerepProfileId(subscriberId);
  if (!onerepProfileId)
    return internalServerError("Unable to fetch OneRep profile ID");
  await deleteScanResultsForProfile(onerepProfileId);
  await deleteSomeScansForProfile(onerepProfileId, 1);
  logger.info("Mock OneRep endpoint: attempted to delete all but 1 scans");

  return NextResponse.json(
    { message: "Requested reached successfully" },
    { status: 200 },
  );
}
