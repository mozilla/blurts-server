/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getIronSession, IronSession } from "iron-session";
import { NextResponse } from "next/server";
import { UserData } from "../../transitionTypes";

export type SessionData = Partial<{
  oauthState: string;
  user: UserData;
}>;

const sessionConfig = {
  cookieName: "monitor-iron-session",
  password: process.env.IRON_SESSION_PASSPHRASE!,
  cookieOptions: {
    secure: process.env.NODE_ENV !== "development",
  },
};

export async function getSession(
  req: Request,
  res: NextResponse
): Promise<IronSession & SessionData> {
  return getIronSession(req, res, sessionConfig);
}
