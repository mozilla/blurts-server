/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";
import { sendPingToGA } from "./googleAnalytics";
import { CONST_GA4_MEASUREMENT_ID } from "../../../constants";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getClientIdForSubscriber } from "../../../db/tables/google_analytics_clients";

jest.mock("../../../db/tables/google_analytics_clients", () => {
  return {
    getClientIdForSubscriber: jest.fn(),
  };
});

jest.mock("../../../functions/server/logging.ts", () => {
  class Logging {
    info(message: string, details: object) {
      console.info(message, details);
    }
  }

  const logger = new Logging();
  return {
    logger,
  };
});

it("sends event name and parameters to GA", async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true });

  // @disable typescript-eslint/no-unused-vars
  (getClientIdForSubscriber as jest.Mock) = jest.fn().mockResolvedValueOnce({
    client_id: "testClientId1",
    cookie_timestamp: "1234",
  });

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
