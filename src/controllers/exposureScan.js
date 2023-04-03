/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../utils/fluent.js'
import { UserInputError } from '../utils/error.js'
import { getBreachesForEmail } from '../utils/hibp.js'

function exposureScan (req, res, next) {
  if (req.method !== 'POST') {
    return next()
  }

  // TODO could share this validation logic with add-email API?
  const email = req.body.email
  // Use the same regex as HTML5 email input type
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!email || !emailRegex.test(email)) {
    throw new UserInputError(getMessage('user-add-invalid-email'))
  }

  try {
    const allBreaches = getBreachesForEmail(email)
    const breaches = allBreaches.filter(a => !a.IsSensitive)

    return res.json({ success: true, breaches })
  } catch (ex) {
    return res.status(500).send({ success: false })
  }
}

export { exposureScan }
