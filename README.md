# Breach Alerts

## Summary

Firefox Breach Alerts notifies users when their credentials have possibly been leaked or stolen in a data breach. Powered by [haveibeenpwned.com](https://haveibeenpwned.com/).

## Context

See the [Have I Been Pwned about page](https://haveibeenpwned.com/About) for
the "what" and "why" of data breach alerts.

This project aims to explore how Firefox - as the user agent - can support this. 

See [the Breach Alert Product Brief](https://docs.google.com/document/d/1GTS0HIihfTErA7P19HPYfvHCA3v9g67B_Cf2bpmE0Bw/edit)
for more background, objectives, key use cases.

## Development

### Requirements

* [Node](https://nodejs.org/) 8 (with npm)

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

2. Visit the `test.html` page at [localhost:6060/test.html](http://localhost:6060/test.html)

### Lint

After installing the dependencies, you can lint the code by calling:

```sh
npm run lint
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

To use Firefox Accounts, you'll need to [create an FxA Oauth Client](https://oauth-stable.dev.lcip.org/console/clients)
and then set some `OAUTH` config values.

You can set and source these via the `.env` file, or set them directly:

```sh
OAUTH_CLIENT_ID=<your-fxa-oauth-client-id>
OAUTH_CLIENT_SECRET=<your-fxa-oauth-client-secret>
OAUTH_AUTHORIZATION_URI="https://oauth-stable.dev.lcip.org/v1/authorization"
OAUTH_PROFILE_URI="https://stable.dev.lcip.org/profile/v1/profile"
OAUTH_TOKEN_URI="https://oauth-stable.dev.lcip.org/v1/token"
```

## Testing

TBD

## Deployment

blurts is designed with [12-factor](https://12factor.net/) methodology.

### Deploy on Heroku

You will need to set required environment variables on Heroku.

```sh
heroku config:set COOKIE_SECRET=unsafe-cookie-secret-for-heroku
heroku config:set DEBUG_DUMMY_SMTP=1
```
