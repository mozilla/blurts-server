/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { ResponseInternal } from "next-auth/core";
import { authOptions } from "../../utils/auth";

// There is currently no support for handling OAuth provider callback errors:
// https://github.com/nextauthjs/next-auth/discussions/8209
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (
    req.method === "GET" &&
    req.url?.startsWith(
      `${process.env.SERVER_URL}/api/auth/callback/fxa?error=`,
    )
  ) {
    return NextResponse.redirect(`${process.env.SERVER_URL}/user/dashboard`);
  }

  return (await NextAuth(req, res, authOptions)) as Promise<
    ResponseInternal<Body>
  >;
};

export { handler as GET, handler as POST };
