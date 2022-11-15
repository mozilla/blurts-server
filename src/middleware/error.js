import mozlog from '../utils/log.js'
const log = mozlog('middleware')

const errorHandler = (err, req, res, next) => {
  log.error('error', { stack: err.stack })
  const errStatus = err.statusCode || 500
  const errMsg = err.message || 'Something went wrong'
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'dev' ? err.stack : {}
  })
}

function notFound (req, res) {
  const e = new Error('Page not found!')
  e.statusCode = 404
  throw e
}

export {
  errorHandler,
  notFound
}
