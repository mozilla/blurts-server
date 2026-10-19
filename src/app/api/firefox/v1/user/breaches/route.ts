/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { withFxaUser } from "../../../../utils/withFxaUser";
import { errorResponse } from "../../../../utils/firefoxApiError";
import { getFirefoxUserBreaches } from "../../../../../functions/server/getFirefoxUserBreaches";

/** What's wrong with the params, if anything */
function findParamError(params: URLSearchParams): string | undefined {
  for (const name of params.keys()) {
    if (name !== "domain") {
      return `Unknown query parameter: ${name}.`;
    }
  }

  const domains = params.getAll("domain");
  if (domains.length > 1) return "domain must appear only once.";
  if (domains[0] === "") return "domain must not be empty.";
  return undefined;
}

/** Breaches affecting this user, per openapi.yml */
export const GET = withFxaUser(
  "/user/breaches",
  async (req, { subscriber }) => {
    const params = req.nextUrl.searchParams;
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
