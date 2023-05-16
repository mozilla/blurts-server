/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { getSession } from "../../functions/server/getSession";
import mozlog from "../../../utils/log.js";
import { removeFxAData } from "../../../db/tables/subscribers.js";

const log = mozlog("controllers.auth");

export async function GET(request: Request) {
  const response = new NextResponse("", {
    status: 302,
    headers: { Location: "/" },
  });
  const session = await getSession(request, response);
  const subscriber = session.user;
  log.info("logout", subscriber?.primary_email);

  // delete oauth session info in database
  await removeFxAData(subscriber);

  await session.destroy();
  return response;
}
