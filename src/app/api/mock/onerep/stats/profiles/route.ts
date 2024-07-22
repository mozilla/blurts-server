/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { errorIfProduction } from "../../../../utils/errorThrower";

export function GET() {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileStats = {
    created: 0,
    deleted: 0,
    activated: 0,
    reactivated: 0,
    deactivated: 0,
    total_active: 0,
    total_inactive: 0,
    total: 0,
  };

  return NextResponse.json(profileStats);
}
