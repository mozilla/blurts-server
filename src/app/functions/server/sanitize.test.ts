/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "vitest";
import { SubscriberRow } from "knex/types/tables";
import { sanitizeSubscriberRow } from "./sanitize";

describe("sanitizeSubscriberRow", () => {
  it("does not return auth tokens", () => {
    const sanitizedSubscriber = sanitizeSubscriberRow({
      fxa_access_token: "arbitrary token",
      fxa_refresh_token: "arbitrary token",
    } as SubscriberRow);
    expect(sanitizedSubscriber).not.toHaveProperty("fxa_access_token");
    expect(sanitizedSubscriber).not.toHaveProperty("fxa_refresh_token");
  });

  it("does not return verification tokens", () => {
    expect(
      sanitizeSubscriberRow({
        primary_verification_token: "arbitrary token",
      } as SubscriberRow),
    ).not.toHaveProperty("primary_verification_token");
  });
});
