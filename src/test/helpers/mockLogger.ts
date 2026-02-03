/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Logger } from "winston";
import { vi } from "vitest";

// Extremely minimal logger mock, works for most needs
// After [MNTOR-1880] probably unnecessary
export function mockLogger() {
  // Check if we're in Vitest environment
  const mockFn = typeof vi !== 'undefined' ? vi.fn as unknown as typeof jest.fn : jest.fn;

  return {
    info: mockFn(),
    error: mockFn(),
    warn: mockFn(),
    debug: mockFn(),
  } as unknown as Logger;
}
