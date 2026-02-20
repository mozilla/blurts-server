/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "vitest";
import {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  MethodNotAllowedError,
  ConflictError,
  TooManyRequestsError,
} from "./error";

test("BadRequestError", () => {
  const errorMessage = "BadRequestError message";
  const error = new BadRequestError(errorMessage);
  expect(error.message).toBe(errorMessage);
  expect(error.name).toBe("Bad Request");
});

test("UnauthorizedError", () => {
  const errorMessage = "UnauthorizedError message";
  const error = new UnauthorizedError(errorMessage);
  expect(error.message).toBe(errorMessage);
  expect(error.name).toBe("Unauthorized");
});

test("ForbiddenError", () => {
  const errorMessage = "ForbiddenError message";
  const error = new ForbiddenError(errorMessage);
  expect(error.message).toBe(errorMessage);
  expect(error.name).toBe("Forbidden");
});

test("MethodNotAllowedError", () => {
  const errorMessage = "MethodNotAllowedError message";
  const error = new MethodNotAllowedError(errorMessage);
  expect(error.message).toBe(errorMessage);
  expect(error.name).toBe("Method Not Allowed");
});

test("ConflictError", () => {
  const errorMessage = "ConflictError message";
  const error = new ConflictError(errorMessage);
  expect(error.message).toBe(errorMessage);
  expect(error.name).toBe("Conflict");
});

test("TooManyRequestsError", () => {
  const errorMessage = "TooManyRequestsError message";
  const error = new TooManyRequestsError(errorMessage);
  expect(error.message).toBe(errorMessage);
  expect(error.name).toBe("Too Many Requests");
});
