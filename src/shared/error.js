/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// General error strings
const badRequestErrorMessage = ''
const unauthorizedErrorMessage = 'You don’t have permission to access this content.'
const forbiddenErrorMessage = 'You don’t have permission to access this content.'
const methodNotAllowedErrorMessage = 'Method Not Allowed'
const tooManyRequestsErrorMessage = 'Too many requests received. Please try again later.'
const internalServerErrorMessage = 'Something went wrong. Please try again or come back later.'

// Custom error strings
const userInputErrorMessage = 'The information provided is not valid. Please check and try again.'
const resolveBreachErrorMessage = ''
const oneRepErrorMessage = ''
const duplicateEmailErrorMessage = 'This email has already been verified.'
const addEmailErrorMessage = 'Email couldn’t be added. Please try again.'
const emailVerificationErrorMessage = 'Email verification not sent. Please try again.'
const breachesErrorMessage = 'We couldn’t search for the latest breaches. Please refresh or try again later.'

/**
 * Server-side errors
 */

class ServerSideError extends Error {
  /**
   * @param {string?} message
   * @param {object} config
   */
  constructor (message, ...config) {
    super(message, ...config)

    // if (!process) {
    console.info('This error is only supposed to be used server-side.')
    // }
  }
}

class BadRequestError extends ServerSideError {
  /**
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = badRequestErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 400
    this.name = 'Bad request'
  }
}

class UnauthorizedError extends ServerSideError {
  /**
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = unauthorizedErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 401
    this.name = 'Unauthorized'
  }
}

class ForbiddenError extends ServerSideError {
  /**
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = forbiddenErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 403
    this.name = 'Forbidden'
  }
}

class MethodNotAllowedError extends ServerSideError {
  /**
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = methodNotAllowedErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 405
    this.name = 'Method Not Allowed'
  }
}

class TooManyRequestsError extends ServerSideError {
  /**
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = tooManyRequestsErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 429
    this.name = 'Too Many Requests'
  }
}

class InternalServerError extends ServerSideError {
  /**
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = internalServerErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 500
    this.name = 'Internal Server Error'
  }
}

/**
 * Custom errors
 */

class UserInputError extends BadRequestError {
  /**
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = userInputErrorMessage, ...config) {
    super(message, ...config)
    this.name = 'User Input Error'
  }
}

class ResolveBreachError extends InternalServerError {
  /**
   * Can’t mark breach as resolved
   *
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = resolveBreachErrorMessage, ...config) {
    super(message, ...config)
    this.name = 'Resolve Breach Error'
  }
}

class OneRepError extends InternalServerError {
  /**
   * OneRep scan can’t start
   *
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = oneRepErrorMessage, ...config) {
    super(message, ...config)
    this.name = 'OneRep Error'
  }
}

class DuplicateEmailError extends ServerSideError {
  /**
   * Duplicate email added
   *
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = duplicateEmailErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 460
    this.name = 'Duplicate Email Error'
  }
}

class AddEmailError extends ServerSideError {
  /**
   * Could not add email
   *
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = addEmailErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 461
    this.name = 'Add Email Error'
  }
}

class EmailVerificationError extends ServerSideError {
  /**
   * Email verification can’t be sent
   *
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = emailVerificationErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 462
    this.name = 'Email Verification Error'
  }
}

class BreachesError extends ServerSideError {
  /**
   * Data breach page: we couldn’t fetch the latest breaches
   *
   * @param {string?} message
   * @param {object} config
   */
  constructor (message = breachesErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 463
    this.name = 'Breaches Error'
  }
}

/**
 * Client-side errors
 */

class ClientSideError extends Error {
  /**
   * @param {string?} message
   * @param {object} config
   */
  constructor (message, ...config) {
    super(message, ...config)

    if (!window && !window.document) {
      console.info('This error is only supposed to be used client-side.')
    }
  }
}

const ErrorActionTypes = {
  None: 'none',
  Redirect: 'redirect',
  Toast: 'toast'
}

class ClientError extends Error {
  /**
   * @param {string} message
   * @param {object} config
   */
  constructor (message, ...config) {
    super(...config)

    if (!window && !window.document) {
      console.info('This error is only supposed to be used client-side.')
    }

    const [{
      action = ErrorActionTypes.None,
      targetHref = '/'
    }] = config

    this.config = { action, targetHref }
    this.message = message
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

export {
  ServerSideError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  MethodNotAllowedError,
  TooManyRequestsError,
  InternalServerError,
  UserInputError,
  ResolveBreachError,
  OneRepError,
  DuplicateEmailError,
  AddEmailError,
  EmailVerificationError,
  BreachesError,
  ClientSideError,
  ClientError
}
