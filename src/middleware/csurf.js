import { doubleCsrf } from 'csrf-csrf'
import * as AppConstants from '../app-constants.js'

// defaults to ignore GET, HEAD, OPTIONS
const { doubleCsrfProtection, generateToken } = doubleCsrf({
  getSecret: (req) => req.secret || AppConstants.CSURF_SECRET,
  cookieName: 'monitor.x-csrf-token'
})

export {
  doubleCsrfProtection,
  generateToken
}
