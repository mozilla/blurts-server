/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'

import { notify } from './hibp.js'
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

async function sendTestEmail (req, res) {
  const { app } = req

  const breachNotificationData = {
    breachName: 'Adobe',
    hashPrefix: '365050',
    hashSuffixes: ['53cbb89874fc738c0512daf12bc4d91765']
  }

  const notifyReq = {
    app,
    body: breachNotificationData,
    token: AppConstants.HIBP_NOTIFY_TOKEN
  }

  try {
    await notify(notifyReq, res)

    console.log('Sent breach alert email')
  } catch (e) {
    console.error('Could not send breach alert email:', e)
  }
}

export { emailsPage, sendTestEmail }
