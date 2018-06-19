# Breach Alerts

## Summary

Firefox Breach Alerts notifies users when their credentials have possibly been leaked or stolen in a data breach. Powered by [haveibeenpwned.com](https://haveibeenpwned.com/).

Communicates with the [blurts-addon](https://github.com/mozilla/blurts-addon) client-side add-on for Firefox Monitor.

## Context

See the [Have I Been Pwned about page](https://haveibeenpwned.com/About) for
the "what" and "why" of data breach alerts.

This project explores how Firefox - as the user agent - can support this. 

See [the Breach Alert Product Brief](https://docs.google.com/document/d/1GTS0HIihfTErA7P19HPYfvHCA3v9g67B_Cf2bpmE0Bw/edit)
for more background, objectives, key use cases.

## Development

### Requirements

* [Node](https://nodejs.org/) 8+ (with npm)
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

2. Visit the `test.html` page at [localhost:6060] (http://localhost:6060)

#### Test Data

To create the test database tables, run the `knex` migrations:

* `./node_modules/.bin/knex --knexfile db/knexfile.js migrate:latest`

To populate the database with test data, use these scripts in `scripts/`:

* `node scripts/load-breaches.js` loads breaches from HIBP into the database

* `node scripts/load-breaches.js --help` will display usage help.

#### Breach Hashsets

This requires an enterprise subscriber API token from HIBP, which you will have
to get manually. Please ask a project admin if you need one. To download HIBP 
breach hashsets, set a `HIBP_API_TOKEN` environment variable. You can set and 
source it via the `.env` file, or set it directly:

```sh
export HIBP_API_TOKEN="<HIBP-API-TOKEN>"
```

With the `HIBP_API_TOKEN` set, run the `get-hashsets.js` script:

```sh
npm run scripts/get-hashsets.js
```

This will download the `.zip` files into `breach_hashsets/` directory.

## Testing

### Lint

After installing the dependencies, you can lint the code by calling:

```sh
npm run lint
```

## Deployment

Firefox Monitor Breach Alerts is designed with [12-factor](https://12factor.net/) methodology.

### Deploy on Heroku

You will need to set required environment variables on Heroku.

```sh
heroku config:set COOKIE_SECRET=unsafe-cookie-secret-for-heroku
heroku config:set DEBUG_DUMMY_SMTP=1
```
