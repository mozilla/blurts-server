/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const nextConfig = {
  async headers () {
    /** @type {import('next').NextConfig['headers']} */
    const headers = [
      {
        source: '/:path*',
        headers: [
          // Most of these values are taken from the Helmet package:
          // https://www.npmjs.com/package/helmet
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "script-src 'self' https://*.googletagmanager.com",
              "script-src-attr 'none'",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
              `img-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://firefoxusercontent.com https://mozillausercontent.com https://monitor.cdn.mozilla.net ${process.env.FXA_ENABLED ? new URL(process.env.OAUTH_PROFILE_URI).origin : ''}`,
              "child-src 'self'",
              "style-src 'self'",
              "font-src 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "object-src 'none'",
              'upgrade-insecure-requests'
            ].join('; ')
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer, strict-origin-when-cross-origin'
          },
          {
            key: 'Origin-Agent-Cluster',
            value: '?1'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=15552000; includeSubDomains'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off'
          },
          {
            key: 'X-Download-Options',
            value: 'noopen'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none'
          },
          {
            key: 'X-XSS-Protection',
            value: '0'
          }
        ]
      }
    ]

    const noindexEnvs = ['dev', 'development', 'heroku', 'stage']
    const noSearchEngineIndex = noindexEnvs.includes(process.env.NODE_ENV)
    if (noSearchEngineIndex) {
      headers.push({
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex'
          }
        ]
      })
    }

    return headers
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ftl/,
      type: 'asset/source'
    })

    config.externals ??= {}
    config.externals.push({
      knex: 'commonjs knex'
    })

    return config
  }
}

module.exports = nextConfig
