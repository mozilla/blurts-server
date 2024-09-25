/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";
import { CONST_GA4_MEASUREMENT_ID } from "../../../constants";
/* eslint-disable @typescript-eslint/no-unused-vars */

jest.mock("../../../db/tables/google_analytics_clients", () => {
  return {
    getClientIdForSubscriber: jest.fn(() =>
      Promise.resolve({ client_id: "testClientId1", cookie_timestamp: "1234" }),
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

beforeEach(async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true });

  const { logger } = await import("./logging");
  jest.spyOn(console, "error").mockImplementation(() => {});
});

it("sends event name and parameters to GA", async () => {
  const { sendPingToGA } = await import("./googleAnalytics");
  await sendPingToGA(0, "testEvent", { testParam1: "testValue1" });

  expect(global.fetch).toHaveBeenCalledWith(
    `https://www.google-analytics.com/mp/collect?measurement_id=${CONST_GA4_MEASUREMENT_ID}&api_secret=${process.env.GA4_API_SECRET}`,
    {
      body: JSON.stringify({
        client_id: "testClientId1.1234",
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
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    status: "500",
    text: jest.fn().mockResolvedValue("failed"),
  });

  const loggingSpy = jest.spyOn(console, "error");

  const { sendPingToGA } = await import("./googleAnalytics");
  await sendPingToGA(0, "testEvent", { testParam1: "testValue1" });

  expect(global.fetch).toHaveBeenCalledWith(
    `https://www.google-analytics.com/mp/collect?measurement_id=${CONST_GA4_MEASUREMENT_ID}&api_secret=${process.env.GA4_API_SECRET}`,
    {
      body: JSON.stringify({
        client_id: "testClientId1.1234",
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
