/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Logger } from "winston";
import { vi } from "vitest";

// Extremely minimal logger mock, works for most needs
// After [MNTOR-1880] probably unnecessary
export function mockLogger() {
  return {
    info: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
    debug: vi.fn(),
    child: vi.fn().mockImplementation(() => mockLogger()),
    // Call the callback immediately so that Promise-based shutdown loops resolve.
    on: vi.fn().mockImplementation((_event: string, cb: () => void) => cb()),
    end: vi.fn(),
  } as unknown as Logger;
}
