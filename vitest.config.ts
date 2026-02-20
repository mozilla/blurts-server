/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Absolute path to the file-mock stub so the plugin can redirect any image
// import (including dynamic template-literal imports at runtime) to a real file
// that the Vite module runner can load without a custom `load` hook.
const fileMockAbsPath = path.resolve(__dirname, "src/__mocks__/fileMock.ts");

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      // Redirect all static-asset imports (PNG, JPG, etc.) to a stub module so
      // that dynamic imports of non-existent image files (e.g. data-broker
      // logos) succeed in tests.  Returning an absolute path to a real file
      // (rather than a virtual "\0…" ID) ensures the Vite module runner can
      // load the stub without needing a separate `load` hook.
      name: "static-asset-mock",
      enforce: "pre",
      resolveId(id) {
        if (/\.(png|jpg|jpeg|gif|webp|svg)$/.test(id)) {
          return fileMockAbsPath;
        }
      },
    },
  ],

  css: {
    modules: {
      // Use local class names in tests to match Jest/identity-obj-proxy behaviour,
      // where CSS module imports return the local name (e.g. "floatingLabel")
      // rather than a hashed name (e.g. "_floatingLabel_e0a292").
      // classNameStrategy is a Vitest-specific option (not standard Vite) that
      // controls how CSS module class names are generated in tests.
      // classNameStrategy: 'non-scoped',
      generateScopedName: "[local]",
    },
  },

  test: {
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/src/**/*.test.{ts,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/functional-tests/**",
      "**/*.integration.{ts,tsx}",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/db/knexfile.ts",
        "src/apiMocks/mockData.ts",
        "src/**/*.stories.{ts,tsx}",
        ".storybook/",
        "src/test/",
        "coverage/",
        "**/*.d.ts",
      ],
      thresholds: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
    globals: true,
    clearMocks: true,
    restoreMocks: true,
    alias: [
      {
        find: "next/font/local",
        replacement: "/src/__mocks__/next/font/local.ts",
      },
      {
        find: "next/font/google",
        replacement: "/src/__mocks__/next/font/google.ts",
      },
      { find: "next/image", replacement: "/src/__mocks__/next/image.tsx" },
      // Image imports (PNG, JPG, SVG, etc.) are handled by the static-asset-mock
      // plugin above, which redirects them to src/__mocks__/fileMock.ts.
    ],
  },
});
