/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../utils/fluent.js'
import { UserInputError } from '../utils/error.js'
import { getSha1 } from '../utils/fxa.js'
import { getBreachesForEmail } from '../utils/hibp.js'

async function requestBreachScan (req, res, next) {
  if (req.method !== 'POST' || typeof req.body?.email !== 'string') {
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
    const allBreaches = req.app.locals.breaches
    const breaches = await getBreachesForEmail(getSha1(email), allBreaches, false)

    return res.json({ success: true, breaches })
  } catch (ex) {
    return res.status(500).send({ success: false })
  }
}

export { requestBreachScan }
