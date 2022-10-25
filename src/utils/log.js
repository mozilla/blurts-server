import mozlog from 'mozlog'

import AppConstants from '../app-constants.js'

const log = mozlog({
  app: 'fx-monitor',
  level: AppConstants.MOZLOG_LEVEL,
  fmt: AppConstants.MOZLOG_FMT
})

export default log
