/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { guestLayout } from '../views/guestLayout.js'
import { generateToken } from '../utils/csrf.js'
import { animationsPreview } from '../views/partials/animationsPreview.js'

function animationsPreviewPage (req, res) {
  const data = {
    partial: animationsPreview,
    csrfToken: generateToken(res)
  }

  res.send(guestLayout(data))
}

export { animationsPreviewPage }
