/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 import fs from 'fs'
 import path from 'path'

 import AppConstants from '../appConstants.js'
 import packageJson from '../../package.json';

 const versionJsonPath = path.join(__dirname, '../../version.json')
 
 // If the version.json file already exists (e.g., created by circle + docker),
 // don't need to generate it
 if (!fs.existsSync(versionJsonPath)) { 
   const versionJson = {
     source: packageJson.homepage,
     version: packageJson.version,
     NODE_ENV: process.env.NODE_ENV,
   }
 
   fs.writeFileSync(versionJsonPath, JSON.stringify(versionJson, null, 2) + '\n')
 }
 
 function vers () {
   if (AppConstants.NODE_ENV === 'heroku') {
     /* eslint-disable no-process-env */
     return {
       commit: process.env.HEROKU_SLUG_COMMIT,
       version: process.env.HEROKU_SLUG_COMMIT,
       source: packageJson.homepage,
     };
     /* eslint-enable no-process-env */
   }
   return JSON.parse(fs.readFileSync(versionJsonPath, 'utf8'))
 }

/**
 * @param {any} req
 * @param {any} res
 */
function heartbeat (req, res) {
  return res.send('OK')
}

export {
  vers,
  heartbeat
}
