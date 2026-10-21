/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

// Tests that run against the production build (`next build` + `next start`).
export default defineConfig({
  plugins: [tsconfigPaths()],

  test: {
    environment: "node",
    include: ["**/src/**/*.builtServer.integration.ts"],
    exclude: ["**/node_modules/**"],
    coverage: {
      enabled: false,
    },
  },
});
