/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import appConstants from "../../../../appConstants";
import { allFeatureFlags } from "../../utils/featureFlags";

export async function GET() {
  return NextResponse.json({
    GA4_MEASUREMENT_ID: appConstants.GA4_MEASUREMENT_ID,
    FEATURE_FLAGS: allFeatureFlags()
  })
}
