/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/main.js'
import { settings } from '../views/partials/settings.js'

function settingsPage (req, res) {
  const {
    all_emails_to_primary: allEmailsToPrimary,
    fxa_profile_json: fxaProfile
  } = req.user

  const data = {
    allEmailsToPrimary,
    fxaProfile,
    partial: settings
  }

  res.send(mainLayout(data))
}

export { settingsPage }
