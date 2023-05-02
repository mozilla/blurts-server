/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// import { getMessage } from '../utils/fluent.js'

// General error strings
const badRequestErrorMessage = ''
const unauthorizedErrorMessage = 'You don’t have permission to access this content.'
const forbiddenErrorMessage = 'You don’t have permission to access this content.'
const methodNotAllowedErrorMessage = 'Method Not Allowed'
const tooManyRequestsErrorMessage = 'Too many requests received. Please try again later.'
const internalServerErrorMessage = 'Something went wrong. Please try again or come back later.'

// Custom error strings
const invalidSessionErrorMessage = "getMessage('oauth-invalid-session')"
const userInputErrorMessage = 'The information provided is not valid. Please check and try again.'
const resolveBreachErrorMessage = ''
const oneRepErrorMessage = ''
const duplicateEmailErrorMessage = 'This email has already been verified.'
const addEmailErrorMessage = 'Email couldn’t be added. Please try again.'
const emailVerificationErrorMessage = 'Email verification not sent. Please try again.'
const breachesErrorMessage = 'We couldn’t search for the latest breaches. Please refresh or try again later.'

class ServerSideError extends Error {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message = 'Server-side error', ...config) {
    super(message, ...config)

    if (!process) {
      console.info('This error is only supposed to be used server-side.')
    }
  }
}

class BadRequestError extends ServerSideError {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message = badRequestErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 400
    this.name = 'Bad request'
  }
}

class UnauthorizedError extends ServerSideError {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message = unauthorizedErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 401
    this.name = 'Unauthorized'
  }
}

class ForbiddenError extends ServerSideError {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message = forbiddenErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 403
    this.name = 'Forbidden'
  }
}

class MethodNotAllowedError extends ServerSideError {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message = methodNotAllowedErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 405
    this.name = 'Method Not Allowed'
  }
}
class ConflictError extends ServerSideError {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message = methodNotAllowedErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 409
    this.name = 'Conflict'
  }
}

class TooManyRequestsError extends ServerSideError {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message = tooManyRequestsErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 429
    this.name = 'Too Many Requests'
  }
}

class InternalServerError extends ServerSideError {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message = internalServerErrorMessage, ...config) {
    super(message, ...config)
    this.statusCode = 500
    this.name = 'Internal Server Error'
  }
}

class FluentError extends ServerSideError {
  /**
   * Fluent error
   *
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message = '', ...config) {
    super(message, ...config)
    // this.message = getMessage(this.message)
    this.name = 'Fluent Error'
  }
}

export {
  BadRequestError,
  ConflictError,
  FluentError,
  ForbiddenError,
  InternalServerError,
  MethodNotAllowedError,
  ServerSideError,
  TooManyRequestsError,
  UnauthorizedError
}
