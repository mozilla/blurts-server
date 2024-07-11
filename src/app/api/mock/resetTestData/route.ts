/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "../../../functions/server/getServerSession";
import {
  errorIfProduction,
  internalServerError,
  unauthErrorResponse,
} from "../../utils/errorThrower";
import { resetData } from "./reset";

function isTestEmail(email: string | undefined) {
  if (!email) return false;
  const testEmailKeys = Object.keys(process.env).filter((key) =>
    key.startsWith("E2E_TEST_ACCOUNT_EMAIL"),
  );
  const testEmails = testEmailKeys.map((key) => process.env[key]);
  return testEmails.includes(email);
}

export async function GET(req: NextRequest) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const session = await getServerSession();
  const email = session?.user.email;
  const subscriberId = session?.user.subscriber?.id;
  if (!session || !email || !isTestEmail(email) || !subscriberId)
    return unauthErrorResponse();

  const resetHibp = Boolean(req.nextUrl.searchParams.get("resetHibp"));
  const resetOneRep = Boolean(req.nextUrl.searchParams.get("resetOneRep"));

  const [success, msg] = await resetData(subscriberId, resetHibp, resetOneRep);
  if (!success) return internalServerError(msg);

  return NextResponse.json(
    { message: "Requested reached successfully" },
    { status: 200 },
  );
}
