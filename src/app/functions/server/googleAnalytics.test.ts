/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";
import { CONST_GA4_MEASUREMENT_ID } from "../../../constants";

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
    warn(message: string, details: object) {
      console.warn(message, details);
    }
  }

  const logger = new Logging();
  return {
    logger,
  };
});

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

it("sends event name and parameters to GA", async () => {
  global.fetch = jest.fn<typeof global.fetch>().mockResolvedValue({
    ok: true,
    status: 200,
    json: () => Promise.resolve(),
  } as Response);

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
  global.fetch = jest.fn<typeof global.fetch>().mockResolvedValue({
    ok: false,
    status: 500,
    text: () => Promise.resolve("failed"),
  } as Response);

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
    status: 500,
    text: "failed",
  });
});

it("logs a warning when client_id is not stored in DB", async () => {
  jest.mock("../../../db/tables/google_analytics_clients", () => {
    return {
      getClientIdForSubscriber: jest.fn(() =>
        Promise.resolve({
          cookie_timestamp: new Date(1234),
        }),
      ),
    };
  });
  const loggingSpy = jest.spyOn(console, "warn");

  const { sendPingToGA } = await import("./googleAnalytics");
  await sendPingToGA(0, "testEvent", { testParam1: "testValue1" });

  expect(loggingSpy).toHaveBeenCalledWith("missing_ga4_client_id", {
    subscriberId: 0,
  });
});

it("logs a warning if cookie_timestamp is not present", async () => {
  jest.mock("../../../db/tables/google_analytics_clients", () => {
    return {
      getClientIdForSubscriber: jest.fn(() =>
        Promise.resolve({
          client_id: "testClientId1",
        }),
      ),
    };
  });
  const loggingSpy = jest.spyOn(console, "warn");

  const { sendPingToGA } = await import("./googleAnalytics");
  await sendPingToGA(0, "testEvent", { testParam1: "testValue1" });

  expect(loggingSpy).toHaveBeenCalledWith("missing_ga4_client_id", {
    subscriberId: 0,
  });
});

it("logs a warning if cookie_timestamp cannot be parsed", async () => {
  jest.mock("../../../db/tables/google_analytics_clients", () => {
    return {
      getClientIdForSubscriber: jest.fn(() =>
        Promise.resolve({
          client_id: "testClientId1",
          cookie_timestamp: "invalid",
        }),
      ),
    };
  });
  const loggingSpy = jest.spyOn(console, "warn");

  const { sendPingToGA } = await import("./googleAnalytics");
  await sendPingToGA(0, "testEvent", { testParam1: "testValue1" });

  expect(loggingSpy).toHaveBeenCalledWith("could_not_parse_ga4_cookie", {
    message: "cookie_timestamp.getTime is not a function",
    stack: expect.anything(),
    subscriberId: 0,
  });
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
