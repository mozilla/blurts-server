/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function exposureScan (req, res, next) {
  if (req.method !== 'POST') {
    return next()
  }

  const allBreaches = req.app.locals.breaches

  const publicBreaches = allBreaches.filter(a => !a.IsSensitive)

  res.send(JSON.stringify({ success: true, breaches: publicBreaches }))
}

export { exposureScan }
