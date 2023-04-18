/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { MethodNotAllowedError } from '../utils/error.js'
import mozlog from '../utils/log.js'
import { guestLayout } from '../views/guestLayout.js'
import { error } from '../views/partials/error.js'
const log = mozlog('middleware')

/**
 * Generic error handling function that takes in an error with
 *
 * message: error message
 *
 * statusCode: http status code
 *
 * and returns a json response
 *
 * @param {object} err error object [ message, statusCode ]
 * @param {object} req request object
 * @param {object} res response object
 * @param {object} next middleware callback
 */
function errorHandler (err, req, res, next) {
  log.error('error', err.stack)
  const errStatus = err.statusCode || 500
  const errMsg = err.message || 'Empty error message'

  if (req.accepts('text/html') === 'text/html') {
    res.status(errStatus).send(guestLayout({
      partial: error,
      statusCode: errStatus
    }))
    return
  }

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: process.env.NODE_ENV !== 'production' ? errMsg : 'Something went wrong', // hide error message when in production
    stack: process.env.NODE_ENV === 'dev' ? err.stack : {} // hide stack when not in dev
  })
}

/**
 * Log 404 errors, but don't send a response - they're handled by the `notFound` view
 *
 * @param req
 * @param _res
 * @param next
 */
function notFound (req, _res, next) {
  log.info('http-error', { statusCode: 404, method: req.method, originalUrl: req.originalUrl })
  next()
}

function methodNotAllowed (req) {
  throw new MethodNotAllowedError(`Method not allowed: ${req.method} ${req.originalUrl}`)
}

export {
  errorHandler,
  notFound,
  methodNotAllowed
}
