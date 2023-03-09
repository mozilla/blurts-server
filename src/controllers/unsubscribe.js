/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mainLayout } from '../views/mainLayout.js'
import { unsubscribe } from '../views/partials/unsubscribe.js'
import { generateToken } from '../utils/csrf.js'
import { UnauthorizedError } from '../utils/error.js'

const mandatoryParams = ['hash', 'token']

function unsubscribePage (req, res) {
  const queryParams = req.query
  const hasMandatoryParams = mandatoryParams.every(paramKey => (
    Object.hasOwn(queryParams, paramKey) && queryParams[paramKey] !== ''
  ))

  if (!hasMandatoryParams) {
    throw new UnauthorizedError('Not all mandatory params were provided.')
  }

  const data = {
    csrfToken: generateToken(res),
    partial: unsubscribe,
    queryParams
  }

  res.send(mainLayout(data))
}

export { unsubscribePage }
