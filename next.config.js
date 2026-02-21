/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "6060",
      },
      {
        protocol: "https",
        hostname: "fx-breach-alerts.herokuapp.com/",
      },
      {
        protocol: "https",
        hostname: "monitor-stage.allizom.org",
      },
      {
        protocol: "https",
        hostname: "monitor.firefox.com",
      },
      {
        protocol: "https",
        hostname: "monitor.mozilla.org",
      },
      {
        protocol: "https",
        hostname: "firefoxusercontent.com",
      },
      {
        protocol: "https",
        hostname: "profile.stage.mozaws.net",
      },
      {
        protocol: "https",
        hostname: "profile.accounts.firefox.com",
      },
      // Stores breached companies' logos
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
    ],
  },
  /** @type {import('next').NextConfig['headers']} */
  async headers() {
    const headers = [
      {
        source: "/:path*",
        headers: [
          // Note: the Content-Security-Policy gets set in /src/middleware.ts
          //       (because it needs a dynamically-generated nonce).
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer, strict-origin-when-cross-origin",
          },
          {
            key: "Origin-Agent-Cluster",
            value: "?1",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=15552000; includeSubDomains",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "off",
          },
          {
            key: "X-Download-Options",
            value: "noopen",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Permitted-Cross-Domain-Policies",
            value: "none",
          },
          {
            key: "X-XSS-Protection",
            value: "0",
          },
        ],
      },
    ];

    const noindexEnvs = ["dev", "development", "heroku", "stage"];
    const noSearchEngineIndex = noindexEnvs.includes(process.env.NODE_ENV);
    if (noSearchEngineIndex) {
      headers.push({
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      });
    }

    return headers;
  },
  async redirects() {
    return [
      // Before we redesigned the website, the dashboard would be reachable
      // via /user/breaches:
      {
        source: "/user/breaches",
        destination: "/user/dashboard",
        permanent: true,
      },
      // While we were implementing a redesign, we made it available at the
      // /redesign subpath. In case we still have lingering links to there
      // anywhere, this redirect should have people end up at the right place:
      {
        source: "/redesign/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/user/dashboard/fix/data-broker-profiles/welcome-to-premium",
        destination: "/user/dashboard/fix/data-broker-profiles/welcome-to-plus",
        permanent: true,
      },
      // We used to have a page with security tips;
      // if folks get sent there via old lnks, redirect them to the most
      // relevant page on SuMo:
      {
        source: "/security-tips",
        destination: "https://support.mozilla.org/kb/how-stay-safe-web",
        permanent: false,
      },
      // Some subset of users still find their way to the old login
      // link, which redirects to a now-404 endpoint. Add a redirect
      // to the new endpoint while we are investigating.
      {
        source: "/oauth/confirmed",
        destination: "/api/auth/callback/fxa",
        permanent: false,
      },
    ];
  },
  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.ftl/,
      type: "asset/source",
    });

    return config;
  },
  turbopack: {
    rules: {
      "*.ftl": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
  // Without adding MJML here, Next.js has Webpack trying and failing to load
  // uglify-js when compiling MJML email templates to HTML in `renderEmail.ts`:
  // commonjs and knex are needed to avoid errors about not being able to load
  // better-sqlite3, for some reason.
  // Without adding ioredis-mock here, we get the following error with Turbopack enabled:
  //      ⨯ ./node_modules/fengari/src
  //    Module not found: Can't resolve './ROOT' <dynamic>
  //    server relative imports are not implemented yet. Please try an import relative to the file you are importing from.
  serverExternalPackages: ["mjml", "commonjs", "knex", "ioredis-mock"],
};

const sentryOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  org: "mozilla",
  project: "firefox-monitor",
  silent: false, // Suppresses all logs
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.

  // Upload additional client files (increases upload size)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#widen-the-upload-scope
  widenClientFileUpload: true,
  hideSourceMaps: false,

  sourcemaps: {
    disable: process.env.UPLOAD_SENTRY_SOURCEMAPS === "false",
  },
};

export default withSentryConfig(nextConfig, sentryOptions);
