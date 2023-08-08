/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

// See https://nextjs.org/docs/architecture/nextjs-compiler#jest

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import("@jest/types").Config.InitialOptions} */
const customJestConfig = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/tmp/jest_rs",

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/db/knexfile.js",
    // Old, pre-Next.js code assumed to be working:
    "<rootDir>/src/appConstants.js",
    "<rootDir>/src/views/",
    "<rootDir>/src/middleware/",
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    // The following thresholds are set while transitioning to stronger unit
    // test discipline; future code should only increase coverage and, ideally,
    // remove these exceptions by getting the coverage to 100%, or individually
    // skipping code for coverage as appropriate, with a comment describing why.
    // See https://github.com/istanbuljs/v8-to-istanbul/blob/fca5e6a9e6ef38a9cdc3a178d5a6cf9ef82e6cab/README.md#ignoring-uncovered-lines
    "src/apiMocks/mockData.ts": {
      branches: 85,
      functions: 50,
      lines: 50,
      statements: 90,
    },
    "src/app/(proper_react)/redesign/MobileShell.tsx": {
      branches: 50,
      functions: 50,
      lines: 94,
      statements: 94,
    },
    "src/app/(proper_react)/redesign/PageLink.tsx": {
      branches: 60,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    "src/app/(proper_react)/redesign/(authenticated)/user/dashboard/DashboardTopBanner.tsx":
      {
        branches: 66.66,
        functions: 83,
        lines: 98,
        statements: 98,
      },
    "src/app/(proper_react)/redesign/(authenticated)/user/dashboard/View.tsx": {
      branches: 80,
      functions: 71,
      lines: 87,
      statements: 87,
    },
    "src/app/(proper_react)/redesign/(authenticated)/user/welcome/EnterInfo.tsx":
      {
        branches: 100,
        functions: 40,
        lines: 89,
        statements: 89,
      },
    "src/app/(proper_react)/redesign/(authenticated)/user/welcome/FindExposures.tsx":
      {
        branches: 70,
        functions: 100,
        lines: 74,
        statements: 74,
      },
    "src/app/(proper_react)/redesign/(authenticated)/user/welcome/GetStarted.tsx":
      {
        branches: 100,
        functions: 50,
        lines: 100,
        statements: 100,
      },
    "src/app/(proper_react)/redesign/(authenticated)/user/welcome/View.tsx": {
      branches: 95,
      functions: 50,
      lines: 99,
      statements: 99,
    },
    "src/app/components/client/Chart.tsx": {
      branches: 100,
      functions: 25,
      lines: 100,
      statements: 100,
    },
    "src/app/components/client/ComboBox.tsx": {
      branches: 83,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    "src/app/components/client/ExposureCard.tsx": {
      branches: 72.41,
      functions: 75,
      lines: 79,
      statements: 79,
    },
    "src/app/components/client/ExposuresFilter.tsx": {
      branches: 50,
      functions: 5,
      lines: 71,
      statements: 71,
    },
    "src/app/components/client/ExposuresFilterExplainer.tsx": {
      branches: 100,
      functions: 0,
      lines: 16,
      statements: 16,
    },
    "src/app/components/client/InputField.tsx": {
      branches: 83,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    "src/app/components/client/ListBox.tsx": {
      branches: 100,
      functions: 0,
      lines: 40,
      statements: 40,
    },
    "src/app/components/client/LocationAutocompleteInput.tsx": {
      branches: 62,
      functions: 50,
      lines: 74,
      statements: 74,
    },
    "src/app/components/client/Popover.tsx": {
      branches: 100,
      functions: 0,
      lines: 45,
      statements: 45,
    },
    "src/app/components/client/ProgressCard.tsx": {
      branches: 100,
      functions: 0,
      lines: 18,
      statements: 18,
    },
    "src/app/components/client/dialog/Dialog.tsx": {
      branches: 50,
      functions: 50,
      lines: 79,
      statements: 79,
    },
    "src/app/components/client/toolbar/AppPicker.tsx": {
      branches: 75,
      functions: 37,
      lines: 72,
      statements: 72,
    },
    "src/app/components/server/Icons.tsx": {
      branches: 90,
      functions: 66,
      lines: 68,
      statements: 68,
    },
    "src/app/components/server/StatusPill.tsx": {
      branches: 50,
      functions: 100,
      lines: 83,
      statements: 83,
    },
    "src/app/functions/server/mockL10n.ts": {
      branches: 91,
      functions: 71,
      lines: 92,
      statements: 92,
    },
    "src/app/functions/universal/user.ts": {
      branches: 100,
      functions: 25,
      lines: 68,
      statements: 68,
    },
    "src/cloud-functions/index.js": {
      branches: 63,
      functions: 66,
      lines: 60,
      statements: 60,
    },
    "src/utils/*.js": {
      branches: 19,
      functions: 0,
      lines: 0,
      statements: 14,
    },
    "src/db/tables/*.js": {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    "src/app/functions/server/featureFlags.ts": {
      branches: 90.9,
      functions: 0,
      lines: 95.16,
      statements: 95.16,
    },
  },

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // The default configuration for fake timers
  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  modulePathIgnorePatterns: [
    "e2e/",
    // These are remnants of our old Express.js app, which we have yet to remove:
    "src/controllers",
  ],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // preset: undefined,

  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state before every test
  resetMocks: false,

  // Reset the module registry before running each individual test
  resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  // A map from regular expressions to paths to transformers
  // transform: undefined,

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};

const jestConfig = createJestConfig(customJestConfig);

module.exports = jestConfig;
