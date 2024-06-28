/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { errorIfProduction } from "../../utils/errorThrower";
import { MOCK_ONEREP_BROKERS } from "../config/config";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const page = req.url.match(/page=([0-9]+)/)![1] || "1";
  const perPage = req.url.match(/per_page=([0-9]+)/)![1] || "100";

  const profileId = req.url.match(/profile_id......=([0-9]+)&/)![1];

  return NextResponse.json(MOCK_ONEREP_BROKERS(profileId, page, perPage));
}
