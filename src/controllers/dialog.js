/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { camelize } from '../utils/string-helpers.js'
import { dialogLayout } from '../views/dialog.js'

async function dialog (req, res) {
  const data = {
    partialName: req.params.name,
    stylesheetPath: `/css/partials/${req.params.name}.css` // stylesheet derived from kebab-case partial name, e.g. /css/partials/add-email.css
  }

  try {
    const module = await import(`../views/partials/${data.partialName}.js`)
    data.partial = module[camelize(data.partialName)] // kebab-case filename maps to camelCase function export: `add-email.js` -> `addEmail()`
  } catch (e) {
    return res.sendStatus(404)
  }

  switch (data.name) {
    case 'add-email':
      // add or overwrite data, e.g. data.stylesheetPath = null
      break
  }

  res.send(dialogLayout(data))
}

export { dialog }
