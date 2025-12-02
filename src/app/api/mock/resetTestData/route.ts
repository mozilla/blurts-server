/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "../../../functions/server/getServerSession";
import { errorIfProduction, unauthError } from "../../utils/errorThrower";
import { unresolveAllBreaches } from "../../../../db/tables/subscribers";
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

  if (hibp) await unresolveAllBreaches(subscriberId);

  return NextResponse.json(
    { message: "Requested reached successfully" },
    { status: 200 },
  );
}
