// @vitest-environment node
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "vitest";
import { isValidBearer } from "./hibp";

describe("hibp utilities", () => {
  it.each([
    ["abc", "abc", true],
    ["def", "abc,def", true],
    ["abc", "abc,def", true],
    ["abc", "def", false],
    ["abc", "def,hij", false],
  ])(
    "validates a bearer token against 1 or more stored tokens",
    (bearer, stored, expected) => {
      expect(isValidBearer(bearer, stored)).toEqual(expected);
    },
  );
});
