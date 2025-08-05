/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authOptions } from "../../utils/auth";

const handler = async (req: NextRequest, res: unknown) => {
  // Intercept known OAuth errors before they reach NextAuth internals
  if (req.method === "GET") {
    const searchParams = req.nextUrl.searchParams;
    const pathname = req.nextUrl.pathname;

    const error = searchParams.get("error");
    const errorDescription = searchParams.get("error_description");

    // Handle known login-required case with redirect
    if (error === "login_required") {
      const cookieStore = req.cookies;
      const callbackUrl = cookieStore.get("next-auth.callback-url")?.value;
      const redirectUrl =
        callbackUrl && callbackUrl.startsWith(process.env.SERVER_URL as string)
          ? callbackUrl
          : (process.env.SERVER_URL as string);

      return NextResponse.redirect(redirectUrl);
    }

    // Handle other OAuth callback errors explicitly
    if (pathname.includes("/callback") && error && errorDescription) {
      return new NextResponse(
        JSON.stringify({
          error,
          detail: errorDescription,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "X-App-Error-Code": "oauth_callback_error",
          },
        },
      );
    }
  }

  // Fall back to default NextAuth handling
  return NextAuth(
    req as unknown as NextApiRequest,
    res as NextApiResponse,
    authOptions,
  ) as Promise<Response>;
};

export { handler as GET, handler as POST };
