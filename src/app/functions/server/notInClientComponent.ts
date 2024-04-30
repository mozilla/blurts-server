/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* c8 ignore start */
if (typeof process.env.NEXT_RUNTIME === "string") {
  // server-only doesn't have type definitions because it doesn't do anything;
  // TS wouldn't complain for regular imports, but with dynamic imports (which
  // we need for the check to see if we're running in Next.js), it expects it to
  // do something.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  void import("server-only");
}
