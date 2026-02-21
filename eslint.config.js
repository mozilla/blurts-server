/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import checkFile from "eslint-plugin-check-file";
import header from "eslint-plugin-header";
import importPlugin from "eslint-plugin-import";
import vitestPlugin from "@vitest/eslint-plugin";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import storybook from "eslint-plugin-storybook";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Workaround for a compatibility issue between eslint-plugin-header and ESLint v9:
// See https://github.com/Stuk/eslint-plugin-header/issues/59
// TODO: This line can be removed and the default header config can be used
// again after the aforementioned issue has been fixed.
header.rules.header.meta.schema = false;

const estlintConfig = defineConfig([
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      // For some reason `eqeqeq` is not in the recommended set, but we try to
      // avoid implicit type casting, cause that's where bugs lurk:
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/hooks/*"],
              importNames: ["useGlean", "useGa"],
              message:
                "Please refrain from using this hook standalone. The preferred way to record telemetry is through `useTelemetry`.",
            },
          ],
          paths: [
            {
              name: "react-aria",
              importNames: ["VisuallyHidden"],
              message:
                "Please use the <VisuallyHidden> component from `/src/app/components/server/VisuallyHidden.tsx` instead of the one from react-aria, since the latter's (inline) styles will be stripped by our Content Security Policy.",
            },
            {
              name: "next-auth",
              importNames: ["getServerSession"],
              message:
                "Please use the `getServerSession` wrapper function from `/src/app/functions/server/getServerSession.ts` instead of the one from next-auth, since the latter's doesn't enforce passing the auth configuration object, resulting in broken sessions.",
            },
            {
              name: "next-auth/next",
              importNames: ["getServerSession"],
              message:
                "Please use the `getServerSession` wrapper function from `/src/app/functions/server/getServerSession.ts` instead of the one from next-auth, since the latter's doesn't enforce passing the auth configuration object, resulting in broken sessions.",
            },
            {
              name: "server-only",
              message:
                "Please import `/src/app/functions/server/notInClientComponent` instead of `server-only`, since the latter will also error in non-Next.js environments like cron jobs.",
            },
          ],
        },
      ],
    },
  },

  // Storybook configurations
  ...storybook.configs["flat/recommended"],

  // JSDoc plugin configuration
  {
    plugins: {
      jsdoc,
    },
    rules: {
      "jsdoc/tag-lines": ["error", "any", { startLines: 1 }],
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-param-description": "off",
      "jsdoc/require-property-description": "off",
      "jsdoc/require-returns": "off",
      "jsdoc/require-returns-type": "off",
      "jsdoc/require-returns-description": "off",
    },
  },

  // Header plugin configuration
  {
    plugins: {
      header,
    },
    rules: {
      "header/header": [
        "warn",
        "block",
        [
          " This Source Code Form is subject to the terms of the Mozilla Public",
          " * License, v. 2.0. If a copy of the MPL was not distributed with this",
          " * file, You can obtain one at http://mozilla.org/MPL/2.0/. ",
        ],
        2,
      ],
    },
  },

  // Check-file plugin configuration
  {
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        { "**/*.{js,css} !src/db/migrations": "CAMEL_CASE" },
        { ignoreMiddleExtensions: true },
      ],
    },
  },

  // Import plugin configuration
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },

  // TypeScript ESLint configuration
  {
    rules: {
      // Unused vars that start with an underscore are allowed to be unused:
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
        },
      ],
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  // next-env.d.ts is autogenerated by Next.js, so doesn't need our licence header
  {
    files: ["next-env.d.ts"],
    rules: { "header/header": "off" },
  },

  // Vitest configuration for test files
  {
    files: [
      "**/*.{test,spec}.{ts,tsx}",
      "**/*.integration.{ts,tsx}",
      "vitest.setup.ts",
    ],
    plugins: { vitest: vitestPlugin },
    rules: vitestPlugin.configs.recommended.rules,
  },

  // Next is not running ESLint on root files by default. The only way to
  // include those would be to explicitly add them one by one. Instead, we
  // run ESLint directly in addition to next lint on just the root files.
  // For more info see:
  // https://nextjs.org/docs/app/api-reference/config/eslint#linting-custom-directories-and-files
  {
    files: ["*.{js,cjs,ts}"],
    languageOptions: {
      parserOptions: { project: null },
    },
  },

  // Playwright configuration
  // Playwright's `use` function is misinterpreted as a React hook.
  // For more info see issue: https://github.com/facebook/react/issues/31237
  {
    files: ["functional-tests/**/*.ts"],
    languageOptions: {
      globals: {
        navigator: "readonly",
      },
    },
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },

  // Files that run in a Node environment.
  {
    files: ["lighthouserc.cjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    "node_modules/**",
    "storybook-static",
    "dist",
    "coverage",
    "!.storybook",
    "playwright-report/**",
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default estlintConfig;
