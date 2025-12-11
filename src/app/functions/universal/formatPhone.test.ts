/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * The unit tests test for the `formatPhone` function in this file are taken from mozilla/fx-private-relay:
 * https://github.com/mozilla/fx-private-relay/blob/main/frontend/src/functions/formatPhone.test.ts
 */

import { formatPhone } from "./formatPhone";

it("returns a formatted number even if not a valid length", () => {
  const phoneNumber = "+122244";

  expect(formatPhone(phoneNumber)).toBe("(222) 44");
});

it("returns a formatted number with or without a country code", () => {
  const phoneNumberWithCountryCode = "+12505551234";
  const phoneNumberWithoutCountryCode = "2505551234";

  expect(formatPhone(phoneNumberWithCountryCode)).toBe("(250) 555 - 1234");
  expect(formatPhone(phoneNumberWithoutCountryCode)).toBe("(250) 555 - 1234");
});

it("returns a formatted number", () => {
  const phoneNumberWithoutCountryCode = "(250) 555 - 1234";

  expect(formatPhone(phoneNumberWithoutCountryCode)).toBe("(250) 555 - 1234");
});
