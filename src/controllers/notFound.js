/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/main.js'
import { notFound } from '../views/partials/notFound.js'

function notFoundPage (req, res) {
  const data = {
    partial: notFound,
    nonce: res.locals.nonce
  }

  res.send(mainLayout(data))
}

export { notFoundPage }
