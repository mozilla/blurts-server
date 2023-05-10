/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const nextConfig = {
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
