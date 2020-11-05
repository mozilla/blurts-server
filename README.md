# Firefox Monitor Server

## Summary

Firefox Monitor notifies users when their credentials have been compromised in a data breach.

This code is for the monitor.firefox.com service & website.

Breach data is powered by [haveibeenpwned.com](https://haveibeenpwned.com/).

See the [Have I Been Pwned about page](https://haveibeenpwned.com/About) for
the "what" and "why" of data breach alerts.

## Development

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

#### Emails

The included `.env-dist` sets `DEBUG_DUMMY_SMTP=1` which disables emails.

To send emails, you'll need to unset `DEBUG_DUMMY_SMTP` and supply real SMTP
config values for sending email.

You can set and source these via the `.env` file, or set them directly:

```sh
export DEBUG_DUMMY_SMTP=
export SMTP_HOST=<your-smtp-host>
export SMTP_PORT=<your-smtp-port>
export SMTP_USERNAME=<your-username>
export SMTP_PASSWORD=<your-password>
```

#### Firefox Accounts

Subscribe with a Firefox Account is controlled via the `FXA_ENABLED`
environment variable. (See `.env-dist`)

The repo comes with a development FxA oauth app pre-configured in `.env`, which
should work fine running the app on http://localhost:6060

To use a different Firefox Accounts oauth relying party,
you'll need to [create an FxA Oauth Client](https://oauth-stable.dev.lcip.org/console/clients) and then set some `OAUTH` config values.

You can set and source these via the `.env` file:

```sh
OAUTH_CLIENT_ID=<your-fxa-oauth-client-id>
OAUTH_CLIENT_SECRET=<your-fxa-oauth-client-secret>
OAUTH_AUTHORIZATION_URI="https://oauth-stable.dev.lcip.org/v1/authorization"
OAUTH_PROFILE_URI="https://stable.dev.lcip.org/profile/v1/profile"
OAUTH_TOKEN_URI="https://oauth-stable.dev.lcip.org/v1/token"
```

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
