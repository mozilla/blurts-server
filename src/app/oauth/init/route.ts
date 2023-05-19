/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { FxAOAuthClient } from "../../../utils/fxa.js";
import { getSession } from "../../functions/server/sessionHelpers";

export async function GET(request: Request) {
  // Set a random state string in a cookie so that we can verify
  // the user when they're redirected back to us after auth.
  const state = randomBytes(40).toString("hex");
  const client = FxAOAuthClient;

  const url = new URL(client.code.getUri({ state }));
  const fxaParams = new URL(request.url, process.env.SERVER_URL);

  url.searchParams.append("prompt", "login");
  url.searchParams.append("max_age", "0");
  url.searchParams.append("access_type", "offline");
  url.searchParams.append("action", "email");

  for (const param of fxaParams.searchParams.keys()) {
    url.searchParams.append(param, fxaParams.searchParams.get(param)!);
  }

  const response = new NextResponse("", {
    status: 302,
    headers: { Location: url.href },
  });
  const session = await getSession(request, response);
  session.oauthState = state;
  await session.save();
  return response;
}
