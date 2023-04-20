/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { guestLayout } from '../../views/guestLayout.js'
import {
  unsubscribe,
  unsubscribeMonthly
} from '../../views/partials/unsubscribe.js'
import { generateToken } from '../../utils/csrf.js'
import { unsubscribeFromMonthlyReport } from '../../utils/email.js'

function unsubscribePage (req, res) {
  const data = {
    csrfToken: generateToken(res),
    partial: unsubscribe
  }

  res.send(guestLayout(data))
}

async function unsubscribeMonthlyPage (req, res) {
  try {
    await unsubscribeFromMonthlyReport(req, res)
  } catch (error) {
    console.log(error)
    return res.redirect('/')
  }

  const data = {
    csrfToken: generateToken(res),
    partial: unsubscribeMonthly
  }

  res.send(guestLayout(data))
}

export {
  unsubscribePage,
  unsubscribeMonthlyPage
}
