/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { vi } from "vitest";
import type { useTelemetry as ogUseTelemetry } from "../useTelemetry";

const mockedRecordTelemetry = vi.fn();

export const useTelemetry: typeof ogUseTelemetry = () => {
  return mockedRecordTelemetry as ReturnType<typeof ogUseTelemetry>;
};
