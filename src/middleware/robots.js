/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'

const { NODE_ENV } = AppConstants

const allow = `user-agent: *
allow: /
`

const disallow = `user-agent: *
disallow: /
`

const rules = ['dev', 'heroku', 'stage'].includes(NODE_ENV) ? disallow : allow

function robotsTxt (req, res) {
  res.type('text/plain')
  res.send(rules)
}

export { robotsTxt }
