/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { camelize } from '../utils/string-helpers.js'

async function dialog (req, res) {
  const path = req.params.partial
  const module = await import(`../views/partials/${path}.js`)
  const exportName = camelize(path)
  const partial = module[exportName]
  const data = {
    something: 'testing'
  }

  if (!partial) return res.sendStatus(404) // kebab-case filename needs to map to camelCase export: `add-email.js` -> `addEmail()`

  res.send(partial(data))
}

export { dialog }
