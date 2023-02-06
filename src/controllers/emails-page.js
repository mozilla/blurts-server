/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/main.js'
import { emails } from '../views/partials/emails.js'
import { generateToken } from '../utils/csrf.js'

function emailsPage (req, res) {
  const data = {
    csrfToken: generateToken(res),
    fxaProfile: req.user.fxa_profile_json,
    partial: emails
  }

  res.send(mainLayout(data))
}

export { emailsPage }
