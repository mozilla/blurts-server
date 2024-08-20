/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { OnerepWebhookRequest } from "./route.ts";
import { processOnerepWebhook } from "./processOnerepWebhook.ts";

import { optoutProfile } from "../../../functions/server/onerep";
import { refreshStoredScanResults } from "../../../functions/server/refreshStoredScanResults";
import { logger } from "../../../functions/server/logging.ts";

jest.mock("../../../functions/server/onerep", () => ({
  optoutProfile: jest.fn(),
}));

jest.mock("../../../functions/server/refreshStoredScanResults.ts", () => ({
  refreshStoredScanResults: jest.fn(),
}));

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

jest.spyOn(logger, "info");

const mockRequest = {
  id: 99,
  profile_id: 1133,
  type: "scan.completed",
  data: {
    object: {
      id: 0,
      status: "finished",
      profile_id: 1133,
      reason: "initial",
      created_at: "",
      updated_at: "",
      url: "",
    },
  },
  created_at: "",
} as OnerepWebhookRequest;

it("accepts a valid initial OnerepWebhookRequest", async () => {
  mockRequest.data.object.reason = "initial";
  await processOnerepWebhook(mockRequest);

  expect(logger.info).toHaveBeenCalledWith("received_onerep_webhook", {
    profileId: mockRequest.profile_id,
    scanId: mockRequest.data.object.id,
    reason: "initial",
  });
  expect(optoutProfile).toHaveBeenCalledTimes(0);
  expect(refreshStoredScanResults).toHaveBeenCalledWith(mockRequest.profile_id);
});

it("accepts a valid manual OnerepWebhookRequest", async () => {
  mockRequest.data.object.reason = "manual";
  await processOnerepWebhook(mockRequest);

  expect(logger.info).toHaveBeenCalledWith("received_onerep_webhook", {
    profileId: mockRequest.profile_id,
    scanId: mockRequest.data.object.id,
    reason: "manual",
  });
  expect(optoutProfile).toHaveBeenCalledTimes(0);
  expect(refreshStoredScanResults).toHaveBeenCalledWith(mockRequest.profile_id);
});

it("accepts a valid monitoring OnerepWebhookRequest", async () => {
  mockRequest.data.object.reason = "monitoring";
  await processOnerepWebhook(mockRequest);

  expect(logger.info).toHaveBeenCalledWith("received_onerep_webhook", {
    profileId: mockRequest.profile_id,
    scanId: mockRequest.data.object.id,
    reason: "monitoring",
  });
  expect(optoutProfile).toHaveBeenCalledTimes(1);
  expect(refreshStoredScanResults).toHaveBeenCalledWith(mockRequest.profile_id);
});
