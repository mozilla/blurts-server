/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Logger } from "winston";

// Extremely minimal logger mock, works for most needs
// After [MNTOR-1880] probably unnecessary
export function mockLogger() {
  return {
    info: jest.fn(),
    error: jest.fn(),
    wran: jest.fn(),
    debug: jest.fn(),
  } as unknown as Logger;
}
