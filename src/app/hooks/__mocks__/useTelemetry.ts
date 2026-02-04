/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { useTelemetry as ogUseTelemetry } from "../useTelemetry";

const mockedRecordTelemetry = (() => {
  // Support both Jest and Vitest environments
  if (typeof jest !== 'undefined') {
    return jest.fn();
  } else {
    return vi.fn();
  }
})();

export const useTelemetry: typeof ogUseTelemetry = () => {
  return mockedRecordTelemetry as ReturnType<typeof ogUseTelemetry>;
};
