import { csrfSync } from 'csrf-sync'

// defaults to ignore GET, HEAD, OPTIONS
const { csrfSynchronisedProtection, generateToken } = csrfSync()

const csrfProtection = () => {
  const ignoredMethods = new Set(['GET', 'HEAD', 'OPTIONS'])
  return (req, res, next) => {
    if (ignoredMethods.has(req.method)) {
      next()
    } else {
      csrfSynchronisedProtection(req, res, next)
    }
  }
}

export {
  csrfProtection,
  generateToken
}
