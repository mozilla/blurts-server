/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/main.js'
import { errorPartial } from '../views/partials/errorPartial.js'

function errorPage (error, _req, res) {
  const data = {
    partial: errorPartial,
    data: error,
    nonce: res.locals.nonce
  }

  res.send(mainLayout(data))
}

export { errorPage }
