/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nextConfig from "../next.config";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { nonce, cspHeader } = generateCspData();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  // Add the CSP to the request headers - that will make Next.js detect it and
  // add it to the inline `<script>` tags that it injects itself, as per
  // https://github.com/vercel/next.js/discussions/51039#discussioncomment-6596642
  requestHeaders.set("Content-Security-Policy", cspHeader);
  const responseHeaders = new Headers();
  responseHeaders.set("Content-Security-Policy", cspHeader);

  // If the user is not logged in, `getExperimentationIdFromUserSession` uses the value we
  // set here to determine which experiments to show the user. We read it from
  // the `experimentationId` cookie, and initialise that cookie if it's unset.
  // (The reason we do this in middleware, is to ensure that every call to
  // `getExperimentationIdFromUserSession` results in the same ID.)
  const existingExperimentationId = request.cookies.get("experimentationId");
  const experimentationId =
    existingExperimentationId?.value ?? `guest-${crypto.randomUUID()}`;
  requestHeaders.set("x-experimentation-id", experimentationId);

  // Check for the presence of the Nimbus preview mode param.
  const nimbusPreviewMode = request.nextUrl.searchParams.get("nimbus_preview");
  requestHeaders.set(
    "x-nimbus-preview-mode",
    nimbusPreviewMode === "true" ? "true" : "false",
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (!existingExperimentationId) {
    response.cookies.set({
      name: "experimentationId",
      value: experimentationId,
      path: "/",
    });
  }

  return response;
}

// See https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy#adding-a-nonce-with-middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     *
     * Those do not need a CSP header.
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

function generateCspData() {
  const nonce = crypto.randomUUID();
  // Most of these values are taken from the Helmet package:
  // https://www.npmjs.com/package/helmet
  const cspHeaderParts = [
    "default-src 'self'",
    "base-uri 'self'",
    `script-src 'self' ` +
      (process.env.NODE_ENV === "development"
        ? "'unsafe-eval' 'unsafe-inline'"
        : `'nonce-${nonce}'`) +
      ` https://*.googletagmanager.com https://js.stripe.com`,
    `connect-src 'self' ${
      process.env.NODE_ENV === "development" ? "webpack://*" : ""
    } https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.ingest.sentry.io https://incoming.telemetry.mozilla.org https://api.stripe.com`,
    // `withSentryConfig` in next.config.js messes up the type, but we know that
    // it's a valid NextConfig with `images.remotePatterns` set:

    `img-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://firefoxusercontent.com https://mozillausercontent.com https://monitor.cdn.mozilla.net ${nextConfig
      .images!.remotePatterns!.map(
        (pattern) =>
          `${pattern.protocol ?? "https"}://${pattern.hostname.replace(
            "**",
            "*",
          )}${pattern.port ? `:${pattern.port}` : ""}`,
      )
      .join(" ")}`,
    "child-src 'self'",
    "style-src 'self'",
    "font-src 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "frame-src 'self' https://js.stripe.com https://mozilla.formstack.com",
    "object-src 'none'",
    "block-all-mixed-content",
    "upgrade-insecure-requests",
  ];

  return { nonce, cspHeader: cspHeaderParts.join(";") };
}
