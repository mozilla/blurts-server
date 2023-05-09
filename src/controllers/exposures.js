/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/mainLayout.js'
import { generateToken } from '../utils/csrf.js'
import { exposuresSetup } from '../views/partials/exposuresSetup.js'
import { exposuresList } from '../views/partials/exposuresList.js'
import { listScanResults } from '../external/onerep.js'

/**
 * @type {import('express').RequestHandler}
 */
async function exposuresPage (req, res, next) {
  if (!req.user) {
    next()
    return
  }
  const user = req.user
  const showDashboard = hasSetUpExposureScanning(user)

  if (!showDashboard) {
    /**
     * @type {MainViewPartialData<import('../views/partials/exposuresSetup').PartialParameters>}
     */
    const data = {
      partial: exposuresSetup,
      csrfToken: generateToken(res, req),
      nonce: res.locals.nonce,
      fxaProfile: user.fxa_profile_json
    }
    res.send(mainLayout(data))
    return
  }

  const scanResults = await listScanResults(user.onerep_profile_id)
  /**
   * @type {MainViewPartialData<import('../views/partials/exposuresList').PartialParameters>}
   */
  const data = {
    partial: exposuresList,
    csrfToken: generateToken(res, req),
    nonce: res.locals.nonce,
    fxaProfile: user.fxa_profile_json,
    scanResults
  }

  res.send(mainLayout(data))
}

/**
 * @param {NonNullable<import('express').Request['user']>} user
 * @returns {user is import('express').Request['user'] & { onerep_profile_id: number }} Whether the user has set up exposure scanning already
 */
function hasSetUpExposureScanning (user) {
  return typeof user.onerep_profile_id === 'number'
}

export { exposuresPage }
