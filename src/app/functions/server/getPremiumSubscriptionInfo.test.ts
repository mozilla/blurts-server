/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, expect, it } from "@jest/globals";
import { getPremiumSubscriptionUrl } from "./getPremiumSubscriptionInfo";

describe("getPremiumSubscriptionInfo (SubPlat 2.0)", () => {
  const subplatUrlPattern =
    /\/subscriptions\/products\/prod_\w+\?plan=price_\w+$/;
  it("returns the monthly subscription URL", () => {
    const subscriptionUrl = getPremiumSubscriptionUrl({
      type: "monthly",
      enabledFeatureFlags: [],
    });
    expect(subscriptionUrl).toMatch(subplatUrlPattern);
  });

  it("returns the yearly subscription URL", () => {
    const subscriptionUrl = getPremiumSubscriptionUrl({
      type: "yearly",
      enabledFeatureFlags: [],
    });
    expect(subscriptionUrl).toMatch(subplatUrlPattern);
  });
});

describe("getPremiumSubscriptionInfo (SubPlat 3.0)", () => {
  it("returns the monthly subscription URL", () => {
    const subscriptionUrl = getPremiumSubscriptionUrl({
      type: "monthly",
      enabledFeatureFlags: ["SubPlat3"],
    });
    expect(subscriptionUrl).toMatch(/\/monitorplusstage\/monthly\/landing/);
  });

  it("returns the yearly subscription URL", () => {
    const subscriptionUrl = getPremiumSubscriptionUrl({
      type: "yearly",
      enabledFeatureFlags: ["SubPlat3"],
    });
    expect(subscriptionUrl).toMatch(/\/monitorplusstage\/yearly\/landing/);
  });
});
