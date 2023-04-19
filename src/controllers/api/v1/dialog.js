/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../../../appConstants.js'
import { dialogLayout } from '../../../views/dialogLayout.js'
import { generateToken } from '../../../utils/csrf.js'

async function dialog (req, res) {
  const partialName = req.params.name

  const data = {
    csrfToken: generateToken(res)
  }

  try {
    const module = await import(`../views/partials/${partialName}.js`)
    data.partial = module[partialName]
  } catch (e) {
    return res.sendStatus(404)
  }

  switch (partialName) {
    case 'addEmail':
      data.emailLimit = AppConstants.MAX_NUM_ADDRESSES
      break
  }

  res.send(dialogLayout(data))
}

export { dialog }
