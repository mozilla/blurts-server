import { doubleCsrf } from 'csrf-csrf'
import * as AppConstants from '../app-constants.js'

// defaults to ignore GET, HEAD, OPTIONS
const { doubleCsrfProtection, generateToken } = doubleCsrf({
  getSecret: () => AppConstants.CSRF_SECRET,
  cookieName: 'monitor.x-csrf-token'
})

export {
  doubleCsrfProtection,
  generateToken
}
