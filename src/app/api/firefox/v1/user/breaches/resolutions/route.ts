/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { withFxaUser } from "../../../../../utils/withFxaUser";
import { errorResponse } from "../../../../../utils/firefoxApiError";
import { recordUnknownParams } from "../../../../../utils/recordUnknownParams";
import { resolveFirefoxUserBreaches } from "../../../../../../functions/server/resolveFirefoxUserBreaches";

/** Keys a BreachResolution entry may carry */
const KNOWN_KEYS = ["breachId"];

/** Whether this is a plain JSON object */
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Breach names in the body, deduped.
 * Returns a message instead if the body is invalid.
 */
function parseBreachNames(body: unknown): Set<string> | string {
  if (!Array.isArray(body) || body.length === 0) {
    return "Body must be a non-empty array.";
  }

  const breachNames = new Set<string>();
  for (const [i, entry] of body.entries()) {
    if (!isObject(entry)) return `[${i}] must be an object.`;
    if (typeof entry.breachId !== "string" || entry.breachId === "") {
      return `[${i}].breachId must be a non-empty string.`;
    }
    breachNames.add(entry.breachId);
  }
  return breachNames;
}

/** Marks breaches resolved, per openapi.yml */
export const POST = withFxaUser(
  "/user/breaches/resolutions",
  async (req, { subscriber, clientId }) => {
    recordUnknownParams(
      "/user/breaches/resolutions",
      "query",
      req.nextUrl.searchParams.keys(),
      [],
      clientId,
    );

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return errorResponse("invalid-request", "Body must be valid JSON.");
    }
    recordUnknownParams(
      "/user/breaches/resolutions",
      "body",
      Array.isArray(body) ? body.filter(isObject).flatMap(Object.keys) : [],
      KNOWN_KEYS,
      clientId,
    );

    const breachNames = parseBreachNames(body);
    if (typeof breachNames === "string") {
      return errorResponse("invalid-request", breachNames);
    }

    await resolveFirefoxUserBreaches(subscriber, breachNames);
    return new NextResponse(null, { status: 204 });
  },
);
