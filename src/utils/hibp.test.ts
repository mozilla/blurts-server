/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect } from "vitest";
import { isValidBearer, formatDataClass } from "./hibp";

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

  describe("formatDataClass", () => {
    it.each([
      ["Email Addresses", "email-addresses"],
      ["Email addresses", "email-addresses"],
      ["Passwords", "passwords"],
      ["Credit Cards", "credit-cards"],
      ["Social Security Numbers", "social-security-numbers"],
      ["IP Addresses", "ip-addresses"],
      ["AI Prompts", "ai-prompts"],
      ["Cryptocurrency Wallet Addresses", "cryptocurrency-wallet-addresses"],
      ["Mothers maiden names", "mothers-maiden-names"],
      ["Credit Card CVV", "credit-card-cvv"],
      ["Apps Installed on Devices", "apps-installed-on-devices"],
      // Edge cases
      ["--Multiple--Dashes--", "multiple-dashes"],
      ["-Leading Dash", "leading-dash"],
      ["Trailing Dash-", "trailing-dash"],
      ["Special!@#$%Characters", "special-characters"],
      ["Numbers123AndLetters", "numbers123andletters"],
      ["UPPERCASE", "uppercase"],
      ["mixed-CASE-String", "mixed-case-string"],
      ["driver-s-licenses", "driver-s-licenses"],
    ])("formats '%s' to '%s'", (input, expected) => {
      expect(formatDataClass(input)).toEqual(expected);
    });
  });
});
