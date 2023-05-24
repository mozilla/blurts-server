/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// import mozlog from 'mozlog'

// import AppConstants from '../appConstants.js'

// mozlog temporarily disabled because its module system appears to not work well
// with Next.js (uncomment this and comment out line 16 to see the errors)
// const log = mozlog({
//   app: 'fx-monitor',
//   level: AppConstants.MOZLOG_LEVEL,
//   fmt: AppConstants.MOZLOG_FMT
// })
const log = () => console

export default log
