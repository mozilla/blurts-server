/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authOptions } from "../../utils/auth";

// There is currently no support for handling OAuth provider callback errors:
// https://github.com/nextauthjs/next-auth/discussions/8209
const handler = async (req: NextRequest, res: unknown) => {
  // Temporary workaround for MNTOR-4381
  if (
    req.url?.endsWith("/api/auth/_log") &&
    process.env.APP_ENV === "production"
  ) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  if (
    req.method === "GET" &&
    req.url?.startsWith(
      `${process.env.SERVER_URL}/api/auth/callback/fxa?error=`,
    )
  ) {
    return NextResponse.redirect(process.env.SERVER_URL as string);
  }

  return NextAuth(
    req as unknown as NextApiRequest,
    res as NextApiResponse,
    authOptions,
  ) as Promise<Response>;
};

export { handler as GET, handler as POST };
