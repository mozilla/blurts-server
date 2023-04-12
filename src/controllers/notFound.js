/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { guestLayout } from '../views/guestLayout.js'
import { notFound } from '../views/partials/notFound.js'

function notFoundPage (req, res) {
  const data = {
    partial: notFound
  }

  res.status(404).send(guestLayout(data))
}

export { notFoundPage }
