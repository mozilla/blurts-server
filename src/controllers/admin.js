/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/mainLayout.js'
import { admin } from '../views/partials/admin.js'

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
function adminPage (req, res) {
  const data = {
    fxaProfile: req.user.fxa_profile_json,
    partial: admin
  }

  res.send(mainLayout(data))
}

export { adminPage }
