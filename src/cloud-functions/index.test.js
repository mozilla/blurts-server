/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect, jest } from "@jest/globals";

import { createResponse, createRequest } from "node-mocks-http";

import AppConstants from "../appConstants.js";

jest.mock("@sentry/node", () => {
  return {
    Handlers: {
      errorHandler: jest.fn(() => (_req, _res, next) => next()),
    },
  };
});
jest.mock("../utils/hibp.js");
jest.mock("../utils/email.js");

test("accepts valid payload", async () => {
  const req = createRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AppConstants.HIBP_NOTIFY_TOKEN}`,
    },
    url: "/api/v1/hibp/notify",
    body: { breachName: "Test1", hashPrefix: "...", hashSuffixes: ["..."] },
    fluentFormat: jest.fn(),
  });

  const resp = createResponse();

  const breachAlert = {
    IsVerified: true,
    Domain: "test",
    IsFabricated: true,
    IsSpamList: false,
  };

  const mockedUtilsHibp = jest.requireMock("../utils/hibp.js");
  mockedUtilsHibp.getBreachByName.mockReturnValue(breachAlert);

  // Call code-under-test
  const { app } = await import("./index.js");

  await app._router(req, resp);

  // Check expectations
  expect(resp.statusCode).toBe(200);
  expect(mockedUtilsHibp.getBreachByName).toHaveBeenCalledTimes(1);
  expect(mockedUtilsHibp.getBreachByName).toHaveBeenCalledWith(
    undefined,
    "Test1"
  );
});

test("rejects invalid bearer token", async () => {
  const req = createRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer invalid",
    },
    url: "/api/v1/hibp/notify",
    body: { breachName: "Test1", hashPrefix: "...", hashSuffixes: ["..."] },
    fluentFormat: jest.fn(),
  });

  const resp = createResponse();

  // Call code-under-test
  const { app } = await import("./index.js");
  await app._router(req, resp);

  // Check expectations
  expect(resp.statusCode).toBe(403);
});
