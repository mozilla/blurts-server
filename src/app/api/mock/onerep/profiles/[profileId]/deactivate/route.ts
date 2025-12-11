/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { errorIfProduction } from "../../../../../utils/errorThrower";

export async function PUT(
  _: NextRequest,
  props: { params: Promise<{ profileId: string }> },
) {
  const params = await props.params;
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = Number.parseInt(params.profileId, 10);

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ status: 400, error: "Invalid profile ID" });
  }

  return NextResponse.json({
    message: `Profile ${profileId} successfully deactivated`,
  });
}
