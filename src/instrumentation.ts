/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // This instrumentation code won't work in Next.js's "edge runtime"
    // (which we're not using):
    const { register } = await import("./instrumentation.node");
    register();
  }
}

export const onRequestError = Sentry.captureRequestError;
