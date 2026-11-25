/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { signIn } from "next-auth/react";
import * as Sentry from "@sentry/nextjs";

/**
 * Start the FxA sign-in flow, swallowing the network errors that are expected
 * when the browser redirects away.
 *
 * `signIn` runs a few `fetch` calls and then sends the whole page to FxA with
 * `window.location.href`. When the browser aborts one of those in-flight
 * fetches — navigation starting, the tab closing, or a connection blip —
 * Firefox rejects with `TypeError: NetworkError when attempting to fetch
 * resource`. Every call site used to `void` the promise, so every rejection
 * was sent as an unhandled rejection into Sentry (MNTOR-3923).
 *
 * A `TypeError` from `fetch` is expected and unactionable here, so we drop it.
 * Anything else is a real failure, so we report it to Sentry as handled.
 */
export function signInToFxa(...args: Parameters<typeof signIn>): void {
  signIn(...args).catch((error: unknown) => {
    if (error instanceof TypeError) {
      return;
    }
    Sentry.captureException(error);
  });
}
