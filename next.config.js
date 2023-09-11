/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 /* eslint @typescript-eslint/no-var-requires: "off" */
import { withSentryConfig } from "@sentry/nextjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
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
        hostname: "stage.firefoxmonitor.nonprod.cloudops.mozgcp.net",
      },
      {
        protocol: "https",
        hostname: "monitor.firefox.com",
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
      // We used to have a page with security tips;
      // if folks get sent there via old lnks, redirect them to the most
      // relevant page on SuMo:
      {
        source: "/security-tips",
        destination: "https://support.mozilla.org/kb/how-stay-safe-web",
        permanent: false,
      },
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ftl/,
      type: "asset/source",
    });

    config.externals ??= {};
    config.externals.push({
      knex: "commonjs knex",
    });

    return config;
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  org: "mozilla",
  project: "firefox-monitor",

  silent: true, // Suppresses all logs

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions)
