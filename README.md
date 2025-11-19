# Firefox Monitor Server

[![Functional Test Suite](https://github.com/mozilla/blurts-server/actions/workflows/functional_tests_cron.yml/badge.svg)](https://github.com/mozilla/blurts-server/actions/workflows/functional_tests_cron.yml)

## Summary

Firefox Monitor notifies users when their credentials have been compromised in a data breach.

This code is for the monitor.mozilla.org service & website.

Breach data is powered by [haveibeenpwned.com](https://haveibeenpwned.com/).

See the [Have I Been Pwned about page](https://haveibeenpwned.com/About) for
the "what" and "why" of data breach alerts.

## Architecture

![Image of Monitor architecture](docs/monitor-architecture.png "Firefox Monitor")

## Development

### Requirements

- [Volta](https://volta.sh/) (installs the correct version of Node and npm)
- [Postgres](https://www.postgresql.org/) | Note: On a Mac, we recommend downloading the [Postgres.app](https://postgresapp.com/) instead.
- [Python](https://www.python.org/downloads/) | [With Homebrew](https://docs.brew.sh/Homebrew-and-Python)
- [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/) | k6 load testing tool

### Code style

Linting and formatting is enforced via [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) for JS and CSS. Both are installed as dev-dependencies and can be run with `npm run lint`. A push to origin will also trigger linting.

ESLint rules are based on [eslint-config-standard](https://github.com/standard/eslint-config-standard). To fix all auto-fixable problems, run `npx eslint . --fix`

Stylelint rules are based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard). To fix all auto-fixable problems, run `npx stylelint public/css/ --fix`

### GIT

We track commits that are largely style/formatting via `.git-blame-ignore-revs`. This allows Git Blame to ignore the format commit author and show the original code author. In order to enable this in GitLens, add the following to VS Code `settings.json`:

```
"gitlens.advanced.blame.customArguments": [
   "--ignore-revs-file",
   ".git-blame-ignore-revs"
],
```

### Database

To create the database tables you have two options: manually, or using docker-compose

#### Manual setup

1. Create the `blurts` database:

   ```sh
   createdb blurts
   createdb test-blurts # for tests
   ```

2. Update the `DATABASE_URL` value in your `.env.local` (see step 3 under
   "Install") file with your local db credentials:

   ```
   DATABASE_URL="postgres://<username>:<password>@localhost:<port>/blurts"
   ```

3. Run the migrations:

   ```
   npm run db:migrate
   ```

#### Via docker-compose

This will automatically provision the databases 'blurts' and 'test-blurts', and a user 'blurts' with password 'blurts'. The connection string in your .env.local file should be: "postgres://blurts:blurts@localhost:5432/blurts"

1. Ensure that you have an up-to-date .env.local file.

   ```$sh
   cp .env.local.example .env.local
   ```

2. Start docker containers (this will stand up all services defined, including pubsub)

   ```sh
   docker compose --env-file .env.local up -d
   ```

3. To tear down (this will delete stored data):

   ```sh
   docker compose --env-file .env.local down
   ```

### Install

1. Clone and change to the directory:

   ```sh
   git clone https://github.com/mozilla/blurts-server.git
   cd blurts-server
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Copy the `.env.local.example` file to `.env.local`:

   ```sh
   cp .env.local.example .env.local
   ```

4. Install fluent linter (requires Python)

   ```sh
   pip install -r .github/requirements.txt

   OR

   pip3 install -r .github/requirements.txt
   ```

5. Generate required Glean files (needs re-ran anytime Glean `.yaml` files are updated):

   ```sh
   npm run build-glean
   ```

6. Generate required Nimbus files (needs re-ran anytime Nimbus' `config/nimbus.yaml` file is updated):

   ```sh
   npm run build-nimbus
   ```

7. Create location data: Running the script manually is only needed for local development. The location data is being used in the onboarding exposures scan for autocompleting the “City and state” input.

   ```sh
   npm run create-location-data
   ```

8. Ensure that you have the right `env` variables/keys set in your `.env.local` file. You can retrieve the variables from the Firefox Monitor 1Password Vault, or through [Magic-Wormhole](https://magic-wormhole.readthedocs.io/en/latest/), by asking one of the our engineers.

### Run

1. To run the server similar to production using a build phase, which includes minified and bundled assets:

   ```sh
   npm start
   ```

   **_OR_**

   Run in "dev mode" with:

   ```sh
   npm run dev
   ```

2. You may receive the error `Required environment variable was not set`. If this is the case, get the required env var(s) from another team member or ask in #fx-monitor-engineering. Otherwise, if the server started successfully, navigate to [localhost:6060](http://localhost:6060/)

### PubSub

Monitor uses GCP PubSub for processing incoming breach data, this can be tested locally using an emulator: <https://cloud.google.com/pubsub/docs/emulator>

You can run the emulator manually or via docker-compose.

#### Manual Setup

##### Run the GCP PubSub emulator

```sh
gcloud beta emulators pubsub start --project=your-project-name
```

(Set `your-project-name` as the value for `GCP_PUBSUB_PROJECT_ID` in your `.env.local`.)

#### Docker Compose Setup

This will automatically provision a pubsub topic named 'hibp-breaches' with a subscription named 'hibp-cron'.

1. Ensure that you have an up-to-date .env.local file.

   ```$sh
   cp .env.local.example .env.local
   ```

2. Start docker containers (this will stand up all services defined, including postgres)

   ```sh
   docker compose --env-file .env.local up -d
   ```

### In a different shell, set the environment to point at the emulator and run Monitor in dev mode

```sh
$(gcloud beta emulators pubsub env-init)
npm run dev
```

### Incoming WebHook requests from HIBP will be of the form

```sh
curl -d '{ "breachName": "000webhost", "hashPrefix": "test", "hashSuffixes": ["test"] }' \
  -H "Authorization: Bearer unsafe-default-token-for-dev" \
  http://localhost:6060/api/v1/hibp/notify
```

This emulates HIBP notifying our API that a new breach was found. Our API will
then add it to the (emulated) pubsub queue.

You can also use this request with staging credentials and endpoint to manually trigger alerts in the staging environment. For instructions on how to generate the hashPrefix and hashSuffix values, see [instructions below](#testing-the-breach-alerts-cron-job-locally).

### This pubsub queue will be consumed by this cron job, which is responsible for looking up and emailing impacted users

```sh
NODE_ENV="development" npm run dev:cron:breach-alerts
```

### Emails

Monitor generates multiple emails that get sent to subscribers. To preview or test-send these emails see documentation [here](docs/monitor-emails.md).

### Mozilla accounts ("FxA", formerly known as Firefox accounts)

The repo comes with a development FxA oauth app pre-configured in `.env`, which
should work fine running the app on <http://localhost:6060>. You'll need to get
the `OAUTH_CLIENT_SECRET` value from a team member or someone in #fxmonitor-engineering.

## Testing

The unit test suite can be run via `npm test`.

At the beginning of a test suite run, the `test-blurts` database will be populated with test tables and seed data found in `src/db/seeds/`

At the end of a test suite, coverage info will be sent to [Coveralls](https://coveralls.io/) to assess coverage changes and provide a neat badge. To upload coverage locally, you need a root `.coveralls.yml` which contains a token – get this from another member of the Monitor team.

The [functional tests](https://github.com/mozilla/blurts-server/src/functional-tests) use Playwright and can be run via `npm run functional-tests`.

#### Test Firefox Integration

_**TODO:** the following functionality is disabled but the instructions are left here for posterity._

Firefox's internal about:protections page ("Protections Dashboard") fetches and
displays breach stats for Firefox users who are signed into their FXA.

To test this part of Monitor:

1. [Set a Firefox profile to use the staging Firefox Accounts
   server.](https://mozilla.github.io/ecosystem-platform/docs/process/using-the-staging-environment#working-with-staging-firefox-accounts)
2. In the same profile, go to about:config and replace [all
   `https://monitor.firefox.com`
   values](https://searchfox.org/mozilla-central/search?q=monitor.firefox.com&path=browser/app/profile/firefox.js) with `http://localhost:6060`
3. Restart Firefox with that profile.
4. Go to `about:protections`
5. Everything should be using your localhost instance of Monitor.

#### Load testing

k6 is used for load testing.

See <https://grafana.com/docs/k6/latest/get-started/running-k6/> for more information.

##### HIBP breach alerts

To test the HIBP breach alerts endpoint, use:

```sh
export SERVER_URL=...
export HIBP_NOTIFY_TOKEN=...
npm run loadtest:hibp-webhook
```

You can customise the number of requests to send in parallel ("virtual users") by setting the
[`K6_VUS`](https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/#vus) environment
variable (default 1000), and for how long to send those requests by setting the
[`K6_DURATION`](https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/#duration)
environment variable (default 30s).

You can also enforce the alert being sent for a specific email address via the
`LOADTEST_BREACHED_EMAIL` environment variable.

#### Testing the Breach Alerts cron job locally

1. Ensure SMTP_URL environment variable is unset; this will log to JSON instead of attempting to send an email
1. Follow instructions to start blurts server locally, including the database and emulated GCP PubSub topic
1. Create a new account, and note the email address you used for the next step
1. Update the email address below and paste into your terminal

```sh
# Replace with whatever email address you used above, or omit and
# export env var first to persist between runs
# `export HIBP_TEST_EAMIL=replace-me-email@example.com`
HIBP_TEST_EMAIL="kschelonka+dev4@mozilla.com"; \
HASH=$(echo -n "$HIBP_TEST_EMAIL" | sha1sum | awk '{print $1}'); \
PREFIX=${HASH:0:7}; \
SUFFIX=${HASH:7}; \
curl -d "{\"breachName\": \"000webhost\", \"hashPrefix\": \"$PREFIX\", \"hashSuffixes\": [\"$SUFFIX\"]}" \
  -H "Authorization: Bearer unsafe-default-token-for-dev" \
  -H "Content-Type: application/json" \
  http://localhost:6060/api/v1/hibp/notify
```

Note that the database must be seeded with breaches or else this request will not trigger emails due to validation error. The breachName must match the name of a breach in the database. Query the `breaches` table in the database for additional breach names to test more than once for the same email address (a user will be notified for a breach only once). Alternatively you can delete the record that was created in the `email_notifications` table to retest.

## Localization

All text that is visible to the user is defined in [Fluent](https://projectfluent.org/) files inside `/locales/en/` and `/locales-pending/`. After strings get added to files in the former directory on our `main` branch, they will be made available to our volunteer localizers via Pontoon, Mozilla's localization platform. Be sure to reference the [localization documentation](https://mozilla-l10n.github.io/documentation/localization/dev_best_practices.html) for best practices. It's best to only move the strings to `/locales/en/` when they are more-or-less final and ready for localization. Your PR should be automatically tagged with a reviewer from the [Mozilla L10n team](https://wiki.mozilla.org/L10n:Mozilla_Team) to approve your request.

You can check translation status via the [Pontoon site](https://pontoon.mozilla.org/projects/firefox-monitor-website/). After strings have been localized, [a pull request](https://github.com/mozilla/blurts-server/pulls?q=is%3Apr+label%3Al10n+) with the updated strings is automatically opened against our repository. Please be mindful that Mozilla localizers are volunteers, and translations come from different locales at different times – usually after a week or more.

To use the strings in code, you need to obtain a `ReactLocalization` instance, which selects the right version of your desired string for the user. How to do that depends on where your code runs: in tests, in a cron job, in a server component, or on the client-side. Generally, you will import a `getL10n` function from one of the modules in `/src/app/functions/l10n/`, except for [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components), which use [the `useL10n` hook](./src/app/hooks/l10n.ts). Look at existing code for inspiration.

## Preview Deployment

We use GCP Cloudrun for dev review – official stage and production apps are built by the Dockerfile and Github Actions. Everything that is merged into `main` will deploy automatically to stage. The ADR for preview deployment can be found [here](https://github.com/mozilla/blurts-server/blob/main/docs/adr/0008-preview-deployment.md)

_**TODO:** add full deploy process similar to Relay_

_**TODO:** consider whether we can re-enable Heroku Review Apps_
