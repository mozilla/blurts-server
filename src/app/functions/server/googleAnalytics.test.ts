/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";
import { CONST_GA4_MEASUREMENT_ID } from "../../../constants";

/**
 * @jest-environment node
 */

jest.mock("../../../db/tables/google_analytics_clients", () => {
  return {
    getClientIdForSubscriber: jest.fn(() =>
      Promise.resolve({
        client_id: "testClientId1",
        cookie_timestamp: new Date(1234),
      }),
    ),
  };
});

jest.mock("./logging", () => {
  class Logging {
    error(message: string, details: object) {
      console.error(message, details);
    }
  }

  const logger = new Logging();
  return {
    logger,
  };
});

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

it("sends event name and parameters to GA", async () => {
  jest.spyOn(global, "fetch").mockImplementation(
    jest.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve(),
        ok: true,
      } as Response);
    }),
  );

  const { sendPingToGA } = await import("./googleAnalytics");
  await sendPingToGA(0, "testEvent", { testParam1: "testValue1" });

  expect(global.fetch).toHaveBeenCalledWith(
    `https://www.google-analytics.com/mp/collect?measurement_id=${CONST_GA4_MEASUREMENT_ID}&api_secret=${process.env.GA4_API_SECRET}`,
    {
      body: JSON.stringify({
        client_id: "testClientId1.1",
        events: [
          {
            name: "testEvent",
            params: {
              testParam1: "testValue1",
              debug_mode: "true",
              engagement_time_msec: "1",
            },
          },
        ],
      }),
      method: "POST",
    },
  );
});

it("sends event name and parameters to GA and receives error response", async () => {
  jest.spyOn(global, "fetch").mockImplementation(
    jest.fn(() => {
      return Promise.resolve({
        status: "500",
        text: () => Promise.resolve("failed"),
        ok: false,
      } as unknown as Response);
    }),
  );

  const loggingSpy = jest.spyOn(console, "error");

  const { sendPingToGA } = await import("./googleAnalytics");
  await sendPingToGA(0, "testEvent", { testParam1: "testValue1" });

  expect(global.fetch).toHaveBeenCalledWith(
    `https://www.google-analytics.com/mp/collect?measurement_id=${CONST_GA4_MEASUREMENT_ID}&api_secret=${process.env.GA4_API_SECRET}`,
    {
      body: JSON.stringify({
        client_id: "testClientId1.1",
        events: [
          {
            name: "testEvent",
            params: {
              testParam1: "testValue1",
              debug_mode: "true",
              engagement_time_msec: "1",
            },
          },
        ],
      }),
      method: "POST",
    },
  );

  expect(loggingSpy).toHaveBeenCalledWith("Could not send backend ping to GA", {
    status: "500",
    text: "failed",
  });
});

it("throws exception when no client_id is stored", async () => {
  jest.mock("../../../db/tables/google_analytics_clients", () => {
    return {
      getClientIdForSubscriber: jest.fn(() => ""),
    };
  });

  const { sendPingToGA } = await import("./googleAnalytics");
  await expect(
    sendPingToGA(0, "testEvent", { testParam1: "testValue1" }),
  ).rejects.toEqual(Error("No stored GA cookie for subscriber [0]"));
});

it("throws exception client_id is not present", async () => {
  jest.mock("../../../db/tables/google_analytics_clients", () => {
    return {
      getClientIdForSubscriber: jest.fn(() =>
        Promise.resolve({
          cookie_timestamp: new Date(1234),
        }),
      ),
    };
  });
  const { sendPingToGA } = await import("./googleAnalytics");
  await expect(
    sendPingToGA(0, "testEvent", { testParam1: "testValue1" }),
  ).rejects.toEqual(
    Error(
      "No GA client_id found for subscriber [0], cannot send backend events to Google Analytics",
    ),
  );
});

it("throws exception cookie_timestamp is not present", async () => {
  jest.mock("../../../db/tables/google_analytics_clients", () => {
    return {
      getClientIdForSubscriber: jest.fn(() =>
        Promise.resolve({
          client_id: "testClientId1",
        }),
      ),
    };
  });
  const { sendPingToGA } = await import("./googleAnalytics");
  await expect(
    sendPingToGA(0, "testEvent", { testParam1: "testValue1" }),
  ).rejects.toEqual(
    Error(
      "No GA client_id found for subscriber [0], cannot send backend events to Google Analytics",
    ),
  );
});

it("throws exception when required env vars are not set", async () => {
  delete process.env.GA4_API_SECRET;
  const { sendPingToGA } = await import("./googleAnalytics");
  await expect(
    sendPingToGA(0, "testEvent", { testParam1: "testValue1" }),
  ).rejects.toEqual(
    Error(
      "No GA4 API secret is defined, cannot send backend events Google Analytics",
    ),
  );
});
