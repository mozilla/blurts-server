/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const ErrorActionTypes = {
  None: 'none',
  Toast: 'toast'
}

const defaultMessage = 'Something went wrong. Please try again or come back later.'
const defaultConfig = { action: ErrorActionTypes.None }

class ClientError extends Error {
  /**
   * @param {string} message
   * @param {Array<{ action: string, targetHref: string }>} config
   */
  constructor (message, config = defaultConfig) {
    super(config)

    this.config = config
    this.message = message || defaultMessage
    this.toast = null

    this.handleConfig()
  }

  handleConfig () {
    switch (this.config.action) {
      case ErrorActionTypes.Toast:
        this.showToastNotification()
        break
      case ErrorActionTypes.None:
      default:
        // do nothing
        break
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
