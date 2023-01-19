/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Helps handle errors for all async route controllers
// See https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
function asyncMiddleware (fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

function bearerToken (req, res, next) {
  const [type, token] = req.headers.authorization?.split(' ') || []
  if (type && type === 'Bearer') {
    req.token = token
  } else if (req.query && req.query.token) {
    req.token = req.query.token
  }
  next()
}

export { asyncMiddleware, bearerToken }
