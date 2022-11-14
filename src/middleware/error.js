const mozlog = require('./log')
const log = mozlog('middleware')

function logErrors (err, req, res, next) {
  log.error('error', { stack: err.stack })
  next(err)
}

function errorHandler (err, req, res, next) {
  if (req.xhr || req.headers['content-type'] === 'application/json') {
    res.status(err.status || 500).send({ message: err.message })
  } else {
    next(err)
  }
}

export {
  logErrors,
  errorHandler
}
