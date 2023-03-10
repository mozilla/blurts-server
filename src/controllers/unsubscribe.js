/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/mainLayout.js'
import { unsubscribe } from '../views/partials/unsubscribe.js'
import { generateToken } from '../utils/csrf.js'

function unsubscribePage (req, res) {
  const queryParams = req.query

  const data = {
    csrfToken: generateToken(res),
    partial: unsubscribe,
    queryParams
  }

  res.send(mainLayout(data))
}

export { unsubscribePage }
