/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { errorIfProduction } from "../../../../../utils/errorThrower";

export async function PUT(
  _: NextRequest,
  props: { params: Promise<{ profileId: number }> },
) {
  const params = await props.params;
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = params.profileId;

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" });
  }

  return NextResponse.json({
    message: `Profile ${profileId} successfully activated`,
  });
}
