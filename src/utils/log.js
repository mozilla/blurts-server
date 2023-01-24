/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import mozlog from 'mozlog'

import AppConstants from '../app-constants.js'

const log = mozlog({
  app: 'fx-monitor',
  level: AppConstants.MOZLOG_LEVEL,
  fmt: AppConstants.MOZLOG_FMT
})

export default log
