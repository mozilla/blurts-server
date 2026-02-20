/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "vitest";
import type { SubscriberRow } from "knex/types/tables";
import { getSignupLocaleCountry } from "./getSignupLocaleCountry";

describe("getSignupLocaleCountry", () => {
  it("returns 'us' for a subscriber with a US locale", () => {
    const subscriber = {
      fxa_profile_json: {
        locale: "en-US",
      },
    } as SubscriberRow;

    expect(getSignupLocaleCountry(subscriber)).toBe("us");
  });

  it("returns 'ca' for a subscriber with a CA locale", () => {
    const subscriber = {
      fxa_profile_json: {
        locale: "en-CA",
      },
    } as SubscriberRow;

    expect(getSignupLocaleCountry(subscriber)).toBe("ca");
  });

  it("returns 'us' for a subscriber with an unknown locale", () => {
    const subscriber = {
      fxa_profile_json: {
        locale: "en",
      },
    } as SubscriberRow;

    expect(getSignupLocaleCountry(subscriber)).toBe("us");
  });

  it("returns 'us' for a subscriber with no locales", () => {
    const subscriber = {
      fxa_profile_json: {
        locale: undefined as unknown,
      },
    } as SubscriberRow;

    expect(getSignupLocaleCountry(subscriber)).toBe("us");
  });
});
