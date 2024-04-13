# Firefox Monitor Server

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

### Prerequisites

1. Create location data: Running the script manually is only needed for local development. The location data is being used in the onboarding exposures scan for autocompleting the “City and state” input.

   ```sh
   npm run create-location-data
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

3. Copy the `.env-dist` file to `.env`:

   ```sh
   cp .env-dist .env
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

Monitor uses GCP PubSub for processing incoming breach data, this can be tested locally using an emulator: https://cloud.google.com/pubsub/docs/emulator

#### Run the GCP PubSub emulator:

```sh
gcloud beta emulators pubsub start --project=your-project-name
```

### In a different shell, set the environment to point at the emulator and run Monitor in dev mode:

```sh
$(gcloud beta emulators pubsub env-init)
npm run dev
```

### Incoming WebHook requests from HIBP will be of the form:

```sh
curl -d '{ "breachName": "000webhost", "hashPrefix": "test", "hashSuffixes": ["test"] }' \
  -H "Authorization: Bearer unsafe-default-token-for-dev" \
  http://localhost:6060/api/v1/hibp/notify
```

### This pubsub queue will be consumed by this cron job, which is responsible for looking up and emailing impacted users:

```sh
node src/scripts/emailBreachAlerts.js
```

### Database

To create the database tables ...

1. Create the `blurts` database:

   ```sh
   createdb blurts
   createdb test-blurts # for tests
   ```

2. Update the `DATABASE_URL` value in your `.env` file with your local db
   credentials:

   ```
   DATABASE_URL="postgres://<username>:<password>@localhost:<port>/blurts"
   ```

3. Run the migrations:

   ```
   npm run db:migrate
   ```

### Emails

Monitor generates multiple emails that get sent to subscribers. To preview or test-send these emails see documentation [here](docs/monitor-emails.md).

### Mozilla accounts ("FxA", formerly known as Firefox accounts)

Subscribe with a Mozilla account is controlled via the `FXA_ENABLED`
environment variable. (See `.env-dist`)

The repo comes with a development FxA oauth app pre-configured in `.env`, which
should work fine running the app on http://localhost:6060. You'll need to get
the `OAUTH_CLIENT_SECRET` value from a team member or someone in #fxmonitor-engineering.

## Testing

The unit test suite can be run via `npm test`.

At the beginning of a test suite run, the `test-blurts` database will be populated with test tables and seed data found in `src/db/seeds/`

At the end of a test suite run in CircleCI, coverage info will be sent to [Coveralls](https://coveralls.io/) to assess coverage changes and provide a neat badge. To upload coverage locally, you need a root `.coveralls.yml` which contains a token – get this from another member of the Monitor team.

End-to-End tests use Playwright and can be run via `npm run e2e`. [E2E-How-To](https://github.com/mozilla/blurts-server/src/e2e) for more info.

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

## Localization

This repository has a dedicated branch for localization called... `localization`. To add localized text, add or update the relevant `.ftl` file under `locales/en`. Be sure to reference the [localization documentation](https://mozilla-l10n.github.io/documentation/localization/dev_best_practices.html) for best practices.

To trigger translations, open a pull request against `localization`. Please be mindful that Mozilla localizers are volunteers, and translations come from different locales at different times – usually after a week or more. It's best to initiate a PR when your strings are more-or-less final. Your PR should be automatically tagged with a reviewer from the [Mozilla L10n team](https://wiki.mozilla.org/L10n:Mozilla_Team) to approve your request.

After your updates are merged into `localization`, you will start to see commits from Pontoon, Mozilla's localization platform. You can also check translation status via the [Pontoon site](https://pontoon.mozilla.org/projects/firefox-monitor-website/).

When enough translations have been commited, you should merge `localization` into `main`, or back into your feature branch if it's not yet merged to `main`. Note it's unlikely to have 100% of locales translated. You might discuss with stakeholders which locales are priority.

**Important:** Do not use "Squash" or "Rebase" to merge `localization` into `main` or vice versa. Doing so creates new commit hashes and the branches will appear out of sync.

_**TODO:** explore means to auto-sync `localization` with `main`_

## Deploy on Heroku

We use Heroku apps for dev review only – official stage and production apps are built by the Dockerfile and CircleCI config, with deploy overseen by the Site Reliability Engineering team.

A merge to `main` auto-deploys that branch to Heroku. ~~We also employ Heroku's "Review Apps" to check Pull Requests. These are currently set to auto-deploy: you can find the app link in your GitHub Pull Request. Review apps auto-destroy after 2 days of inactivity.~~

If you encounter issues with Heroku deploys, be sure to check your environment variables, including those required in `app-constants.js`. Review apps also share a database and you should not assume good data integrity if testing db-related features.

_**TODO:** add full deploy process similar to Relay_

_**TODO:** consider whether we can re-enable Heroku Review Apps_

## Preserve sessions in local development

Sessions by default are stored in-memory, which means that when the server restarts (e.g. because you made a code change), you will have to log in again.

To avoid this hassle, you can install and run [Redis](https://redis.io/), which by default runs on `redis://localhost:6379`. Use that value for `REDIS_URL` in your `.env` file to preserve your sessions across server restarts.
