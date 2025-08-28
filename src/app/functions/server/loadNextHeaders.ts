/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

let nextHeadersModule: Promise<{
  headers: () => Promise<Headers>;
} | null> | null = null;

// Import and cache `next/headers`.
export function loadNextHeaders() {
  if (!nextHeadersModule) {
    nextHeadersModule = import("next/headers")
      .then((module) => ({
        headers: () => Promise.resolve(module.headers()),
      }))
      .catch(() => null);
  }
  return nextHeadersModule;
}
