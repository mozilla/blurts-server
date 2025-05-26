/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authOptions } from "../../utils/auth";

const handler = async (req: NextRequest, res: unknown) => {
  // There is currently no support for handling OAuth provider callback errors:
  // https://github.com/nextauthjs/next-auth/discussions/8209
  if (req.method === "GET") {
    const requestSearchParams = req.nextUrl.searchParams;
    const requestErrorQuery = requestSearchParams.get("error");
    // Check if login is required: If the callback URL is available redirect to
    // the authentication flow and otherwise fallback to the base URL.
    if (requestErrorQuery === "login_required") {
      const cookieStore = req.cookies;
      const callbackUrl = cookieStore.get("next-auth.callback-url")?.value;
      const redirectUrl =
        callbackUrl && callbackUrl.startsWith(process.env.SERVER_URL as string)
          ? callbackUrl
          : (process.env.SERVER_URL as string);

      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextAuth(
    req as unknown as NextApiRequest,
    res as NextApiResponse,
    authOptions,
  ) as Promise<Response>;
};

export { handler as GET, handler as POST };
