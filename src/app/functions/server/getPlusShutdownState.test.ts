/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { SubscriberRow } from "knex/types/tables";
import { getPlusShutdownState } from "./getPlusShutdownState";
import { FeatureFlagName } from "../../../db/tables/featureFlags";

const mockedNormalSubscriber = {
  fxa_profile_json: {
    subscriptions: [],
  },
} as unknown as SubscriberRow;
const mockedPlusSubscriber = {
  fxa_profile_json: {
    subscriptions: ["monitor"],
  },
} as unknown as SubscriberRow;

it("does not mark today as a runup day if both shutdown feature flags are disabled", async () => {
  const state = getPlusShutdownState(mockedNormalSubscriber, [
    "NotShutdownBanner" as FeatureFlagName,
    "NotPostShutdownBanner" as FeatureFlagName,
  ]);

  expect(state.currentMoment).toBe("ye-olden-days");
});

it("marks today as a runup day if the ShutdownBanner feature flag is enabled and the PostShutdownBanner feature flag is not", async () => {
  const state = getPlusShutdownState(mockedNormalSubscriber, [
    "ShutdownBanner",
  ]);

  expect(state.currentMoment).toBe("runup");
});

it("marks today as a post-shutdown day if the PostShutdownBanner feature flag is set", async () => {
  const state = getPlusShutdownState(mockedNormalSubscriber, [
    "PostShutdownBanner",
  ]);

  expect(state.currentMoment).toBe("shutdown");
});

it("marks today as a post-shutdown day if both the PostShutdownBanner *and* the ShutdownBanner feature flags are set", async () => {
  const state = getPlusShutdownState(mockedNormalSubscriber, [
    "PostShutdownBanner",
    "ShutdownBanner",
  ]);

  expect(state.currentMoment).toBe("shutdown");
});

it("recognises a free user", async () => {
  const state = getPlusShutdownState(mockedNormalSubscriber, []);

  expect(state.hasPremium).toBe(false);
});

it("recognises a Plus user", async () => {
  const state = getPlusShutdownState(mockedPlusSubscriber, []);

  expect(state.hasPremium).toBe(true);
});
