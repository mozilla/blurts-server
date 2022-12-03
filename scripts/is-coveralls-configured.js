'use strict'
/*
Check if coveralls configuration is available.

Exit 0 if configured to run coveralls
Exit 1 if coveralls will fail

For required environment variables, see:
https://github.com/nickmerwin/node-coveralls
*/

const { existsSync } = require('node:fs')

if (process.env.COVERALLS_REPO_TOKEN) {
  console.log('coveralls configured with environment variable COVERALLS_REPO_TOKEN.')
} else if (existsSync('.coveralls.yml')) {
  console.log('coveralls configured with configuration file ".coveralls.yml".')
} else {
  console.log('coveralls is not configured.')
  process.exit(1)
}
