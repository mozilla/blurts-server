/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import checkFile from "eslint-plugin-check-file";
import header from "eslint-plugin-header";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import tsEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// Workaround for a compatibility issue between eslint-plugin-header and ESLint v9:
// See https://github.com/Stuk/eslint-plugin-header/issues/59
// TODO: This line can be removed and the default header config can be used
// again after the aforementioned issue has been fixed.
header.rules.header.meta.schema = false;

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "storybook-static",
      "dist",
      "coverage",
      "!.storybook",
      "playwright-report/**",
    ],
  },
  ...compat.config({
    extends: ["next"],
  }),
  ...storybook.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
    plugins: {
      jsdoc,
      "@typescript-eslint": tsEslint,
      import: importPlugin,
      header,
      "check-file": checkFile,
      jest: jestPlugin,
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
      // For some reason `eqeqeq` is not in the recommended set, but we try to
      // avoid implicit type casting, cause that’s where bugs lurk:
      eqeqeq: "error",
      "jsdoc/tag-lines": ["error", "any", { startLines: 1 }],
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-param-description": "off",
      "jsdoc/require-property-description": "off",
      "jsdoc/require-returns": "off",
      "jsdoc/require-returns-type": "off",
      "jsdoc/require-returns-description": "off",
      // Unused vars that start with an understore are allowed to be unused:
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
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
                "Please use the <VisuallyHidden> component from `/src/app/components/server/VisuallyHidden.tsx` instead of the one from react-aria, since the latter’s (inline) styles will be stripped by our Content Security Policy.",
            },
            {
              name: "next-auth",
              importNames: ["getServerSession"],
              message:
                "Please use the `getServerSession` wrapper function from `/src/app/functions/server/getServerSession.ts` instead of the one from next-auth, since the latter’s doesn’t enforce passing the auth configuration object, resulting in broken sessions.",
            },
            {
              name: "next-auth/next",
              importNames: ["getServerSession"],
              message:
                "Please use the `getServerSession` wrapper function from `/src/app/functions/server/getServerSession.ts` instead of the one from next-auth, since the latter’s doesn’t enforce passing the auth configuration object, resulting in broken sessions.",
            },
            {
              name: "server-only",
              message:
                "Please import `/src/app/functions/server/notInClientComponent` instead of `server-only`, since the latter will also error in non-Next.js environments like cron jobs.",
            },
          ],
        },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
        },
      ],
      "check-file/filename-naming-convention": [
        "error",
        { "**/*.{js,css} !src/db/migrations": "CAMEL_CASE" },
        { ignoreMiddleExtensions: true },
      ],
    },
  },
  {
    files: ["next-env.d.ts"],
    rules: { "header/header": "off" },
  },
  {
    files: ["**/*.test.{ts,tsx,js}"],
    plugins: { jest: jestPlugin },
    rules: jestPlugin.configs.recommended.rules,
  },
  {
    // Only enable rules that depend on type checking on TS files.
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      // See https://typescript-eslint.io/linting/typed-linting/#specifying-tsconfigs
      // Needed for `plugin:@typescript-eslint/recommended-requiring-type-checking`
      // to avoid this error:
      // > You have used a rule which requires parserServices to be generated.
      // > You must therefore provide a value for the "parserOptions.project"
      // > property for @typescript-eslint/parser.
      parser: tsParser,
      parserOptions: { project: "tsconfig.json" },
    },
    plugins: { "@typescript-eslint": tsEslint },
    rules: {
      ...tsEslint.configs["recommended"].rules,
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
    },
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
  // Playwright’s `use` function is misinterpreted as a React hook.
  // For more info see issue: https://github.com/facebook/react/issues/31237
  {
    files: ["functional-tests/**/*.ts"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
];

export default config;
