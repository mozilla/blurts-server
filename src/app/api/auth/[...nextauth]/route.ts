/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authOptions } from "../../utils/auth";

type SafeOAuthClientError =
  | "access_denied"
  | "login_required"
  | "interaction_required"
  | "invalid_request"
  | "invalid_scope"
  | "unsupported_response_type";

const safeClientErrors = new Set<SafeOAuthClientError>([
  "access_denied",
  "login_required",
  "interaction_required",
  "invalid_request",
  "invalid_scope",
  "unsupported_response_type",
]);

function isSafeClientError(error: string): error is SafeOAuthClientError {
  return safeClientErrors.has(error as SafeOAuthClientError);
}

const handler = async (req: NextRequest, res: unknown) => {
  if (req.method === "GET") {
    const searchParams = req.nextUrl.searchParams;
    const pathname = req.nextUrl.pathname;

    const error = searchParams.get("error");
    const errorDescription = searchParams.get("error_description");

    // Check if login is required: If the callback URL is available redirect to
    // the authentication flow and otherwise fallback to the base URL.
    if (error === "login_required") {
      const cookieStore = req.cookies;

      const callbackUrl = cookieStore.get("next-auth.callback-url")?.value;
      const redirectUrl =
        callbackUrl && callbackUrl.startsWith(process.env.SERVER_URL as string)
          ? callbackUrl
          : (process.env.SERVER_URL as string);

      return NextResponse.redirect(redirectUrl);
    }

    if (
      pathname.includes("/callback") &&
      error &&
      errorDescription &&
      isSafeClientError(error)
    ) {
      // By default, Next-Auth handles OAuth callback exceptions internally,
      // which results in HTTP 500 response and multi-line errors that are difficult to filter for.
      // This turns it into a 400 response that can more easily be distinguished from actual internal server errors.
      return new NextResponse(
        JSON.stringify({ error, detail: errorDescription }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "X-App-Error-Code": `oauth_callback_${error}`,
          },
        },
      );
    }
  }

  return NextAuth(
    req as unknown as NextApiRequest,
    res as NextApiResponse,
    authOptions,
  ) as Promise<Response>;
};

export { handler as GET, handler as POST };
