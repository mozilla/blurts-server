/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/main.js'
import { dataRemoval } from '../views/partials/data-removal.js'

function dataRemovalPage (req, res) {
  const data = {
    fxaProfile: req.user.fxa_profile_json,
    partial: dataRemoval,
    nonce: res.locals.nonce
  }

  res.send(mainLayout(data))
}

export { dataRemovalPage }
