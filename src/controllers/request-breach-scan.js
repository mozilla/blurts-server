/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../utils/fluent.js'
import { getBreachLogo } from '../utils/breach-logo.js'
import { UserInputError } from '../utils/error.js'
import { getSha1 } from '../utils/fxa.js'
import { getBreachesForEmail } from '../utils/hibp.js'

/**
 * @typedef {{ success: false }} RequestBreachScanErrorResponse
 * @typedef {{ success: true, breaches: Array<unknown>, heading: string, logos: string[], dataClassStrings: string[][], total: number }} RequestBreachScanSuccessResponse
 * @typedef {RequestBreachScanErrorResponse | RequestBreachScanSuccessResponse} RequestBreachScanResponse
 */

/** @type {import('express').RequestHandler<unknown, RequestBreachScanResponse>} */
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

    /** @type {RequestBreachScanSuccessResponse} */
    const successResponse = {
      success: true,
      breaches: breaches.slice(0, 6),
      total: breaches.length,
      heading:
        // This is sent in the API response so we can replace the variables in
        // the Fluent string (because Fluent might change the strings depending
        // on the variables, specifically the count, and we don't run Fluent on
        // the client side):
        getMessage(
          'exposure-landing-result-hero-heading',
          {
            email,
            count: breaches.length
          }
        )
          .replace('<email>', `<span class="breach-result-email" title="${email}">`)
          .replace('</email>', '</span>')
          .replace('<count>', '<span class="breach-result-count">')
          .replace('</count>', '</span>'),
      // This is sent in the API response because we can't call `getBreachLogo`
      // client side, where it would expose AppConstants:
      logos: breaches.map(breach => getBreachLogo(breach, req.app.locals.breachLogoMap)),
      // This is sent in the API response because we don't have Fluent on the
      // client side, and thus can't dynamically localise breached data classes:
      dataClassStrings: breaches.map(breach => breach.DataClasses.map(/** @param {string} dataClass */ dataClass => getMessage(dataClass)))
    }
    res.json(successResponse)
    return
  } catch (ex) {
    res.status(500).send({ success: false })
  }
}

export { requestBreachScan }
