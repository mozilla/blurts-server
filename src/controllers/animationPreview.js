/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { guestLayout } from '../views/guestLayout.js'
import { generateToken } from '../utils/csrf.js'
import { animationPreview } from '../views/partials/animationPreview.js'

function animationPreviewPage (req, res) {
  const data = {
    partial: animationPreview,
    csrfToken: generateToken(res),
    animations: [
      {
        name: 'Circles',
        filename: 'lottie-test-circles.json'
      },
      {
        name: 'Shapes',
        filename: 'lottie-test-shapes.json'
      }
    ]
  }

  res.send(guestLayout(data))
}

export { animationPreviewPage }
