import { MethodNotAllowedError, NotFoundError } from '../utils/error.js'
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
 * @param {object} err error object [ message, statusCode ]
 * @param {object} req request object
 * @param {object} res response object
 * @param {object} next middleware callback
 */
function errorHandler (err, req, res, next) {
  log.error('error', err.stack)
  const errStatus = err.statusCode || 500
  const errMsg = err.message || 'Empty error message'
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: process.env.NODE_ENV !== 'production' ? errMsg : 'Something went wrong', // hide error message when in production
    stack: process.env.NODE_ENV === 'dev' ? err.stack : {} // hide stack when not in dev
  })
}

/**
 * Used as a 404 default for routes
 */
function notFound (req) {
  // TODO: when there's a 404 page to be rendered here,
  // replace the json return with html
  throw new NotFoundError(`Page not found! ${req.method} ${req.originalUrl}`)
}

function methodNotAllowed (req) {
  throw new MethodNotAllowedError(`Method not allowed: ${req.method} ${req.originalUrl}`)
}

export {
  errorHandler,
  notFound,
  methodNotAllowed
}
