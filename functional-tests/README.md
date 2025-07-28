# Monitor Functional Test Suite

This repository contains the functional test suite for [Mozilla Monitor](https://monitor.mozilla.org).

[![Functional test suite status](https://github.com/mozilla/blurts-server/actions/workflows/functional_tests_cron.yml/badge.svg)](https://github.com/mozilla/blurts-server/actions/workflows/functional_tests_cron.yml)

## Install

```
npm install
npx playwright install
```

## Environment

The following environment variables are required:

```
E2E_TEST_ENV=<"local" | "stage" | "production">` # Enviroment to run the test suite against
E2E_TEST_BASE_URL=http://localhost:6060 # Testing URL
E2E_TEST_SECRET=test-secret # JWT token for validating requests
E2E_TEST_ACCOUNT_BASE_EMAIL=test-account # Gets appended to the dynamically created email addresses
E2E_TEST_ACCOUNT_BASE_PASSWORD=test-password # Password for the test accounts
```

## Running tests

Run the full test suite:
`npm run functional-tests`

For debug runs use:
`functional-tests:debug`

## How It Works

### Browsers & Locales

Each test project runs with a combination of:

- Browsers: Chromium, Firefox, Mobile Chrome
- Viewports: desktop and mobile
- Geolocations and locales: e.g. US (en-US), NL (nl-NL)

All combinations are defined in [playwright.config.ts](https://github.com/mozilla/blurts-server/functional-tests/playwright.config.ts).

### Global Setup

Before running the tests the `global-setup` script:

- Fetches feature flags from `/api/v1/admin/feature-flags` and saves them to `./functional-test-cache/enabled-feature-flags.json`
- Signs up a unique test user account per country
- Stores the login state per user in `./functional-test-cache/user-session-<country>.json`
- Stores the emails per user in `./functional-test-cache/user-emails.json`

## Artifacts

Artifacts such as traces, videos, and screenshots are saved to:

- `playwright-report/`: HTML report
- `test-results/`: test assets

To open the report:
`npx playwright show-report`

## Github Actions

### [Functional Test Suite (PR)](https://github.com/mozilla/blurts-server/.github/workflows/functional_tests_pr.yml)

Runs automatically on every push and pull request to the `main` branch:

- Builds and runs the application with `E2E_TEST_ENV=local`
- Runs the functional test suite
- Uploads `playwright-report/` and `test-results/` artifacts

### [Functional Test Suite (cron)](https://github.com/mozilla/blurts-server/.github/workflows/functional_tests_cron.yml)

Runs daily against `stage` and `production` environments:

- Supports scheduled (cronjob) and manually triggered runs (environment can be selected)
- Uploads artifacts and notifies Slack on failures
