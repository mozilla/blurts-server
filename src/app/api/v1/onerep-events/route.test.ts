/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { OnerepWebhookRequest } from "./route.ts";
import { processOnerepWebhook } from "./processOnerepWebhook.ts";

// TODO log correct severity
jest.mock("../../../functions/server/logging"),
  (message, details) => console.info(message, details);

it("accepts a valid initial OnerepWebhookRequest", () => {
  const mockRequest = {
    id: 0,
    profile_id: 0,
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

  expect(processOnerepWebhook(mockRequest)).toBe("testing");
});
