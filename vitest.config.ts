/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    setupFiles: ["./vitest.setup.ts"], // optional
    globals: true,
    // Only using for new route tests which have ESM-only paths, for now
    include: ["src/test/api/**/*.test.ts", "src/test/api/**/*.spec.ts"],
    coverage: {
      enabled: true,
      provider: "v8",
      reportsDirectory: "coverage/vitest",
    },
  },
});
