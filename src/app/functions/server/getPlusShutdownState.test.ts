/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { SubscriberRow } from "knex/types/tables";

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

beforeEach(() => {
  process.env.BROKER_SCAN_SHUTDOWN_DATE = "2025-12-17";
  delete process.env.BROKER_SCAN_SHUTDOWN_RUNUP_DAYS;
});

it("does not mark today as a runup day if we're exactly BROKER_SCAN_SHUTDOWN_RUNUP_DAYS away from shutdown", async () => {
  const shutdownDate = new Date(Date.now() + 42 * 24 * 60 * 60 * 1000);
  process.env.BROKER_SCAN_SHUTDOWN_DATE = shutdownDate
    .toISOString()
    .split("T")[0];
  process.env.BROKER_SCAN_SHUTDOWN_RUNUP_DAYS = "42";
  // Note: we import this function dynamically so it picks up the new env vars:
  const getPlusShutdownState = (await import("./getPlusShutdownState"))
    .getPlusShutdownState;

  const state = getPlusShutdownState(mockedNormalSubscriber);

  expect(state.currentMoment).toBe("ye-olden-days");
});

it("marks today as a runup day if we're less than BROKER_SCAN_SHUTDOWN_RUNUP_DAYS away from shutdown", async () => {
  const shutdownDate = new Date(Date.now() + (42 - 1) * 24 * 60 * 60 * 1000);
  process.env.BROKER_SCAN_SHUTDOWN_DATE = shutdownDate
    .toISOString()
    .split("T")[0];
  process.env.BROKER_SCAN_SHUTDOWN_RUNUP_DAYS = "42";
  // Note: we import this function dynamically so it picks up the new env vars:
  const getPlusShutdownState = (await import("./getPlusShutdownState"))
    .getPlusShutdownState;

  const state = getPlusShutdownState(mockedNormalSubscriber);

  expect(state.currentMoment).toBe("runup");
});

it("marks today as a post-shutdown day if BROKER_SCAN_SHUTDOWN_DATE is in the past", async () => {
  const shutdownDate = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
  process.env.BROKER_SCAN_SHUTDOWN_DATE = shutdownDate
    .toISOString()
    .split("T")[0];
  // Note: we import this function dynamically so it picks up the new env vars:
  const getPlusShutdownState = (await import("./getPlusShutdownState"))
    .getPlusShutdownState;

  const state = getPlusShutdownState(mockedNormalSubscriber);

  expect(state.currentMoment).toBe("shutdown");
});

it("recognises a free user", async () => {
  // Note: we import this function dynamically so it picks up the new env vars:
  const getPlusShutdownState = (await import("./getPlusShutdownState"))
    .getPlusShutdownState;

  const state = getPlusShutdownState(mockedNormalSubscriber);

  expect(state.hasPremium).toBe(false);
});

it("recognises a Plus user", async () => {
  // Note: we import this function dynamically so it picks up the new env vars:
  const getPlusShutdownState = (await import("./getPlusShutdownState"))
    .getPlusShutdownState;

  const state = getPlusShutdownState(mockedPlusSubscriber);

  expect(state.hasPremium).toBe(true);
});
