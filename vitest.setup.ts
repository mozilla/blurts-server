/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import '@testing-library/jest-dom/vitest';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { TextEncoder, TextDecoder } from 'util';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Global polyfills
global.TextEncoder = TextEncoder as typeof global.TextEncoder;
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}

// Add fetch global for compatibility
global.fetch = global.fetch || fetch;

// Environment variables for testing
process.env.PUBSUB_EMULATOR_HOST = "localhost:8085";