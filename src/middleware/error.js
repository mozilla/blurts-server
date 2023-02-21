/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { errorPage } from '../controllers/error.js'
import { MethodNotAllowedError } from '../utils/error.js'
import mozlog from '../utils/log.js'

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
 * @param {object} error error object [ message, statusCode ]
 * @param {object} req request object
 * @param {object} res response object
 * @param {Function} next middleware callback
 */
function errorHandler (error, req, res, next) {
  log.error('error', error.stack)

  const errorStatus = error.statusCode || 500
  const errorMessage = error.message || 'Empty error message'

  // hide error message in production
  const message = process.env.NODE_ENV === 'production'
    ? 'Something went wrong' // TODO: Localize error string
    : errorMessage

  const errorData = {
    message,
    // show error stack only in dev
    stack: process.env.NODE_ENV === 'dev' ? error.stack : {},
    status: errorStatus,
    success: false
  }

  errorPage(errorData, req, res)
}

/**
 * Log 404 errors, but don't send a response - they're handled by the `notFound` view
 *
 * @param {object} req
 * @param {object} _res
 * @param {Function} next
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
