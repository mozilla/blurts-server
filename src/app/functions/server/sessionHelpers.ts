/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getIronSession, IronSession, unsealData } from "iron-session";
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

async function getCurrentSession() {
  const session = cookies().get(sessionConfig.cookieName);
  if (!session) {
    return null;
  }

  return await unsealData(session.value, {
    password: sessionConfig.password,
  });
}

async function getSession(
  req: Request,
  res: NextResponse
): Promise<IronSession & SessionData> {
  return getIronSession(req, res, sessionConfig);
}

export { sessionConfig, getCurrentSession, getSession };
