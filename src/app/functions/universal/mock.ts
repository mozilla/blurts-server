/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function isUsingMockHIBPEndpoint() {
  return process.env.HIBP_KANON_API_ROOT?.includes("api/mock") as boolean;
}

export function isUsingMockONEREPEndpoint() {
  return process.env.ONEREP_API_BASE?.includes("api/mock") as boolean;
}

export const ONEREP_API_BASE = process.env.ONEREP_API_BASE;
