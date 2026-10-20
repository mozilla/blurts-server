/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { withFxaUser } from "../../../../utils/withFxaUser";
import { errorResponse } from "../../../../utils/firefoxApiError";
import { getFirefoxUserBreaches } from "../../../../../functions/server/getFirefoxUserBreaches";
import { logger } from "../../../../../functions/server/logging";
import { incFirefoxApiUnknownParam } from "../../../../../../utils/metrics";

/** What's wrong with the params, if anything */
function findParamError(params: URLSearchParams): string | undefined {
  const domains = params.getAll("domain");
  if (domains.length > 1) return "domain must appear only once.";
  if (domains[0] === "") return "domain must not be empty.";
  return undefined;
}

/** Breaches affecting this user, per openapi.yml */
export const GET = withFxaUser(
  "/user/breaches",
  async (req, { subscriber, clientId }) => {
    const params = req.nextUrl.searchParams;
    // Ignore, so new Firefox params don't break us
    const unknownParams = [...new Set(params.keys())].filter(
      (name) => name !== "domain",
    );
    if (unknownParams.length > 0) {
      incFirefoxApiUnknownParam("/user/breaches", clientId);
      // Names only; values could hold data we don't want to track
      logger.info("firefox_api_unknown_params", {
        endpoint: "/user/breaches",
        clientId,
        unknownParams,
      });
    }

    const paramError = findParamError(params);
    if (paramError) {
      return errorResponse("invalid-request", paramError);
    }

    const domain = params.get("domain") ?? undefined;
    const breaches = await getFirefoxUserBreaches(subscriber, domain);
    // Scoped to one user; never cache it
    return NextResponse.json(breaches, {
      headers: { "Cache-Control": "private, no-store" },
    });
  },
);
