/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],

  test: {
    environment: 'node',
    include: [
      '**/src/**/*.integration.vitest.{ts,tsx}',
    ],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/functional-tests/**',
    ],
    // Disable coverage for integration tests (as per Jest config)
    coverage: {
      enabled: false,
    },
    globals: true,
  },
});