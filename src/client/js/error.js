/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
    this.message = message || 'Something went wrong. Please try again or come back later.'
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
        break
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
