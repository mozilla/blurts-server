/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/mainLayout.js'
import { generateToken } from '../utils/csrf.js'
import { exposuresSetup } from '../views/partials/exposuresSetup.js'
import { exposuresList } from '../views/partials/exposuresList.js'

/**
 * @type {import('express').RequestHandler}
 */
async function exposuresPage (req, res) {
  const showDashboard = await hasSetUpExposureScanning(req.user)

  if (!showDashboard) {
    /**
     * @type {MainViewPartialData<import('../views/partials/exposuresSetup').PartialParameters>}
     */
    const data = {
      partial: exposuresSetup,
      csrfToken: generateToken(res, req),
      nonce: res.locals.nonce,
      fxaProfile: req.user?.fxa_profile_json
    }
    res.send(mainLayout(data))
    return
  }

  /**
   * @type {MainViewPartialData<import('../views/partials/exposuresList').PartialParameters>}
   */
  const data = {
    partial: exposuresList,
    csrfToken: generateToken(res, req),
    nonce: res.locals.nonce,
    fxaProfile: req.user?.fxa_profile_json
  }

  res.send(mainLayout(data))
}

/**
 * @param {import('express').Request['user']} user
 * @returns {Promise<boolean>} Whether the user has set up exposure scanning already
 */
async function hasSetUpExposureScanning (user) {
  // TODO: Once the back-end supports storing a user's exposure scan data,
  //       check whether it has been entered:
  return false
}

export { exposuresPage }
