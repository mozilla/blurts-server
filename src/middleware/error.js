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
const errorHandler = (err, req, res, next) => {
  log.error('error', { stack: err.stack })
  const errStatus = err.statusCode || 500
  const errMsg = err.message || 'Empty error message'
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: process.env.NODE_ENV !== 'production' ? errMsg : 'Something went wrong',
    stack: process.env.NODE_ENV === 'dev' ? err.stack : {}
  })
}

/**
 * Used as a 404 default for routes
 */
const notFound = () => {
  const e = new Error('Page not found!')
  e.statusCode = 404
  throw e
}

export {
  errorHandler,
  notFound
}
