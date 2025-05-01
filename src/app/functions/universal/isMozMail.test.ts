/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "@jest/globals";
import { isMozMail } from "./isMozMail";

describe("isMozMail", () => {
  it("returns false if the user does not have a primary Mozilla email address", () => {
    expect(isMozMail("example@example.com")).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isMozMail("")).toBe(false);
  });

  it("returns true if the user does not have a primary Mozilla email address", () => {
    expect(isMozMail("example@mozilla.com")).toBe(true);
  });
});
