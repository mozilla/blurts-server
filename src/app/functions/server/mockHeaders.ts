/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function mockHeaders(map: Record<string, string>) {
  const headerMap = new Map();
  for (const [k, v] of Object.entries(map)) {
    headerMap.set(k, v);
  }

  return {
    get: (name: string) => headerMap.get(name) ?? null,
    keys: () => headerMap.keys(),
  } as Headers;
}
