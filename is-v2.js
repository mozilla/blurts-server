// TODO: Delete this file – obsolete after Refresh V1 launch and legacy site retired

'use strict'

const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

if (process.env.MONITOR_V2 !== 'true') {
  console.log('MONITOR_V2 is false or undefined. Starting Monitor v1')
  process.exit(128)
}
