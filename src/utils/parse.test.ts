/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "vitest";
import { parseE164PhoneNumber, parseIso8601Datetime } from "./parse";

describe("parseE164PhoneNumber", () => {
  it("returns the phone number if it is valid", () => {
    expect(parseE164PhoneNumber("+31612345678")).toBe("+31612345678");
  });

  it("returns null if given something other than a string", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(parseE164PhoneNumber(42 as any)).toBeNull();
  });

  it("returns null if given something too long to be a phone number", () => {
    expect(
      parseE164PhoneNumber(
        "This is more than 16 characters and therefore unlikely to be a phone number.",
      ),
    ).toBeNull();
  });

  it("returns null if given something that does not start with a +", () => {
    expect(parseE164PhoneNumber("0031612345678")).toBeNull();
  });

  it("returns null if given something that does not consist of a + followed by numbers", () => {
    expect(parseE164PhoneNumber("+some letters")).toBeNull();
  });
});

describe("parseIso8601Datetime", () => {
  it("returns a Date object if the ISO 8601 string is valid", () => {
    expect(parseIso8601Datetime("1998-03-31T00:00:00.000Z")).toBeInstanceOf(
      Date,
    );
    expect(parseIso8601Datetime("1998-03-31T00:00:00.000Z")?.getTime()).toBe(
      891302400000,
    );
  });

  it("returns null if given something other than a string", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(parseIso8601Datetime(42 as any)).toBeNull();
  });

  it("returns null if given a non-ISO 8601 date string", () => {
    expect(parseIso8601Datetime("Not an ISO 8601 date string")).toBeNull();
  });
});
