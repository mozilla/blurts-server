# Firefox Monitor Server

## Summary

Firefox Monitor notifies users when their credentials have been compromised in a data breach.

This code is for the monitor.firefox.com service & website.

Breach data is powered by [haveibeenpwned.com](https://haveibeenpwned.com/).

See the [Have I Been Pwned about page](https://haveibeenpwned.com/About) for
the "what" and "why" of data breach alerts.

## Development

Please refer to our [coding standards](docs/coding-standards.md) information for code styles, naming conventions and other methodologies.  
### Requirements

* [Node](https://nodejs.org/) 10 (with npm)
* [Postgres](https://www.postgresql.org/)

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

### Run

1. Run the server:

    ```sh
    npm start
    ```

Note: `npm start` uses `onchange` and `nodemon` to automatically detect file
changes, re-compile static assets, and restart the express process. If you want
more control, see the `scripts` section of `package.json` for more commands.

2. Navigate to [localhost:6060/](http://localhost:6060/)

#### Database

To create the database tables ...

1. Create the `blurts` database:

   ```sh
   createdb blurts
   createdb test-blurts # for tests
   ```

2. Update the `DATABASE_URL` value in your `.env` file with your local db
   credentials:

   ```
   DATABASE_URL="postgres://<username>@localhost:<port>/blurts"
   ```

3. Run the migrations:

   ```
   npm run db:migrate
   ```

#### Trigger Breach Alert Email
Breach alert emails are triggered via HIBP. For dev purposes, we can trigger them ourselves to send to a [Mailinator](https://www.mailinator.com) email address.

To set up your environment for email testing with Mailinator:
1. In your .env file, confirm or add values for `SMTP_URL`, `EMAIL_FROM`, `HIBP_KANON_API_TOKEN`, and `HIBP_API_TOKEN` (Ask for values in #fx-monitor-engineering)

2. If you don't have a local FxA account, sign up on localhost.  You'll need to ensure `FXA_ENABLED=true` and confirm/add the value for `OAUTH_CLIENT_SECRET` in your .env file. (Ask in #fx-monitor-engineering)

3. Start/restart your server

4. Login to your Monitor account at http://localhost:6060/, and scroll to the bottom of [your dashboard](http://localhost:6060/user/dashboard) to add localmonitor20200827@mailinator.com to your list of monitored email addresses

5. In your [Monitor settings](http://localhost:6060/user/dashboard), make sure notification preferences specify "Send breach alerts to the affected email address" (should be default).  This will send the alert to the Mailinator account.

   You *could* set it to forward to your main email address/account (e.g. Gmail), but localhost images will be broken.  The Mailinator account displays existing images automagically.

6. To trigger a breach alert email, you need to make a `POST /hibp/notify` request:
   * `Authorization: Bearer` header token value that matches `HIBP_NOTIFY_TOKEN`
   * `Content-Type: application/json` header
   * JSON body with `breachName`, `hashPrefix`, and `hashSuffix` values
      * `breachName` - string of a breach name in Monitor
      * `hashPrefix` - string of first 6 chars of a subscriber's `primary_sha1`
      * `hashSuffix` - array of strings of the remaining chars of the sha1 hash

   e.g., a localhost `curl` command that triggers a breach alert email for the Adobe breach to the `localmonitor20200827@mailinator.com` subscriber:

   ```
   curl -v -H "Authorization: Bearer unsafe-default-token-for-dev" -H "Content-Type: application/json" -d '{"breachName": "Adobe", "hashPrefix": "365050", "hashSuffixes": ["53cbb89874fc738c0512daf12bc4d91765"]}' http://localhost:6060/hibp/notify
   ```

7. Visit https://www.mailinator.com/v4/public/inboxes.jsp?to=localmonitor20200827# to view the email



#### Firefox Accounts

Subscribe with a Firefox Account is controlled via the `FXA_ENABLED`
environment variable. (See `.env-dist`)

The repo comes with a development FxA oauth app pre-configured in `.env`, which
should work fine running the app on http://localhost:6060. You'll need to get
the `OAUTH_CLIENT_SECRET` value from someone in #fxmonitor-engineering.

## Testing

The full test suite can be run via `npm test`.

### Individual tests

To run individual tests, use `NODE_ENV=tests` and `jest`:

```
NODE_ENV=tests jest --runInBand tests/home.test.js
```

To run tests with interactive `debugger` lines enabled:

```
NODE_ENV=tests node inspect --harmony ./node_modules/.bin/jest tests/home.test.js
```

### Integration tests

Integration tests utilize the `@wdio` suite in conjunction with selenium.  Tests include image comparisons that utilize the baseline images found in *tests/integration/tests/Visual_Baseline/desktop_firefox*.  In order to get the tests to run locally, you will need to have the Selenium standalone server installed on your machine:
```
brew install selenium-server-standalone
```

This should auto-install the Java dependency (openjdk), however, it may not be linked correctly.  You can test linkage by running `java -version`.  If your terminal is unable to locate the Java runtime, you can try linking it:
```
sudo ln -sfn /usr/local/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```

The image comparison tests are very brittle and may not work as expected when running strictly local, given individual machine setups.  You may have better luck running the headless test versions: "test:integration-headless", "test:integration-headless-ci", and "test:integration-docker"

Generating a new baseline image should ideally be done via the docker test to maintain consistency.  To do this, first delete the existing image and then run the docker integration test.  The test should prompt you that the baseline image cannot be found, and indicate the location for an auto-generated image to copy over.  Alternatively, you could also uncomment `autoSaveBaseline: true` in *tests/integration/wdio.docker.js* to have the image automatically copy/paste into *tests/integration/tests/Visual_Baseline/desktop_firefox*.

### Test Firefox Integration

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

### Lint

After installing the dependencies, you can lint the code by calling:

```sh
npm run lint
```

## Deployment

Firefox Monitor Breach Alerts is designed with [12-factor](https://12factor.net/) methodology.

### Deploy on Heroku

You will need to set some required environment variables on Heroku.

```sh
heroku config:set COOKIE_SECRET=unsafe-cookie-secret-for-heroku
heroku config:set DEBUG_DUMMY_SMTP=1
```

And any others, depending on the features you're running on Heroku - e.g.,
Email or Firefox Accounts.
