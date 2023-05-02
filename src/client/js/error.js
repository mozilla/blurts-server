/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// TODO: Localize error messages
// Client error messages
const genericErrorMessage = 'Something went wrong. Please try again or come back later.'
const searchBreachesErrorMessage = 'We couldn’t search for the latest breaches. Please refresh or try again later.'
const emailVerificationErrorMessage = 'Email verification not sent. Please try again.'
const duplicateEmailErrorMessage = 'This email has already been verified. '
const addEmailErrorMessage = 'Email couldn’t be added. Please try again.'
const dataBrokerErrorMessage = 'Something went wrong. Please try again or come back later.'

const ErrorActionTypes = {
  None: 'none',
  Redirect: 'redirect',
  Toast: 'toast'
}

class ClientError extends Error {
  /**
   * @param {string} message
   * @param {Array<{ action: string, targetHref: string }>} config
   */
  constructor (message, ...config) {
    super(message, ...config)

    const [{
      action = ErrorActionTypes.None,
      targetHref = '/'
    }] = config

    this.config = { action, targetHref }
    this.message = message || genericErrorMessage
    this.toast = null

    this.handleConfig()
  }

  handleConfig () {
    switch (this.config.action) {
      case ErrorActionTypes.Redirect:
        this.handleRedirect()
        break
      case ErrorActionTypes.Toast:
        this.showToastNotification()
        break
      case ErrorActionTypes.None:
      default:
        // do nothing
    }
  }

  handleRedirect () {
    if (document.location.pathname !== this.config.targetHref) {
      document.location.href = this.config.targetHref
    }
  }

  showToastNotification () {
    if (this.toast) {
      return
    }

    this.toast = document.createElement('toast-alert')
    this.toast.textContent = this.message
    document.body.append(this.toast)
  }
}

export { ClientError }
