/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { getDataBrokerName } from "./dataBrokerNames";

it("returns the data broker name of the data broker URL", () => {
  expect(getDataBrokerName("411locate.com")).toBe("411 Locate");
});

it("falls back to returning the data broker URL if there's no data broker name set", () => {
  expect(getDataBrokerName("no-name-set.com")).toBe("no-name-set.com");
});
