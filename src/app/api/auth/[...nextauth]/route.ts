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
    // Handle the "login_required" error from the FxA OAuth callback.
    // This error typically occurs during silent authentication (e.g. prompt=none) when no user session is present.
    // In cases like clicking through the Relay Bento menu with no FxA login,
    // the callback results in a failed silent sign-in. Instead of showing an error page,
    // we redirect the user to the originally intended callback URL (if present) or to the base URL.
    // This ensures the user sees the correct landing page and is guided to explicitly sign in if needed.
    // See: FXA-11730 for upstream fix discussion.
    if (requestErrorQuery === "login_required") {
      const cookieStore = req.cookies;
      const callbackUrl = cookieStore.get("next-auth.callback-url")?.value;
      const redirectUrl =
        callbackUrl && isValidCallbackUrl(callbackUrl)
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

function isValidCallbackUrl(callbackUrlString: string): boolean {
  const serverUrl = new URL(process.env.SERVER_URL!);
  const callbackUrl = new URL(callbackUrlString);
  return serverUrl.origin === callbackUrl.origin;
}

export { handler as GET, handler as POST };
